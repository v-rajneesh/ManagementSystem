import React, { useEffect, useState } from "react";
import "./login.css";
import { validateUser, validatePass } from "../service/SSO_Service";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addUserToken } from "../actions/userActions";
import { validateCookie, addUserFromCookie } from "../service/CookieService";

const Login = (props) => {
  const history = useHistory();

  useEffect(() => {
    const validated = validateCookie();
    if (validated) {
      props.dispatch(addUserToken(addUserFromCookie()));
      history.push("/Home");
    }
  }, []);

  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");
  const [uidE, setUidE] = useState(false);
  const [validatedU, setVU] = useState(false);
  const [passE, setPassE] = useState(false);
  const [userId, setUserID] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    if (pass.trim().length <= 0) {
      setPassE(true);
    } else {
      validatePass(userId, pass).then((res) => {
        if (res.data !== "-1") {
          props.dispatch(addUserToken(userId + "-" + res.data));
          history.push("/Home");
        } else {
          setPassE(true);
        }
      });
    }
  };

  const nextAction = (e) => {
    e.preventDefault();
    if (uid.trim().length <= 0) {
      setUidE(true);
    } else {
      validateUser(uid).then((res) => {
        if (res.data > 0) {
          setUserID(res.data);
          setVU(true);
          setUidE(false);
        } else {
          setUidE(true);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="login ">
        <form className="loginform">
          <h2 className="sr-only"></h2>
          <div className="illustration">
            <i className="icon ion-ios-locked-outline" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={uid}
              onChange={(e) => {
                setUid(e.target.value);
              }}
              placeholder="Email/empId"
              disabled={validatedU}
            />
          </div>
          {uidE && <a className="forgot">User Not Found</a>}
          <br />
          {validatedU && (
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
          )}
          {passE && <a className="forgot">Password Incorrect</a>}
          <div className="form-group">
            {validatedU ? (
              <button
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                Log In
              </button>
            ) : (
              <button
                className="btn btn-primary btn-block"
                onClick={nextAction}
              >
                Next
              </button>
            )}
          </div>
          <a href="#" className="forgot">
            Forgot your Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default connect()(Login);
