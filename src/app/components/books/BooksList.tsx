"use client"

import { BooksType } from "@/@types";
import Book from "@/app/components/books/Book";
import Container from "@/app/components/util-components/Container";
import React from 'react';

type Props = {
	books: BooksType;
}

const BooksList = ({ books }: Props) => {
	return (
		<Container className={"rounded-[32px]"}>
			<div className={"flex flex-col gap-5 max-sm:gap-3"}>
				{
					!books.length
						? <span>There is nothing here</span>
						: books.map((b, n) => {
								if (b.date) {
									return <Book book={b} key={b.id} />
								} else {
									console.log(`property date is missing at purchase ${b.id}`);
								}
							}
						)
				}
			</div>
		</Container>
	);
};

export default BooksList;