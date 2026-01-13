import MoviesGrid from '@/components/MoviesGrid';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import { getMovies } from "@/lib/actions";

interface MoviesPageProps {
  searchParams: {
    page?: string
  }
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const resolvedParams = await searchParams;
  
  const page = Number(resolvedParams.page) || 1;
  const data = await getMovies(page);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-12 lg:px-25">
        <SearchBar />
        <MoviesGrid movies={data.results} />
        <Pagination currentPage={data.page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
