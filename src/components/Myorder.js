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
    margin-bottom: 50px;
    justify-content: center;
    margin-top: 50px;
  }
  .img-section {
    display: flex;
    flex-direction: column;
  }
  .product ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    border: 1px solid gray;
    width: 120px;
  }

  .product ul {
    margin: 0;
  }
  .product {
    text-align: center;
    margin: 30px 0;
  }
  @media (max-width: 768px) {
    .img-section {
      flex-direction: row;
    }
    .img-data {
      margin-left: -70px;
    }

    p {
      display: inline-flex;
    }
    .product ul li {
      width: 100px;
    }
  }
  @media (max-width: 520px) {
    ul {
      justify-content: space-around;
    }
    .product ul {
      display: inline-flex;
      flex-direction: column;
    }
    .product ul li {
      width: 100%;
      height: 50px;
    }
    .heading {
      font-size: 4rem;
    }
  }
`;

const Myorder = () => {
  const { cart } = useCartContext();
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

      <div className="product">
        <ul>
          <li>S. No.</li>
          <li>item</li>
          <li>image</li>
          <li>order total</li>
          <li>Quantity</li>
        </ul>
        {cart.map((item, index) => (
          <ul key={item.id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>
              <img
                src={item.image}
                alt="product_image"
                className="img-section"
              />
            </li>
            <li>
              <FormatPrice price={item.price * item.amount} />
            </li>
            <li>{item.amount}</li>
          </ul>
        ))}
      </div>
    </Wrapper>
  );
};

export default Myorder;
