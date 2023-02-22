import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Navigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";
import { toast } from "react-toastify";


const Wrapper = styled.div`
  div {
    width: 100%;
    place-items: center;
    height: 80vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }
  form {
    width: 400px;
  }
  section {
    margin-bottom: 20px;
  }
  .totalprice {
    text-decoration: none;
    width: 455px;
    background-color: #de4839;
    color: rgb(255 255 255);
    padding: 1.4rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 500px) {
     section{
      flex-direction:column;
      gap:5px !important;
     }
     .totalprice{
      width: 400px;
      margin-bottom:10px;
     }   
  }
`;
const Creditcard = () => {
  const [isValid, setIsValid] = useState(false)
  const { total_price, shipping_fee } = useCartContext();
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [cardnumber,setCardNumber] = useState('');
  const [cvc,setCvc] = useState();
  const [date,setDate] = useState();

  const fetchValidation = async () => {
    const reqBody = {
      firstname:firstname,
      lastname:lastname,
      cardnumber:cardnumber,
      date:date,
      cvc:cvc,
    };
    const data = await fetch(`https://formspree.io/f/moqzdqvn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const isValid = await data.json();
    setIsValid(isValid);
    console.log(isValid);
    toast.success("Your Order placed successfully");
  };

  function validate(e) {
    e.preventDefault();
    fetchValidation();
  }


  function setfirstName() {
    setFirstName(document.getElementById("firstname").value);
  }

  function setlastName() {
    setLastName(document.getElementById("lastname").value);
  }

  function setcardNumber() {
    setCardNumber(document.getElementById("cardnumber").value);
  }
  function setcvcNumber() {
    setCvc(document.getElementById("cvc").value);
  }
  function setmonth() {
    setDate(document.getElementById("date").value);
  }

  if (isValid) {
    return <Navigate to="/" />;
  }else{
  return (
    <Wrapper>
      <div>
        <h2 style={{ marginLeft: "60px" }}>Credit Card Details </h2>
        <form onSubmit={validate}>
          <section style={{ display: "flex", gap: "30px" }}>
            <input
              type="text"
              placeholder="First name"
              name="first name"
              required
              id="firstname"
              onChange={setfirstName}
            />
            <input
              type="text"
              placeholder="Last name"
              name="Last name"
              required
              id="lastname"
              onChange={setlastName}
            />
          </section>
          <section style={{ display: "flex", gap: "30px" }}>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Credit Card Number"
              required
              name="card number"
              id="cardnumber"
              onChange={setcardNumber}
            />
            <input type="text" placeholder="CVC" name="ccv" required  id="cvc" onChange={setcvcNumber}/>
          </section>
          <input
            type="text"
            placeholder="MM/YY"
            required
            id="date"
            name="date"
            onChange={setmonth}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "20px",
            }}
          />
          <p className="totalprice">
            Total Price :
            <FormatPrice price={shipping_fee + total_price} />
          </p>

          <Button type="submit" style={{ marginLeft: "50px" }}>
            Pay Now
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};
}

export default Creditcard;
