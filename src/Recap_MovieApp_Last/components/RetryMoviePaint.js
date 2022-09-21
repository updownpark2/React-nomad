import { Link } from "react-router-dom";
export default function RetryMoviePaint({
  id,
  rating,
  title,
  medium_cover_image,
  summary,
}) {
  return (
    <li>
      <p>평점: {rating}점</p>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} />
      <p>{summary}</p>
    </li>
  );
}
