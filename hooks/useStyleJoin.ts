/**
 * hooks for class name join
 *
 * @return {*} {
			readonly styleJoin: (classNames: string[]) => string;
	}
 */
export const useStyleJoin = () => {
	/**
	 * ['flex', 'justify-center'] -> 'flex justify-center'
	 *
	 * @param {string[]} classNames
	 */
	const styleJoin = (classNames: string[]) => classNames.join(' ')

	return { styleJoin } as const
}
