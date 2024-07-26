'use client';

import BooksList from '@/app/components/books/BooksList';
import FiltersTab from '@/app/components/filters/FiltersTab';
import Title from '@/app/components/title/Title';
import { useGetData } from '@/hooks/useGetData';
import { useSortBooks } from '@/hooks/useSortBooks';
import { useSortHandlers } from '@/hooks/useSortHandlers';
import { useTags } from '@/hooks/useTags';

export default function Home() {
  const { books, filterTags, sortConfig } = useGetData();

  const allTags = useTags(books);

  const sortedBooks = useSortBooks(books, sortConfig, filterTags);

  const { handleSort } = useSortHandlers(sortConfig);

  return (
    <div className="bg-background w-screen h-screen flex justify-center ">
      <div className="md:w-[500px] min-w-80 text-accent flex flex-col gap-5 max-sm:gap-2 py-10 absolute max-sm:px-3">
        <Title>Book Store</Title>

        <FiltersTab
          books={sortedBooks}
          tags={allTags}
          handleSort={handleSort}
          sortConfig={sortConfig}
          filterTags={filterTags}
        />

        <BooksList books={sortedBooks} />
      </div>
    </div>
  );
}
