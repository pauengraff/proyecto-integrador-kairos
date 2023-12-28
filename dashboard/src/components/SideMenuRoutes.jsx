import { Route, Switch } from "react-router-dom";
import Products from "./Content/Products";
import Login from "./Login";
import Cart from "./Cart";
import ControlPanel from "./ControlPanel";
import Contact from "./Contact";
import MenuCategories from "./Content/MenuCategory";
import Home from "./Home";

export default function ContentWrap() {
  return (
    <Switch>
       <Route path='/home'>
        <Home />
      </Route>
      <Route path='/products'>
        <MenuCategories />
        <Products />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/Cart'>
        <Cart />
      </Route>
      <Route path='/panel'>
        <ControlPanel />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='*'>
        <p>404 - página no encontrada</p>
      </Route>
    </Switch>
  );
}
