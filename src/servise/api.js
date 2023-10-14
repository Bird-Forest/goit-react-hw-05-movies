import axios from 'axios';

const keyUrl = '9e45e710ca748764d24b79903a104ef0';
export async function fetchMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFindMovie(word) {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          query: `${word}`,
          include_adult: false,
          language: 'en-US',
          page: 1,
          api_key: keyUrl,
        },
      }
    );
    const data = response.data;
    return data;
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieDetails(movieId) {
  console.log(movieId);
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: keyUrl,

          language: 'en-US',
        },
      }
    );
    const data = response.data;
    return data;
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// export async function fetchMovieDetails(movieId) {
//   console.log(movieId);
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${movieId}`,
//       {
//         params: {
//           language: 'en-US',
//           api_key: keyUrl,
//         },
//       }
//     );
//     const data = response.data;
//     return data;
//     // console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// https://api.themoviedb.org/3/movie/157336?api_key=9e45e710ca748764d24b79903a104ef0&append_to_response=videos,images
