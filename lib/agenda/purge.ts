import createDebugger from "debug";
import { Agenda } from ".";
import { ClientSession } from 'mongodb'

const debug = createDebugger("agenda:purge");

/**
 * Removes all jobs from queue
 * @name Agenda#purge
 * @function
 * @param session mongodb transaction session (optional)
 * @returns resolved when job cancelling fails or passes
 */
export const purge = async function (
  this: Agenda,
  session?:ClientSession
): Promise<number | undefined> {
  // @NOTE: Only use after defining your jobs
  const definedNames = Object.keys(this._definitions);
  debug("Agenda.purge(%o)", definedNames);
  return this.cancel({ name: { $not: { $in: definedNames } } }, session);
};
