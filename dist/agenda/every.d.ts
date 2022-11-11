import { Agenda } from ".";
import { JobAttributesData } from "../job";
import { JobOptions } from "../job/repeat-every";
import { ClientSession } from 'mongodb';
/**
 * Creates a scheduled job with given interval and name/names of the job to run
 * @name Agenda#every
 * @function
 * @param interval - run every X interval
 * @param names - String or strings of jobs to schedule
 * @param data - data to run for job
 * @param options - options to run job for
 * @param session mongodb transaction session (optional)
 * @returns Job/s created. Resolves when schedule fails or passes
 */
export declare const every: <T extends JobAttributesData>(this: Agenda, interval: string, names: string | string[], data?: T | undefined, options?: JobOptions | undefined, session?: ClientSession | undefined) => Promise<any>;
//# sourceMappingURL=every.d.ts.map