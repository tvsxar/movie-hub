import MoviesGrid from '@/components/MoviesGrid';
import SearchBar from '@/components/SearchBar';

export default function MoviesPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-12 lg:px-25">
        <SearchBar />
        <MoviesGrid />
      </div>
    </div>
  );
}
