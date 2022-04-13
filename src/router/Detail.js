import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";
import Seo from "../components/Seo";

function Detail({ location }) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoding] = useState(true);
  const m_tilte = location.state.m_title;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`
    )
      .then((rep) => rep.json())
      .then((json) => {
        setMovie(json);
        setLoding(false);
      });
  }, [id]);

  return (
    <div>
      <Seo title={m_tilte} />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img
            className={styles.bg}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          ></img>

          <div className={styles.show}>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <h3>{}</h3>
            <p>{movie.overview}</p>
            <label>장르</label>
            <ul className={styles.show__ul}>
              {movie.genres.map((genre) =>{
                return(
                  <li key={genre.id}>
                    {genre.name}
                  </li>
                )
              })}
            </ul>
            <h2>production_companies</h2>
            <ul className={styles.show__ul}>
              {movie.production_companies.map((props) => {
                return (
                  <div key={props.id}>
                    
                    {props.logo_path ?(<img src={`https://image.tmdb.org/t/p/w500${props.logo_path}`}></img>) : props.name}
                    
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
