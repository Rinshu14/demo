import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Cart from "./component/Cart"
import Preview from "./component/Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
let App = () => {
  return (
    <div>

      

      <Router>
      <Navbar />
        <switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route exact  path="/">
            <Home />
          </Route>
        </switch>
      </Router>

    </div>
  );
}

export default App;
