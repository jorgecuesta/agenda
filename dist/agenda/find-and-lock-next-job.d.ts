import { Agenda } from ".";
import { Job } from "../job";
import { ClientSession } from 'mongodb';
/**
 * Find and lock jobs
 * @name Agenda#findAndLockNextJob
 * @function
 * @param jobName name of job to try to lock
 * @param definition definition used to tell how job is run
 * @param session mongodb transaction session (optional)
 * @access protected
 * @caller jobQueueFilling() only
 */
export declare const findAndLockNextJob: (this: Agenda, jobName: string, definition: any, session?: ClientSession | undefined) => Promise<Job | undefined>;
//# sourceMappingURL=find-and-lock-next-job.d.ts.map