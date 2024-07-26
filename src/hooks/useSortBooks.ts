import { BooksType, SortConfigType } from "@/@types";
import { sortBooks } from "@/app/components/filters/sortBooks";
import { useEffect, useState } from "react";

export const useSortBooks = (books: BooksType, sortConfig: SortConfigType, filterTags: string[]) => {
	const [sortedBooks, setSortedBooks] = useState<BooksType>(books);

	useEffect(() => {
		const filteredAndSortedBooks = sortBooks(books, sortConfig, filterTags);
		setSortedBooks(filteredAndSortedBooks);
	}, [books, sortConfig, filterTags]);

	return sortedBooks;
}