import BannerSection from "@/components/section/bannerSection";
import MovieList from "@/components/section/movieListSection";
import apiConfig from "../config/apiConfig";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({latestMovies, popularMovies}) => {
  if(!latestMovies) return null;
  if(!popularMovies) return null;
  return (
    <>
      <BannerSection />
      <MovieList title="Most Liked Movies" movies={popularMovies} readMore={true} />
      <MovieList title="Latest Movies" movies={latestMovies} readMore={true}/>
      <ToastContainer />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const latestResponse = await axios.get(`${apiConfig.baseUrl}/list_movies.json`, {
      params: {
        sort_by: 'date_added',
        limit: 8,
      },
    });

    const popularResponse = await axios.get(`${apiConfig.baseUrl}/list_movies.json`, {
      params: {
        sort_by: 'like_count',
        limit: 8,
      },
    });


    const latestMovies = latestResponse.data.data.movies;
    const popularMovies = popularResponse.data.data.movies;

    return {
      props: {
        latestMovies,
        popularMovies,
      },
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    toast.error('Failed to fetch movies. Please try again later.');
    return {
      props: {
        latestMovies: [],
        popularMovies: [],
      },
    };
  }
}

export default Home;
