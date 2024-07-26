import { BooksType } from "@/@types";
import { useMemo } from "react";

export const useTags = (books: BooksType) => {
	return useMemo(() => {
		const allTags = books.map(u => u.tags).flat(5)

		const uniqueTags = new Set(allTags);

		return [...uniqueTags];
	}, [books])
};
