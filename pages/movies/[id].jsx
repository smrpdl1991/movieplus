import apiConfig from '../../config/apiConfig';
import axios from 'axios';
import MovieList from '@/components/section/movieListSection';

const MoviePage = ({ movie , suggestedMovie}) => {
  if(!movie) return null;
  if(!suggestedMovie) return null;
  const suggestedMovies = suggestedMovie.movies ;
  return (
    <div className='single'>
      <div className="row">
        <div className="col-lg-12">
          <div className="feature-banner header-text">
            <div className='row'>
              <div className='col-12'><h1>{movie?.title_long}</h1></div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src={movie?.large_cover_image} alt={movie?.title_long} />
              </div>
              <div className="col-lg-8">
                <div className="thumb">
                    {movie?.large_screenshot_image1 && <img src={movie?.large_screenshot_image1} alt={movie?.title} /> }
                    {movie?.large_screenshot_image2 && <img src={movie?.large_screenshot_image2} alt={movie?.title} /> }
                    {movie?.large_screenshot_image3 && <img src={movie?.large_screenshot_image3} alt={movie?.title} /> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="game-details">
        <div className="row">
          <div className="col-lg-12">
            <h2>Details</h2>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-info">
                    <div className="left">
                      <h4>{movie?.title}</h4>
                      <span>{movie?.genres.map(genre => genre).join(', ')}</span>
                      <div className='language'>Uploaded: <span>{movie?.date_uploaded}</span></div>
                    </div>
                    <ul>
                      <li>Downloads: <span>{movie?.download_count}</span></li>
                      <li>Lang: <span>{movie?.language}</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-info">
                    <ul>
                      <li>Likes: <span>{movie?.like_count}</span></li>
                      <li>Imdb: <span>{movie?.rating}</span></li>
                      <li>RunTime : <span>{movie?.runtime}</span></li>
                      <li>Year: <span>{movie?.year}</span></li>
                    </ul>
                  </div>
                  
                </div>
              
                <div className="col-lg-12">
                <div className='trailer'>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie?.yt_trailer_code}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                {movie?.cast && <div className="cast">
                      Cast: <span>{movie?.cast?.map((item) => item?.name).join(', ')}</span>  
                  </div>}
                
                  <p>{movie?.description_intro}</p>
                </div>
                {/* <div className="col-lg-12">
                  <div className="main-border-button">
                    <a href="#">Download Fortnite Now!</a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MovieList title="Related Movies" movies={suggestedMovies} readMore={false}/>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;
    const response = await axios.get(`${apiConfig.baseUrl}/movie_details.json`, {
      params: {
        movie_id: id,
        with_images: true,
        with_cast: true,
      },
    });
    const suggestionresponse = await axios.get(`${apiConfig.baseUrl}/movie_suggestions.json`, {
      params: {
        movie_id: id,
      },
    });

    const movie = response.data.data.movie || null;
    const suggestedMovie = suggestionresponse.data.data || null;


    return {
      props: {
        movie,
        suggestedMovie
      },
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return {
      props: {
        movie: null,
        suggestedMovie: null
      },
    };
  }
}

export default MoviePage;
