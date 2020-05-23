import React from "react";
import { validateSession } from "./SSO_Service";

export const addUserFromCookie = () => {
  let cookies = document.cookie;
  let cookieArray = cookies.split(";");
  let userToken = undefined;
  var validated = false;
  for (let k = 0; k < cookieArray.length; k++) {
    if (cookieArray[k].split("=")[0] === "userInfo") {
      userToken = cookieArray[k].split("=")[1];
    }
  }
  return userToken;
};

export const validateCookie = () => {
  let cookies = document.cookie;
  let cookieArray = cookies.split(";");
  let userToken = undefined;
  var validated = false;
  for (let k = 0; k < cookieArray.length; k++) {
    if (cookieArray[k].split("=")[0] === "userInfo") {
      userToken = cookieArray[k].split("=")[1];
    }
  }
  if (userToken) {
    validated = validateSession(
      userToken.split("-")[1],
      userToken.split("-")[0]
    )
      .then((res) => {
        if (res.data) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  }
  return validated;
};
