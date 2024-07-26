import { SortConfigType, SortCriteria } from "@/@types";
import { setSortConfig } from "@/lib/state/booksReducer";
import { useAppDispatch, useAppSelector } from "@/lib/state/store";
import { useCallback } from "react";

export const useSortHandlers = (sortConfig:SortConfigType) => {
	const dispatch = useAppDispatch();

	const handleSort = useCallback((criteria: SortCriteria) => {
		let order = 'asc';
		if (sortConfig.criteria === criteria) {
			order = sortConfig.order === 'asc' ? 'desc' : 'asc';
		}
		dispatch(setSortConfig({ criteria, order } as SortConfigType));
	}, [sortConfig.criteria, sortConfig.order, dispatch]);


	return {
		handleSort
	}
}