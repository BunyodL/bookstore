import { BooksType, SessionStorage } from "@/@types";
import { getData } from "@/lib/api/getData";
import { setBooks, setFilterTagsFromSS } from "@/lib/state/booksReducer";
import { useAppDispatch, useAppSelector } from "@/lib/state/store";
import { useEffect } from "react";

export const useGetData = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (sessionStorage.getItem(SessionStorage.filterTags)) {
			const filterTags: string[] = JSON.parse(sessionStorage.getItem(SessionStorage.filterTags)!);
			dispatch(setFilterTagsFromSS(filterTags));
		}

		if (sessionStorage.getItem(SessionStorage.books)) {
			const books: BooksType = JSON.parse(sessionStorage.getItem(SessionStorage.books)!);
			dispatch(setBooks(books));
		} else {
			getData().then((data: BooksType) => {
				dispatch(setBooks(data))
			});
		}
	}, [dispatch]);

	return useAppSelector(s => s.books);
}
