import { Route, Switch } from "react-router-dom";

export default function ContentBar() {
  return (
    <div>
      <Switch>
        <Route path='/'></Route>
        <Route path='*'>
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
    </div>
  );
}
