import { Job } from ".";
import { ClientSession } from 'mongodb';
/**
 * Updates "lockedAt" time so the job does not get picked up again
 * @name Job#touch
 * @function
 * @param session mongodb transaction session (optional)
 */
export declare const touch: (this: Job, session?: ClientSession | undefined) => Promise<Job>;
//# sourceMappingURL=touch.d.ts.map