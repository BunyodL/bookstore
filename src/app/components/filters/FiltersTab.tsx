"use client"

import arrow from '@/../public/arrow.svg'
import polygon from '@/../public/polygon.svg'
import { BooksType, SortConfigType, SortCriteria } from "@/@types";
import FilterButton from "@/app/components/filters/FilterButton";
import Button from "@/app/components/util-components/Button";
import Container from "@/app/components/util-components/Container";
import { resetRules, setFilterTags } from "@/lib/state/booksReducer";
import { useAppDispatch } from "@/lib/state/store";
import Image from "next/image";
import React, { useState } from 'react';

export type Props = {
	books: BooksType
	tags: string[]
	handleSort: (criteria: SortCriteria) => void
	sortConfig: SortConfigType
	filterTags: string[]
}

const FiltersTab = ({ tags, handleSort, sortConfig, filterTags }: Props) => {
	const dispatch = useAppDispatch();
	const sortCriteria: SortCriteria[] = ["price", "author", "date"];
	const selectedTag = (tag) => filterTags.includes(tag);
	const [filterTagsDropDown, setFilterTagsDropDown] = useState<"open" | "closed">("closed");

	return (
		<Container className={"rounded-[32px] flex justify-between"}>
			<div className={"inline-flex gap-10"}>
				{
					sortCriteria.map(criteria => (
						<div key={criteria}>
							<FilterButton
								onClick={() => {
									handleSort(criteria)
								}}
								className={`gap-[10px] hover:text-white`}
							>
								<span>{criteria}</span>
								<Image src={arrow} alt="" className={`${sortConfig.order === 'desc' && "rotate-180"}`} />
							</FilterButton>
						</div>

					))
				}
			</div>

			<div className={"flex flex-col gap-2 relative"}>
				<div className={"flex gap-[18px] justify-evenly"}>
					<FilterButton
						className={"gap-2 font-black capitalize"}
						onClick={() => setFilterTagsDropDown(v => v === "open" ? "closed" : "open")}
					>
						tags
						<Image src={polygon} alt="" className={`${filterTagsDropDown === "open" && "rotate-180"}`} />
					</FilterButton>

					<FilterButton onClick={() => dispatch(resetRules())}>reset rules</FilterButton>
				</div>

				<div className={`grid grid-cols-2 bg-secondary p-2 rounded-2xl gap-1 absolute min-w-52 top-5 left-[-50px] ${filterTagsDropDown === "closed" && "hidden"}`}>
					{
						tags.map((t) => (
							<Button
								key={t}
								className={`btn-sm bg-accent text-[12px] text-black h-fit ${selectedTag(t) && "bg-yellow-500"}`}
								onClick={() => {
									dispatch(setFilterTags(t))
								}}
							>
								{t}
							</Button>
						))
					}
				</div>
			</div>
		</Container>
	)
		;
};

export default FiltersTab;

