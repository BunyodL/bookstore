import { BookType} from "@/@types";
import Button from "@/app/components/util-components/Button";
import Container from "@/app/components/util-components/Container";
import { HorizontalLine } from "@/app/components/util-components/HorizontalLine";
import React from 'react';

type Props = {
	book: BookType;
}

const Book = ({ book }: Props) => {
	return (
		<Container
			className={"bg-secondary px-3 py-4 rounded-[20px] bg-opacity-50 hover:bg-opacity-100 flex flex-col gap-4"}>
			<div className={"p-[10px]"}>
				<div className={"capitalize text-[16px] font-black"}>{book.title}</div>
				<div className={"text-[12px]"}>
					<div>by {book.author}
						{book.illustrator && <span>, illustrations by {book.illustrator}</span>}
					</div>
					<div>{book.date}</div>
					<div>{book.price}$</div>
				</div>
			</div>

			<HorizontalLine />

			<div className={" flex gap-6"}>
				{
					book.tags.map(t => (
						<Button className={"btn-accent"} key={t}>
							{t}
						</Button>
					))
				}</div>
		</Container>
	);
};

export default Book;