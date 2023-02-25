import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogContent from "./BlogContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          {/* home page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* home page */}

          {/* create blog */}
          <Route path="/create">
            <CreateBlog />
          </Route>
          {/* create blog */}

          {/* blog item */}
          <Route path="/blogs/:id">
            <BlogContent />
          </Route>
          {/* blog item */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
