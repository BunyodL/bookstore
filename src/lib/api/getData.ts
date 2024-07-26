import { BooksType } from "@/@types";
import jsonData from "@/lib/state/data.json";

export const getData = async () => {
	const promise = new Promise((res) => {
		setTimeout(() => res(jsonData), 10);
	});

	return await promise as BooksType;
};