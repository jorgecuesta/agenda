import { Agenda } from ".";
import { ClientSession } from 'mongodb';
/**
 * Clear the interval that processes the jobs
 * @name Agenda#stop
 * @function
 * @param session mongodb transaction session (optional)
 * @returns resolves when job unlocking fails or passes
 */
export declare const stop: (this: Agenda, session?: ClientSession | undefined) => Promise<void>;
//# sourceMappingURL=stop.d.ts.map