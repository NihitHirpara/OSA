import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import {ToastContainer}  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shopping from "./components/Shopping";
import Creditcard from "./components/Creditcard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/config";
//import Main from "./components/Main";


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #ffffff",
      black1: " black",
      helper: "#FFFBF5",

      bg: "#030303",
      b: "#DE4839",
      bgc: "#171010",
      bgm: "#c3aaaa36",
      bgn: "#DE4838",
      bgf: "#fbf6ef",
      footer_bg: "#0d1b2a",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const [LoggedIn,setLoggedIn ] = useState(false)
  

  // const RequireAuth = ({children})=>{
  //     console.log('hello........',currentuser)      
  //     return currentuser ? (children) : <Navigate to='/login' replace/>;
  // }
  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setLoggedIn(true)
      }else
        setLoggedIn(false);
        
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        
      {LoggedIn ? <>
        <GlobalStyle />
        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            top: "0",
            width: "100%",
            height: "100px",
          }}
        >
          <ToastContainer/>
          
          <Header />
        </div>
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Home />}/>
             {/* <Route path="/about" element={<About />} />  */}
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/creditcard" element={<Creditcard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
        </>:
        <div style={{padding:'50px'}}>
        <Login />
        {/* <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" element={<Register />} />
        </Routes> */}
        </div>
      }
      </Router>
      
    </ThemeProvider>
  );
};

export default App;
