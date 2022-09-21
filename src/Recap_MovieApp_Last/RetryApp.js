import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RetryHome from "./routes/RetryHome";
import RetryDetail from "./routes/RetryDetail";
export default function RetryApp() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <RetryDetail />
        </Route>
        <Route path="/">
          <RetryHome />
        </Route>
      </Switch>
    </Router>
  );
}
