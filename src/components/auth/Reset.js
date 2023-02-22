import React from "react";
import "./auth_all.scss";
import "./index.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import Loader from "../loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className="container auth">
        <div className="img">
          <img src="images/forgot.png" alt="reset" width="400" />
        </div>

        <Card>
          <div className="form">
            <h2 style={{ fontSize: "39px" }}>Reset Password</h2>
            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <div className="links">
                <p style={{ opacity: "0.6" }}>
                  <Link to="/login">- Login</Link>
                </p>
                <p style={{ opacity: "0.6" }}>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Reset;
