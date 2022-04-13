import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";
import Seo from "../components/Seo";

function Detail({location}) {
  
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoding] = useState(true);
  const m_tilte = location.state.m_title;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`)
    .then(rep => rep.json())
    .then(json =>{
      setMovie(json);
      setLoding(false);
    })  
  }, [id]);

  return (
    <div>
      <Seo title={m_tilte}/>
      {loading ? (<Loading/>) : (
        <div>
          
          {movie.id}
          </div>
      )}
    </div>
  )
}

export default Detail;
