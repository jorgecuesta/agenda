import { Job } from ".";
import { ClientSession } from 'mongodb'

/**
 * Remove the job from MongoDB
 * @name Job#remove
 * @function
 * @param session mongodb transaction session (optional)
 */
export const remove = async function (this: Job, session?:ClientSession): Promise<number | undefined> {
  return this.agenda.cancel({ _id: this.attrs._id }, session);
};
