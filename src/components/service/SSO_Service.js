import React from "react";
import Axios from "axios";

export const validateUser = (uid) => {
  return Axios.request({
    method: "get",
    url: "http://localhost:9090/sso/validateUser?userId=" + uid,
  });
};

export const validatePass = (uid, pass) => {
  return Axios.request({
    method: "post",
    url: "http://localhost:9090/sso/validatePass?userId=" + uid,
    data: {
      pass: pass,
    },
  });
};

export const validateSession = (token, user_id) => {
  return Axios.request({
    method: "post",
    url: "http://localhost:9090/sso/validateSession",
    data: {
      token: token,
      userid: user_id,
    },
  });
};
