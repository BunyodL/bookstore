'use client';

import arrow from '@/../public/arrow.svg';
import polygon from '@/../public/polygon.svg';
import { BooksType, SortConfigType, SortCriteria } from '@/@types';
import FilterButton from '@/app/components/filters/FilterButton';
import Button from '@/app/components/util-components/Button';
import Container from '@/app/components/util-components/Container';
import { resetRules, setFilterTags } from '@/lib/state/booksReducer';
import { useAppDispatch } from '@/lib/state/store';
import Image from 'next/image';
import React, { useState } from 'react';

export type Props = {
  books: BooksType;
  tags: string[];
  handleSort: (criteria: SortCriteria) => void;
  sortConfig: SortConfigType;
  filterTags: string[];
};

const FiltersTab = ({ tags, handleSort, sortConfig, filterTags }: Props) => {
  const dispatch = useAppDispatch();
  const sortCriteria: SortCriteria[] = ['price', 'author', 'date'];
  const selectedTag = (tag: string) => filterTags.includes(tag);
  const [filterTagsDropDown, setFilterTagsDropDown] = useState<
    'open' | 'closed'
  >('closed');

  return (
    <Container className={'rounded-[32px] flex justify-between'}>
      <div className={'flex gap-10 max-sm:gap-3'}>
        {sortCriteria.map((criteria) => (
          <div key={criteria}>
            <FilterButton
              onClick={() => {
                handleSort(criteria);
              }}
              className={`gap-[10px] max-sm:gap-1 hover:text-white`}
            >
              <span>{criteria}</span>
              <Image
                src={arrow}
                alt=""
                className={`${sortConfig.order === 'desc' && 'rotate-180'}`}
              />
            </FilterButton>
          </div>
        ))}
      </div>

      <div className={'flex flex-col gap-2 relative'}>
        <div className={'flex gap-[18px] max-sm:gap-2 justify-evenly'}>
          <FilterButton
            className={'gap-2 max-sm:gap-1 font-black capitalize'}
            onClick={() =>
              setFilterTagsDropDown((v) => (v === 'open' ? 'closed' : 'open'))
            }
          >
            tags
            <Image
              src={polygon}
              alt=""
              className={`${filterTagsDropDown === 'open' && 'rotate-180'}`}
            />
          </FilterButton>

          <FilterButton onClick={() => dispatch(resetRules())}>
            reset rules
          </FilterButton>
        </div>

        <div
          className={`grid grid-cols-2 max-sm:grid-cols-1 bg-secondary p-2 max-sm:p-0.5 rounded-2xl gap-1 absolute min-w-52 max-sm:min-w-6 top-6 left-[-50px] max-sm:left-[-5px] ${
            filterTagsDropDown === 'closed' && 'hidden'
          }`}
        >
          {tags.map((t) => (
            <Button
              key={t}
              className={`btn-sm bg-accent max-sm:btn-xs max-sm:py-1 text-[12px] text-black h-fit ${
                selectedTag(t) && 'bg-yellow-500'
              }`}
              onClick={() => {
                dispatch(setFilterTags(t));
              }}
            >
              {t}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FiltersTab;
