import React, { useState, useContext } from "react";
import Classes from "./Auth.module.css";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [Loading, setLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading({ ...Loading, signIn: true });
    try {
      const userInfo = await signInWithEmailAndPassword(auth, Email, Password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({ ...Loading, signIn: false });
      navigate(navStateData?.state?.redirect || "/");
    } catch (err) {
      setError(err.message);
      setLoading({ ...Loading, signIn: false });
    }
  };

  const handleSignUp = async () => {
    setLoading({ ...Loading, signUp: true });
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, Email, Password);
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
      setLoading({ ...Loading, signUp: false });
      navigate(navStateData?.state?.redirect || "/");
    } catch (err) {
      setError(err.message);
      setLoading({ ...Loading, signUp: false });
    }
  };

  return (
    <section className={Classes.login}>
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/120px-Amazon_2024.svg.png"
            alt="Amazon logo"
          />
        </Link>
      </div>
      {/* Form */}
      <div className={Classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
          style={{
            padding:"5px",
            textAlign:"center",
            color:"red",
            fontWeight:"bold"
          }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="Password">Password</label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="Password"
              required
            />
          </div>

          <button
            type="submit"
            className={Classes.signInBtn}
          >
            {Loading.signIn ? (
              <ClipLoader color="#34a8a4" size={20} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* Error Message */}
        {Error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{Error}</small>
        )}
        {/* Agreement */}
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        {/* Sign Up button */}
        <button
          type="button"
          onClick={handleSignUp}
          className={Classes.signUpBtn}
        >
          {Loading.signUp ? (
            <ClipLoader color="#34a8a4" size={20} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {Error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{Error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
