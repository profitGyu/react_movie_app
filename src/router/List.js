import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";


const listNums = [...Array(10)].map((_,i) => i + 1);


function List() {
  const { path, num } = useParams();
  
  const [loading, setLoding] = useState(true);
  const [movies, setMovie] = useState([]);
  

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=${num}`
      )
    ).json();
    
    setMovie(json.results);
  };

  useEffect(() => {
    setLoding(false);
    getMovies();
  }, [path, num]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                img={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
                genre_id={movie.genre_ids}
                />
          ))}
        </div>
      )}
      <ul className={styles.footer}>
          {loading ? null: listNums.map(
              (listNum, index) => {
                  return (
                      <li key={index}>
                          <Link to={`/category/${path}/${listNum}`}>
                          {listNum}
                          </Link>
                          
                      </li>
                  )
              }
          )}
      </ul>
    </div>
  );
}

export default List;
