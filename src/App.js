import { Route, Switch } from "react-router";
import NavBar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/items/:itemId">
          <ItemPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
