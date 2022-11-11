import { ClientSession } from "mongodb";
import { Agenda } from ".";
import { Job } from "../job";
/**
 * Save the properties on a job to MongoDB
 * @name Agenda#saveJob
 * @function
 * @param job job to save into MongoDB
 * @param session mongodb transaction session (optional)
 * @returns resolves when job is saved or errors
 */
export declare const saveJob: (this: Agenda, job: Job, session?: ClientSession | undefined) => Promise<Job>;
//# sourceMappingURL=save-job.d.ts.map