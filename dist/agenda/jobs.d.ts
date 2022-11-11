import { ClientSession, Filter } from 'mongodb';
import { Agenda } from ".";
import { Job } from "../job";
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
export declare const jobs: (this: Agenda, query?: Filter<any>, sort?: {}, limit?: number, skip?: number, session?: ClientSession | undefined) => Promise<Job[]>;
//# sourceMappingURL=jobs.d.ts.map