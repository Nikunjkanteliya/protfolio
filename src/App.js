import "./App.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="maindiv">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Navbar />
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
