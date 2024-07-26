export interface BookType {
	id: number
	title: string
	author: string
	illustrator?: string
	date?: string
	price: number
	tags: Array<string>
}

export type BooksType = Array<BookType>

export type SortCriteria = "price" | "author" | "date"

export type SortOrder = "asc" | "desc"

export type SortConfigType = {
	criteria: SortCriteria,
	order: SortOrder
}

export enum SessionStorage {
	books = "books",
	filterTags = "filterTags",
}