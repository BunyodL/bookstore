import { mergeClassNames } from "@/app/components/utils/mergeClassNames";
import React from 'react';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
	className?: string
}

const Container = ({ children, className, ...props }: Props) => {
	return (
		<div {...props} className={mergeClassNames( className,"bg-primary w-full  p-8")}>
			{children}
		</div>
	);
};

export default Container;