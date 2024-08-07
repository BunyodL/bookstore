import { mergeClassNames } from "@/app/components/utils/mergeClassNames";
import React, { ButtonHTMLAttributes, SVGProps } from "react";

type FilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string
}

const FilterButton = ({ children, className, ...props }: FilterButtonProps) => {
	return (
		<button {...props} className={
			mergeClassNames(
				"text-background hover:text-accent cursor-pointer flex items-center gap-[10px] text-[12px]",
				className
			)}>
			{children}
		</button>
	)
}

export default FilterButton;