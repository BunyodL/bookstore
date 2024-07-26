import { mergeClassNames } from "@/app/components/utils/mergeClassNames";
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string
}

const Button = (props: ButtonProps) => {
	return (
		<button {...props} className={
			mergeClassNames(
				"btn rounded-full p-[10px] hover:btn-secondary",
				props.className
			)}>
			{props.children}
		</button>
	);
};

export default Button;