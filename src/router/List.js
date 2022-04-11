import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./List.module.css";

function List() {
  const { path, num } = useParams();
  
  const [loading, setLoding] = useState(true);
  const [movies, setMovie] = useState([]);


  const getMovies = async () => {
      const json = await(
          await fetch(
              `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1`
          )
      ).json();
      setMovie(json.results);
  }

  useEffect(() =>{
    setLoding(false);
    getMovies();
  }, [])

  return (
    <div className={styles.container}>
        {loading ? (<Loading/>) : (
            <div className={styles.container}>
                {movies.map((movies) =>{
                    return(
                        <li>{movies.title}</li>
                    );
                })}
            </div>
        )}
      
    </div>
  );
}

export default List;
