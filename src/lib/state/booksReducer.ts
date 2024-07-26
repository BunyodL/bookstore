import { BooksType, SessionStorage, SortConfigType } from "@/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
	books: BooksType
	filterTags: string[]
	sortConfig: SortConfigType
}

const initialState: InitialState = {
	books: [],
	filterTags: [],
	sortConfig: {
		criteria: "price",
		order: "asc"
	}
};

const bookSlice = createSlice({
	name: 'book',
	initialState: initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<BooksType>) => {
			state.books = action.payload;
			sessionStorage.setItem(SessionStorage.books, JSON.stringify(state.books));
		},
		setFilterTags: (state, action: PayloadAction<string>) => {
			if (!state.filterTags.includes(action.payload)) {
				state.filterTags = [...state.filterTags, action.payload];
			} else {
				state.filterTags = state.filterTags.filter(t => t !== action.payload);
			}

			sessionStorage.setItem(SessionStorage.filterTags, JSON.stringify(state.filterTags));
		},

		setFilterTagsFromSS: (state, action: PayloadAction<string[]>) => {
			state.filterTags = action.payload;
		},
		setSortConfig: (state, action: PayloadAction<SortConfigType>) => {
			state.sortConfig = action.payload;
		},
		resetRules: (state) => {
			state.filterTags = [];
			state.sortConfig = { criteria: "price", order: "asc" };
			sessionStorage.clear();
		}
	},
})

export const {
	resetRules,
	setSortConfig,
	setFilterTags,
	setBooks,
	setFilterTagsFromSS
} = bookSlice.actions

export default bookSlice.reducer

