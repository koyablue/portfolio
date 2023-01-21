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

/**
 * Omit more than the specified number of characters
 * FIXME: make it possible to handle surrogate pair(emoji)
 *
 * @param {string} text
 * @param {number} len
 * @param {string} [ellipsis='...']
 * @return {*}  {string}
 */
export const omitStr = (
  text: string,
  len: number,
  ellipsis = '...'
): string => {
  return text.length >= len ? `${text.slice(0, len)}${ellipsis}` : text
}
