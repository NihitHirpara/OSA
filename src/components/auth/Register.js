import React,{useState} from "react";
import "./auth_all.scss";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import Loader from "../loader/Loader";
import { toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
    
    {isLoading && <Loader/>}
    <section className="container auth">
      <ToastContainer/>
      <Card>
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Email"
              required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
               value={cPassword}
               onChange={(e) => setCPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className="register">
            <p style={{opacity:'0.6'}}>Already an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className="img">
        <img src="images/register.png" alt="register" width="400" />
      </div>
    </section>
    </>
  );
};

export default Register;
