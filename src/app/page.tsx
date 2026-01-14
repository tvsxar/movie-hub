import MoviesGrid from '@/components/MoviesGrid';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import { getMovies } from "@/lib/actions";

interface MoviesPageProps {
  searchParams: {
    page?: string,
    search?: string
  }
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const resolvedParams = await searchParams;

  const page = Number(resolvedParams.page) || 1;
  const searchQuery = resolvedParams.search || "";
  const data = await getMovies(page, searchQuery);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-12 lg:px-25">
        <SearchBar initialValue={searchQuery} />
        {data.results.length === 0
          ? <EmptyState />
          : <>
            <MoviesGrid movies={data.results} />
            <Pagination currentPage={data.page} totalPages={data.total_pages} />
          </>}
      </div>
    </div>
  );
}
