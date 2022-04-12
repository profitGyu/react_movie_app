import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoding] = useState(true);

  const getMovieInfo = async () => {
    const json = await (
      await fetch(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`)
    ).json();
    setMovie(json);
  };

  useEffect(() => {
    console.log(id)
    getMovieInfo();
    setLoding(false); 
    console.log(movie)
  }, [movie]);

  return (
    <div>
      <Loading />
      {/* {loading ? (<Loading />):
            (<div>
                {movie.map((prop) => {
                    return(
                        <div>
                            {prop.title}
                        </div>
                    );
                })}

            </div>)} */}
    </div>
  );
}

export default Detail;
