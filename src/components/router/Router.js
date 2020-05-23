import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import PublicHeader from "../header/Header";
import publicRoutes, { privateRoutes } from "./PublicRoutes";
import { connect, useStore } from "react-redux";
import { validateCookie, addUserFromCookie } from "../service/CookieService";
import { addUserToken } from "../actions/userActions";

const PublicRoutes = () => (
  <div>
    <Switch>
      <Redirect from="/" to="/home" exact />
      {publicRoutes.map((i) => (
        <Route path={i.path} component={i.comp} key={i.key} exact={true} />
      ))}
    </Switch>
  </div>
);

const PrivateRoutes = () => (
  <div>
    <Switch>
      <Redirect from="/" to="/home" exact />
      {privateRoutes.map((i) => (
        <Route path={i.path} component={i.comp} key={i.key} exact={true} />
      ))}
    </Switch>
  </div>
);

const Routes = ({ validated, dispatch }) => {
  const [authenticated, setAuth] = useState(false);

  useEffect(() => {
    const validated = validateCookie();
    if (validated) {
      setAuth(true);
      dispatch(addUserToken(addUserFromCookie()));
    }
  }, []);
  return (
    <BrowserRouter>
      <PublicHeader authenticated={authenticated} />
      {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  validated: state.userReducer.userToken.length > 0,
});

export default connect(mapStateToProps)(Routes);
