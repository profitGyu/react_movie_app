import navList from "../atom/NavList";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { focusNav, listPageReLoading } from "../atom/Atoms";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styles from "./Nav.module.css";
import { useState } from "react";

library.add(fab);

function Nav() {
  
  let last_knoew_scroll_position = 0;
  let ticking = false;

  const [changing, setChanging] = useState(false);
  const [scrolling, setSCrolling] = useState(false);

  // atom 에 global state인 listPageReLoading 값과 focusNav을 가져옴
  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [focusPath, setFocusPath] = useRecoilState(focusNav);

  
  const doing = (scroll_pos) => {
    if (scroll_pos >= 10){
      setChanging(true);
      setSCrolling(true);
    }else{
      setChanging(false);
      setSCrolling(false);
    }
  }

  window.addEventListener('scroll', function(e){
    last_knoew_scroll_position = window.scrollY
    doing(last_knoew_scroll_position)
  })

  // 네비게이션 over out 시 changing 상태
  const onMouseOverOut = () => {
    if(scrolling)
      return;
    setChanging(current => !current)
  }


  return (
    <div>
      <nav
        onMouseOver={onMouseOverOut}
        onMouseOut={onMouseOverOut}
        className={styles.nav_container}
        style={
          changing
            ? {
                backgroundColor: "#6654F1",
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
        <ul className={styles.option__list}>
          {navList.map(({ title, path }) => {
            return (
              <li key={title}>
                <Link to="/react_movie_app">{title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.option__list}>
          <li>
            <a href="https://twitter.com/?lang=ko" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
