import { useEffect, useState } from "react";
import Movie from "../components/Movie";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading((current) => !current);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <ul>
          {movies.map((item, index) => {
            return (
              <Movie
                id={item.id}
                title={item.title}
                medium_cover_image={item.medium_cover_image}
                summary={item.summary}
                rating={item.rating}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
