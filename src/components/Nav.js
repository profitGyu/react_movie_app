import navList from "../atom/NavList";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { listPageReLoading } from "../atom/Atoms";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styles from "./Nav.module.css";
import { useState } from "react";

library.add(fab);

function Nav() {
  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [changing, setchanging] = useState(true);


  return (
    <div>
      <nav
        className={styles.nav_container}
        style={
          changing
            ? {
                backgroundColor: "#845EC2",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }
            : { backgroundColor: "transparent" }
        }
      >
        <div className={styles.title}>
          <Link to="/react_movie_app">
            <strong>DKFLEX</strong>
          </Link>
        </div>
        <ul>
          {navList.map(({ title, path }) => {
            return (
              <li>
                <Link to={"react_moive_app"}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
