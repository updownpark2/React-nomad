import { useEffect, useState } from "react";
import RetryMoviePaint from "../components/RetryMoviePaint";
export default function RetryHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const movieinfo = async () => {
    const moviedata = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const moviejson = await moviedata.json();
    setLoading((current) => !current);
    setMovies(moviejson.data.movies);
  };
  useEffect(() => {
    movieinfo();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>로딩중🚴🏻‍♂️</strong>
      ) : (
        <div>
          <h1>Movie Rank Website</h1>
          <div>
            <ul>
              {movies.map((item) => {
                return (
                  <RetryMoviePaint
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    rating={item.rating}
                    medium_cover_image={item.medium_cover_image}
                    summary={item.summary}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
