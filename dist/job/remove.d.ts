import { Job } from ".";
import { ClientSession } from 'mongodb';
/**
 * Remove the job from MongoDB
 * @name Job#remove
 * @function
 * @param session mongodb transaction session (optional)
 */
export declare const remove: (this: Job, session?: ClientSession | undefined) => Promise<number | undefined>;
//# sourceMappingURL=remove.d.ts.map