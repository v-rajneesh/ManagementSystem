import React, { useEffect, useState, useDebugValue } from "react";
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

const Routes = ({ vallidated, dispatch }) => {
  const [authenticated, setAuth] = useState(false);

  useEffect(() => {
    if (!vallidated) {
      const validated = validateCookie();
      if (validated) {
        setAuth(true);
        dispatch(addUserToken(addUserFromCookie()));
      }
    } else {
      console.log("here inside");
      setAuth(true);
    }
  }, [vallidated]);

  return (
    <BrowserRouter>
      <PublicHeader authenticated={authenticated} />
      {authenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  vallidated: state.userReducer.userToken.length > 0,
});

export default connect(mapStateToProps)(Routes);
