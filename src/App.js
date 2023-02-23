import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import {ToastContainer}  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Component from "./components/routes/component";



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
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="*" exact element={<Component/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
      
    </ThemeProvider>
  );
};

export default App;
