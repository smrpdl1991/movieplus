import { useRouter } from 'next/router';
import apiConfig from '../../config/apiConfig';
import axios from 'axios';
import Image from 'next/image';

const MoviePage = ({ movie , suggestedMovie}) => {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(movie);
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
                      <h4>Fortnite</h4>
                      <span>Sandbox</span>
                    </div>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-info">
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                      <li><i className="fa fa-server"></i> 36GB</li>
                      <li><i className="fa fa-gamepad"></i> Action</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img src="assets/images/details-01.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                  <img src="assets/images/details-02.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                  <img src="assets/images/details-03.jpg" alt="" />
                </div>
                <div className="col-lg-12">
                  <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <a href="https://paypal.me/templatemo" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                </div>
                <div className="col-lg-12">
                  <div className="main-border-button">
                    <a href="#">Download Fortnite Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="other-games">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section">
              <h4><em>Other Related</em> Movies</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-02.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-03.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-02.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-03.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
              <h4>Dota 2</h4><span>Sandbox</span>
              <ul>
                <li><i className="fa fa-star"></i> 4.8</li>
                <li><i className="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        limit: 4,
      },
    });

    const movie = response.data.data.movie;
    const suggestedMovie = suggestionresponse.data.data.movie;

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
      },
    };
  }
}

export default MoviePage;
