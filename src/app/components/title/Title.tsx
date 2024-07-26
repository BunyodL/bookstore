import Container from "@/app/components/util-components/Container";
import { mergeClassNames } from "@/app/components/utils/mergeClassNames";
import React from 'react';

type TitleProps = React.HTMLAttributes<HTMLDivElement> & {
	className?: string
}

const Title = ({ children, className, ...props }: TitleProps) => {
	return (
		<Container className={"rounded-[32px]"}>
			<div {...props} className={
				mergeClassNames(
					"flex justify-center items-center text-[56px] ",
					className,
				)}>
				{children}
			</div>
		</Container>
	);
};

export default Title;