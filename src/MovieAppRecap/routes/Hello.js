import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Hello() {
  const helloid = useParams(); //useParams=>객체를반환!
  console.log(helloid);
  const getdetail = async () => {
    const detailinfo = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${helloid.id}`
    );
    const jsoninfo = await detailinfo.json();
    console.log(jsoninfo);
  };
  useEffect(() => {
    getdetail();
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
