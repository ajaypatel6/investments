import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import AssetUpdater from "./components/AssetUpdater";

// pages
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Portfolio />
            <AssetUpdater></AssetUpdater>
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
