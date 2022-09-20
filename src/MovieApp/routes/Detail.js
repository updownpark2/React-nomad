import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  const detailid = useParams();
  console.log(detailid);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${detailid.id}`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>Detail!</h1>
    </div>
  );
}
