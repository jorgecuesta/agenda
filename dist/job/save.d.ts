import { Job } from ".";
import { ClientSession } from 'mongodb';
/**
 * Saves a job into the MongoDB
 * @name Job#
 * @function
 * @param session mongodb transaction session (optional)
 * @returns instance of Job resolved after job is saved or errors
 */
export declare const save: (this: Job, session?: ClientSession | undefined) => Promise<Job>;
//# sourceMappingURL=save.d.ts.map