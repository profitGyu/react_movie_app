import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import GenreList from "../atom/GenreList";

function Movie({ id, title, img, release_date, overview, genre_id }) {
  return (
    <div className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} className={styles.movie__img}/>
      <div>
        <h1 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title.length > 45 ? `${title.slice(0, 50)}...` : title}</Link>
        </h1>
        <h2 className={styles.movie__year}>{release_date}</h2>
        <p  className={styles.movie__summary}>{overview.length > 120 ? `${overview.slice(0, 120)}..` : overview}</p>
        <ul className={styles.movie__genres}>
        {genre_id.map((num) => {
          {
            var genre2 = GenreList.find((item, index, arr) => {
              if (item.id === num) {
                return item;
              }
            });
          }
          return <li key={genre2.id}>{genre2.name}</li>;
        })}
        </ul>
      </div>
    </div>
  );
}

Movie.prototype ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genre_id: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
