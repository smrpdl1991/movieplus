import Link from "next/link"
import MovieItem from "../element/movieItem"
import { useEffect, useState } from "react";

const MovieList = ({ title, movies, readMore }) => {
  const [movieData, setMovieData] = useState([]);
  if (!movies) {
    return null; 
  }

  useEffect(() => {
    setMovieData(movies);
  }, [movies]);
  return (
    <div className="most-popular">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>{title}</h4>
          </div>
          <div className="row">
            {movieData.map((item) => {
              return (
                <div className="col-lg-3 col-sm-6" key={item?.id}>
                  <MovieItem item={item} />
                </div>
              )
            })}
            {readMore && <div className="col-lg-12">
              <div className="main-button">
                <Link href="/movies">Discover More</Link>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList