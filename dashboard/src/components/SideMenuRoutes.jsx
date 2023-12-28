import { Route, Switch } from "react-router-dom";
import "./SideMenu.css";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import ControlPanel from "./ControlPanel";
import Contact from "./Contact";
import MenuCategory from "./Content/MenuCategory";
import ProductDetail from "./Content/ProductDetail";
import MenuCategoryDetail from "./Content/MenuCategoryDetail";


export default function SideMenuRoutes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/products' exact>
        <MenuCategory />
      </Route>
      <Route path='/products/category/:id' component={MenuCategoryDetail} />
      <Route path='/products/list' component={MenuCategoryDetail} />
      <Route path='/productdetail/:id'>
        <ProductDetail />
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
        <p className='not-found'>404 - Not Found</p>
      </Route>
    </Switch>
  );
}
