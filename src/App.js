import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Detail from "./router/Detail";
import List from "./router/List";
import Home from "./router/Home"
import Nav from "./components/Nav"

function App() {
  return (
    // RecoilRoot <- Recoil을 사용할 컴포넌트는 반드시 감사줘야한다.
    <RecoilRoot>
      <Router>
        <Nav />
        <Switch>
          <Route path={"/category/:path/:num"} component={List}/>
          <Route path={"/movie/:id"} component={Detail}/>
          <Route path={"/react_movie_app"} component={Home}/>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
