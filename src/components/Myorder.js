import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";

const Wrapper = styled.div`
  .heading {
    text-align: center;
    margin-top: 40px;
  }
  .img-section {
    width: 5rem;
    height: 5rem;
  }
  p {
    font-size: 30px;
    text-align: start;
  }
  .myorder-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
  }
  .cartempty{
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Myorder = () => {
  const { cart, name, image, amount, total_price, shipping_fee } = useCartContext();
  if (cart?.length === 0) {
    return (
        <h3 style={{fontSize:'4.2rem',textAlign:'center',textTransform:'capitalize',fontWeight:'300'}}>No Cart in Item </h3>
    );
  }
  return (
    <Wrapper>
      <div >
        <h1 className="heading">Myorder</h1>
        <div className="myorder-section">
        <div>
          <p>
            item:
            <p>{name}</p>
          </p>
        </div>
        <div>
          <p>
            order total:
            <p>
              <FormatPrice
                price={
                  cart.length === 0 ? total_price : shipping_fee + total_price
                }
              />
            </p>
          </p>
        </div>
        <div>
          <p>
            Quantity: <p>{amount}</p>
          </p>
          <p></p>
        </div>
        <div>
          <p>image:</p>
          <img src={image} alt="" srcset="" className="img-section" />
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Myorder;
