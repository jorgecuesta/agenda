import { ClientSession, Filter } from 'mongodb';
import { Agenda } from ".";
/**
 * Enables any jobs matching the passed MongoDB query by setting the `disabled` flag to `false`
 * @name Agenda#enable
 * @function
 * @param query MongoDB query to use when enabling
 * @param session mongodb transaction session (optional)
 * @caller client code, Agenda.purge(), Job.remove()
 * @returns {Promise<Number>} A promise that contains the number of removed documents when fulfilled.
 */
export declare const enable: (this: Agenda, query?: Filter<unknown>, session?: ClientSession | undefined) => Promise<number>;
//# sourceMappingURL=enable.d.ts.map