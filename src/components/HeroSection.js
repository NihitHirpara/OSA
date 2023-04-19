import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import Slider from "./Slider"


const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <Slider />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              A typical online store enables the customer to browse the firm's
              range of products and services, view photos or images of the
              products, along with information about the product specifications,
              features and prices. Online stores usually enable shoppers to use
              "search" features to find specific models, brands or items.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/home-logo.png"
                alt="hero-section-phot"
                className="imge-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`


  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color: #ff4057 !important;
    }

    .intro-data {
      margin-bottom: 0;
      color: #242b2e;
      font-family: "poppin";
      font-weight: 800;
      font-size: 25px;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  figure {
    position: relative;

    // &::after {
    //   content: "";
    //   width: 60%;
    //   height: 80%;
    //   background-color: #dfab9e;
    //   position: absolute;
    //   left: 50%;
    //   top: 11rem;
    //   z-index: -1;
    //}
  }
  .imge-style {
    width: 100%;
    height: auto;
    animation: imgup 0.8s linear infinite alternate;
  }

  @keyframes imgup{
    to{
      transform: translateY(-10px);
    }
  }
  @media (max-width:1200px){
    Button{
      margin-bottom: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: #dfab9e;
    }
  }
`;

export default HeroSection;
