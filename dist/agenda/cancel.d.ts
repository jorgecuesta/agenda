import { Agenda } from ".";
import { ClientSession, Document, Filter } from 'mongodb';
/**
 * Cancels any jobs matching the passed MongoDB query, and removes them from the database.
 * @name Agenda#cancel
 * @function
 * @param query MongoDB query to use when cancelling
 * @param session mongodb transaction session (optional)
 * @caller client code, Agenda.purge(), Job.remove()
 */
export declare const cancel: (this: Agenda, query: Filter<Document>, session?: ClientSession | undefined) => Promise<number | undefined>;
//# sourceMappingURL=cancel.d.ts.map