import { Agenda } from ".";
import { ClientSession } from 'mongodb';
/**
 * Removes all jobs from queue
 * @name Agenda#purge
 * @function
 * @param session mongodb transaction session (optional)
 * @returns resolved when job cancelling fails or passes
 */
export declare const purge: (this: Agenda, session?: ClientSession | undefined) => Promise<number | undefined>;
//# sourceMappingURL=purge.d.ts.map