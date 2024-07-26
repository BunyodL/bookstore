import { mergeClassNames } from "@/app/components/utils/mergeClassNames";
import React from "react";

export const HorizontalLine = ({ className }: { className?: string }) => {
	return <hr className={mergeClassNames("border-[#8498A8]", className)} />
};
