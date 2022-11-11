import { Agenda } from ".";
import { Job, JobAttributesData } from "../job";
import { ClientSession } from 'mongodb';
/**
 * Create a job for this exact moment
 * @name Agenda#now
 * @function
 * @param name name of job to schedule
 * @param data data to pass to job
 * @param session mongodb transaction session (optional)
 */
export declare const now: <T extends JobAttributesData>(this: Agenda, name: string, data: T, session?: ClientSession | undefined) => Promise<Job>;
//# sourceMappingURL=now.d.ts.map