import React, { useRef, useState } from "react";
import classes from "./Signup.module.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { authActions } from "../pages/auth-reducer";

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
    if (!isLogin) {
      const enteredConfirmPassword = confirmPasswordInputRef.current.value;
      if (!isLogin && enteredPassword === enteredConfirmPassword) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0";
      } else {
        alert("Password does not match");
      }
    }
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSZZr78zGZyrw6I8PGUwpSUWOFci9rbm0";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        props.email(data.localId);
        dispatch(authActions.login(data.idToken));
        history.replace(isLogin ? "/Home" : "/Verify");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="ConfirmPassword"
              required
              ref={confirmPasswordInputRef}
            />
          </div>
        )}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Sign Up"}</button>
          {isLogin && <Link to="/ForgotPassword">Forgot Password?</Link>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? `Don't have account? Sign Up` : "Have an account? Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
