import Loading from "../components/Loading";
import styles from "./Home.module.css"
import navList from "../atom/NavList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Home(){
    return(
            <div className={styles.container}>
            {navList.map((content, index) =>{
                return(
                    <div key={index} className={styles.content__box}> 
                        <h3 className={styles.title}>
                            <Link to={`/category/${content.path}/1`}>
                                <i><FontAwesomeIcon icon={faLink}/></i>
                                <span>{content.title}</span>
                            </Link>
                        </h3>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;