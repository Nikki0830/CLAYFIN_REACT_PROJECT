import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

export default function Login(setLoadLogin, setAuth, shouldLoginLoad) {
  let history = useHistory();
  return (
    <>
      <div className="login">
        {/* login form */}
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            onClick={() => {
              history.push("/Home");
            }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        {/* login form */}
        {/* <div>
        <h1>Login</h1>
      </div> */}
        {(isLoggedin) => {
          {
            <>
              {isLoggedin ? (
                <>
                  <Link to="/home">
                    <Home />
                  </Link>
                </>
              ) : (
                "lkkk"
              )}
            </>;
          }
        }}
      </div>
    </>
  );
}
