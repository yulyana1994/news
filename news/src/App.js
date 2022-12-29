import { Route, Switch, Redirect } from "react-router-dom";
import PostsPage from "./pages/postsPage";
import NewsPage from "./pages/newsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/posts" exact component={PostsPage} />
        <Route path="/posts/:postsId" component={NewsPage} />
        <Redirect to="/posts" />
      </Switch>
    </div>
  );
}
export default App;
