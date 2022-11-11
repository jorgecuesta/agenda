import { Job } from ".";
import { ClientSession } from 'mongodb'

/**
 * Saves a job into the MongoDB
 * @name Job#
 * @function
 * @param session mongodb transaction session (optional)
 * @returns instance of Job resolved after job is saved or errors
 */
export const save = async function (this: Job, session?:ClientSession): Promise<Job> {
  return this.agenda.saveJob(this, session);
};
