import { Route, Switch } from "react-router-dom";
import Products from "./Content/Products";

export default function ContentWrap() {
  return (
    <Switch>
      <Route path='/products'>
        <Products />
      </Route>
    </Switch>
  );
}
