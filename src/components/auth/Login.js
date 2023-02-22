import React,{useState} from "react";
import "./auth_all.scss";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../Card/Card";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";
//import { useSelector } from "react-redux";
//import { selectPreviousURL } from "../../redux/slice/cartSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();
  // const redirectUser = () => {
  //   if (previousURL.includes("cart")) {
  //     return navigate("/cart");
  //   }
  //   navigate("/");
  // };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
       // redirectUser();
        navigate('/') 
        
      
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Gooogle
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
         //const user = result.user;
        toast.success("Login Successfully");
        //redirectUser();
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <>
    
    {isLoading && <Loader />}
    <section className="container auth back">
      <ToastContainer/>
      <div className="img">
        <img src="images/login.png" alt="Login" width="400" />
      </div>

      <Card>
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={loginUser}>
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
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
            <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div>
            <p style={{opacity:'0.6'}}>-- or --</p>
          </form>
          <button
            className="--btn --btn-danger --btn-block"
            onClick={signInWithGoogle}
          >
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <span className="register">
            <p style={{opacity:'0.6'}}>Don't have an account?</p>
            <Link to="/register" replace>Register</Link>
          </span>
        </div>
      </Card>
    </section>
    </>
  );
};

export default Login;
