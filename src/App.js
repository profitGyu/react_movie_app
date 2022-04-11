import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Detail from "./router/Detail";
import Home from "./router/Home"
import Nav from "./components/Nav"


function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Switch>
          <Route path={"/detail"} component={Detail}/>
          <Route path={"/react_movie_app"} component={Home}/>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;