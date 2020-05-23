import React from "react";

export const addUserToken = (token_id, setTime = true) => {
  let now = new Date();
  let time = now.getTime();
  let expireTime = time + 100000;
  now.setTime(expireTime);
  console.log(token_id);
  document.cookie = "userInfo=" + token_id + ";expires=" + now.toUTCString();
  console.log(document.cookie);

  return { type: "ADD", user_token: token_id, logindate: new Date() };
};
