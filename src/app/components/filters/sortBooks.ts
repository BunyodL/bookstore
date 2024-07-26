import { BooksType, SortConfigType } from "@/@types";

export const sortBooks = (books: BooksType, sortConfig: SortConfigType, filterTags: string[]) => {
	// Фильтруем книги по тегам
	const filteredBooks = books.filter(book =>
		filterTags.every(tag => book.tags.includes(tag))
	);

	// Сортируем книги в зависимости от конфигурации сортировки
	const sortedBooks = filteredBooks.sort((a, b) => {
		switch (sortConfig.criteria) {
			case "price": {
				if (a.price === b.price) {
					return a.author.localeCompare(b.author);
				}
				return sortConfig.order === 'asc'
					? a.price - b.price
					: b.price - a.price;
			}
			case "author": {
				return sortConfig.order === 'asc'
					? a.author.localeCompare(b.author)
					: b.author.localeCompare(a.author);
			}
			case "date": {
				if (a.date === b.date) {
					return a.author.localeCompare(b.author);
				}
				return sortConfig.order === 'asc'
					? new Date(a.date) - new Date(b.date)
					: new Date(b.date) - new Date(a.date);
			}
			default:
				return 0
		}
	});

	return sortedBooks;
};
