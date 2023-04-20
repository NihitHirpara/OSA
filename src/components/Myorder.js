import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";

const Wrapper = styled.div`
  .heading {
    text-align: center;
    padding-top: 60px;
  }
  .img-section {
    width: 5rem;
    height: 5rem;
  }
  p {
    font-size: 30px;
    text-align: start;
    color: black;
  }
  ul {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .img-section {
    display: flex;
    flex-direction: column;
  }
`;

const Myorder = () => {
  const { cart} =
    useCartContext();
  console.log(cart, "/.....");
  if (cart?.length === 0) {
    return (
      <h3
        style={{
          fontSize: "4.2rem",
          textAlign: "center",
          textTransform: "capitalize",
          fontWeight: "300",
        }}
      >
        No Cart in Item{" "}
      </h3>
    );
  }
  return (
    <Wrapper>
      <div>
        <h1 className="heading">Myorder</h1>
      </div>
      <div>
        {cart.map((item) => (
          <ul>
            <li>
              <p>
                item: <p>{item.name}</p>{" "}
              </p>
            </li>
            <li>
              <p className="img-section">
                image:
                <img
                  src={item.image}
                  alt=""
                  srcset=""
                  className="img-section"
                />
              </p>
            </li>
            <li>
              <p>
                order total:
                <p>
                  <FormatPrice price={item.price * item.amount} />
                </p>
              </p>
            </li>
            <li>
              <p>
                Quantity: <p>{item.amount}</p>{" "}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </Wrapper>
  );
};

export default Myorder;
