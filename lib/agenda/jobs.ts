import {
  ClientSession,
  Filter,
} from 'mongodb'
import { Agenda } from ".";
import { Job } from "../job";
import { createJob } from "../utils";

/**
 * Finds all jobs matching 'query'
 * @name Agenda#jobs
 * @function
 * @param [query] object for MongoDB
 * @param [sort] object for MongoDB
 * @param [limit] number of documents to return from MongoDB
 * @param [skip] number of documents to skip in MongoDB
 * @param session mongodb transaction session (optional)
 * @returns resolves when fails or passes
 */
export const jobs = async function (
  this: Agenda,
  query: Filter<any> = {},
  sort = {},
  limit = 0,
  skip = 0,
  session?: ClientSession,
): Promise<Job[]> {
  const result = await this._collection
    .find(query, {session}) // eslint-disable-line
    .sort(sort)
    .limit(limit)
    .skip(skip)
    .toArray();

  return result.map((job: any) => createJob(this, job));
};
