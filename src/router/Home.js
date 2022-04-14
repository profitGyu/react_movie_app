import Loading from "../components/Loading";
import styles from "./Home.module.css";
import navList from "../atom/NavList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/Seo";
import Slide from "../components/Slide";
import MediaQery from "react-responsive";



function Home() {
  return (
    <div className={styles.container}>
      <Seo title={"DKFLEX"}/>
      {navList.map((content, index) => {
        return (
          <div key={index} className={styles.content__box}>
            <h3 className={styles.title}>
              <Link to={`/category/${content.path}/1`}>
                <i>
                  <FontAwesomeIcon icon={faLink} />
                </i>
                <span>{content.title}</span>
              </Link>
            </h3>
            <Slide cateApi={content.path}/>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
