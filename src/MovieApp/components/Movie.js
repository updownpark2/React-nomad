import { Link } from "react-router-dom";
export default function Movie({
  title,
  medium_cover_image,
  summary,
  rating,
  id,
}) {
  return (
    <li key={id}>
      <h3>
        <Link to="/movie">{title}</Link>
      </h3>
      <div>
        <img src={medium_cover_image} />
      </div>
      <span>{summary}</span>
      <h4>평점 : {rating}</h4>
    </li>
  );
}
