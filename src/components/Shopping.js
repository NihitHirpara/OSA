import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShoppingWrapper = styled.div`
  div {
    width: 100%;
    place-items: center;
    height: 80vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 400px;
  }
`;


function Shopping() {
  const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState("");
  const [email, setemail] = useState("");
  const [phnumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");

  const fetchValidation = async () => {
    const reqBody = {
      username: user,
      email: email,
      phonenumber: phnumber,
      Address: address,
    };
    const data = await fetch(`https://formspree.io/f/xeqwgqoz`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const isValid = await data.json();
    setIsValid(isValid);
    console.log(isValid);
    toast.success("Your Details save successfully");
  };
  

  function validate(e) {
    e.preventDefault();
    fetchValidation();
  }

  function setUsername() {
    setUser(document.getElementById("username").value);
  }

  function setEmail() {
    setemail(document.getElementById("email").value);
  }

  function setPhnumber() {
    setPhNumber(document.getElementById("phonenumber").value);
  }
  function setaddress() {
    setAddress(document.getElementById("Address").value);
  }

  if (isValid) {
    return <Navigate to="/creditcard" />;
  } else {
    return (
      <ShoppingWrapper>
        <div>
          <form onSubmit={validate}>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              required
              name="username"
              onChange={setUsername}
            />
            <input
              type="email"
              id="email"
              name="emailID"
              placeholder="Enter your email"
              required
              onChange={setEmail}
            />
            <input
              type="text"
              inputMode="numeric"
              name="Phnumber"
              id="phonenumber"
              placeholder="phone number"
              required
              onChange={setPhnumber}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              id="Address"
              required
              onChange={setaddress}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </ShoppingWrapper>
    );
  }
}

export default Shopping;
