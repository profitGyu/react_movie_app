import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./List.module.css";
import { Link } from "react-router-dom";


const listNums = [...Array(10)].map((_,i) => i + 1);


function List() {
  const { path, num } = useParams();
  console.log("path,num:", path, num);
  const [loading, setLoding] = useState(true);
  const [movies, setMovie] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=${num}`
      )
    ).json();
    console.log(json.results);
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
          {movies.map((movies) => {
            return <li>{movies.title}</li>;
          })}
        </div>
      )}
      <ul className={styles.footer}>
          {loading ? null: listNums.map(
              listNum => {
                  return (
                      <li>
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
