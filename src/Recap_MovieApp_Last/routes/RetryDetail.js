import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RetryMovieDetailPaint from "../components/RetryMovieDetailPaint";
export default function RetryDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const [detailloading, setDetailloading] = useState(true);
  const Detailid = useParams();
  const detailinfo = async () => {
    const detaildata = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${Detailid.id}`
    );
    const detailjson = await detaildata.json();
    setDetailMovie(detailjson.data.movie);
    setDetailloading((current) => !current);
  };
  useEffect(() => {
    detailinfo();
  }, []);
  return (
    <div>
      {detailloading ? (
        <h2>로딩중🚴🏻‍♂️</h2>
      ) : (
        <div>
          <div>
            <RetryMovieDetailPaint
              key={detailMovie.id}
              title={detailMovie.title}
              background_image={detailMovie.medium_cover_image}
              genres={detailMovie.genres}
              year={detailMovie.year}
            />
          </div>
        </div>
      )}
    </div>
  );
}
