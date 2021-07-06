import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Item from "./pages/Item";
import About from "./pages/About";
import Error from "./pages/Error";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Using React-Router</h1>

        <Navbar />
        <Switch>
          <Route path="/" exact>
            {" "}
            <Home />{" "}
          </Route>

          <Route path="/products" exact>
            {" "}
            <Products />{" "}
          </Route>
          <Route path="/products/item/:id" children={<Item />}></Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="*">
            {" "}
            <Error />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
