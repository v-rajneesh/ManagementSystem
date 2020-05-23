import React from "react";
import ReactDOM from "react-dom";
import Routes from "./components/router/Router";
import "./components/general.css";
import { Provider, useStore } from "react-redux";
import appStore from "./components/store/store";

const store = appStore();

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
