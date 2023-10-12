import axios from 'axios';
// const time_window = new Date();
export async function fetchMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          api_key: '9e45e710ca748764d24b79903a104ef0',
          //   q: 'trending/get-trending',
          // image_type: 'photo',
          // orientation: ' horizontal',
          // safesearch: true,
          // page: `${page}`,
          // per_page: 12,
        },
      }
    );
    const data = response.data;
    //   return data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// fetchMovies();
