import { Link } from "react-router-dom";
export default function MoviePaint({
  id,
  title,
  rating,
  medium_cover_image,
  summary,
}) {
  return (
    <li>
      <h2>
        <Link to={`/hello/${id}`}>{title}</Link>
      </h2>
      <h3>평점: {rating} 점</h3>
      <img src={medium_cover_image} />
      <div>
        <p>{summary}</p>
      </div>
    </li>
  );
}
