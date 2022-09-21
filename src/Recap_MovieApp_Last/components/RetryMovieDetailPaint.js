export default function RetryMovieDetailPaint({
  id,
  title,
  year,
  background_image,
  genres,
}) {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <h3>개봉년도 {year}년</h3>
      <img src={background_image} />
      <div>
        <span>장르</span>
        <ul>
          {genres.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
