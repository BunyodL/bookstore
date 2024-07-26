export const mergeClassNames = (...classNames: (string | undefined)[]) =>
	classNames.reduce((p, c) => p + " " + c, "");