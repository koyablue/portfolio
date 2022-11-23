/**
 * event type assertion
 *
 * const assertIsNode: (e: EventTarget | null) => asserts e is Node = e => {...}
 * to avoid
 * Assertions require every name in the call target to be declared with an explicit type annotation
 *
 * @param {(EventTarget | null)} e
 * @return {*}  {asserts}
 */
export const assertIsNode: (e: EventTarget | null) => asserts e is Node = e => {
	if (!e || !("nodeType" in e)) {
			throw new Error(`Node expected`);
	}
}
