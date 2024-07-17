import { base_Url, API_KEY, imagePath } from "./components/Constants/constants";

export const popularMovies = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

export const topRated = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;

export const upComingMovies = `discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`;

export const NowPlaying = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US`;
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentries = `discover/movie?api_key=${API_KEY}&with_genres=99`;
