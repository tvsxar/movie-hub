const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

interface MoviesData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function getMovies(
  page = 1,
  searchQuery = "",
): Promise<MoviesData> {
  const endpoint = searchQuery
    ? `${BASE_URL}/search/movie`
    : `${BASE_URL}/movie/popular`;

  const url = searchQuery
    ? `${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}&query=${encodeURIComponent(searchQuery)}`
    : `${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`TMDB error: ${res.status}`);
  }

  const data: MoviesData = await res.json();

  return data;
}

export async function getMoviesByIds(ids: number[]) {
  try {
    const responses = await Promise.all(
      ids.map((id) =>
        fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`),
      ),
    );

    const movies = await Promise.all(
      responses.map((res) => {
        if (!res.ok) throw new Error("TMDB error");
        return res.json();
      }),
    );

    return movies;
  } catch (error) {
    console.error("Error fetching favourite movies", error);
    return [];
  }
}
