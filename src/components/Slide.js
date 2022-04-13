import { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./Slide.module.css";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

function Slide({ cateApi }) {
  const [loading, setLoding] = useState(true);
  const [movies, setMovie] = useState([]);
  const [trans, setTrans] = useState(0);

  const onClickL = () => {
    if(trans >= 0){
      return;
    }
    setTrans(current => current + 400);
  }

  const onClickR = () => {
    if(trans <= -2450){
      return;
    }
    setTrans(current => current - 400);
  }

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${cateApi}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`
      )
    ).json();

    setMovie(json.results);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.slide__show} style={{
          width:"1400px",
          left: "calc(40% - 525px)",
        }}>
          <div className={styles.slide} style={{
              transform: `translateX(${trans}px)`
          }}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                img={movie.poster_path}
                release_date={movie.release_date}
                overview={""}
                genre_id={movie.genre_ids}
                movie_style={{
                  minWidth: "350px",
                  height: "300px",
                }}
              />
            ))}
          </div>
        </div>
        
      )}
      {loading ? null :(
        <div>
          <button className={styles.left} onClick={onClickL}><li><FontAwesomeIcon icon={faSquareCaretLeft} /></li></button>
          <button className={styles.right} onClick={onClickR}><li><FontAwesomeIcon icon={faSquareCaretRight}/></li></button>
          </div>
      )}
    </div>
  );
}

export default Slide;
