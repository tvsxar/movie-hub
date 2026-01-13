const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string
    vote_average: number;
}

interface MoviesData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function getMovies(page = 1): Promise<MoviesData> {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = res.json();

    return data;
}
