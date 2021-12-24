import { Route, Switch } from "react-router";
import NavBar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
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
