import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Hello from "./routes/Hello";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello/:id">
          <Hello />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
