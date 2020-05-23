import React from "react";

const userInfoObject = {
  userName: "",
  userToken: "",
  loginTime: "",
};

const userReducer = (state = userInfoObject, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        loginTime: action.logindate,
        userToken: action.user_token,
      };
    default:
      return state;
  }
};

export default userReducer;
