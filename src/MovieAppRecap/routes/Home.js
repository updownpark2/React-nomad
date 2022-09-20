import { useEffect, useState } from "react";
import MoviePaint from "../components/MoviePaint";
export default function Home() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCoin = async () => {
    const coindata = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await coindata.json();
    setCoin(json.data.movies);
    setLoading((current) => !current);
  };

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div>
      {loading ? (
        <p>로딩중...</p>
      ) : (
        <ul>
          {coin.map((item) => {
            return (
              <MoviePaint
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
      )}
    </div>
  );
}
