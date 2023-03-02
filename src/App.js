import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stocks" component={Stocks} />
        <Route path="/movies" component={Movies} />
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
