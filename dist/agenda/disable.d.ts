import { ClientSession, Filter } from 'mongodb';
import { Agenda } from ".";
/**
 * Disables any jobs matching the passed MongoDB query by setting the `disabled` flag to `true`
 * @name Agenda#disable
 * @function
 * @param query MongoDB query to use when enabling
 * @param session mongodb transaction session (optional)
 * @returns {Promise<number>} Resolved with the number of disabled job instances.
 */
export declare const disable: (this: Agenda, query?: Filter<unknown>, session?: ClientSession | undefined) => Promise<number>;
//# sourceMappingURL=disable.d.ts.map