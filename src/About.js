import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const Wrapper = styled.section`
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
      margin-top:100px;
    p {
      margin: 2rem 0;
    }
    h1,
    h3 {
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

    /* &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: #dfab9e;
      position: absolute;
      left: 50%;
      top: 11rem;
      z-index: -1;
    } */
  }
  .im-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    /* figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
    /* background-color: rgba(81, 56, 238, 0.4);
    }  */
  }
`;

const About = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to </p>
              <h1> OSA</h1>
              <br />
              <h3>Online Shopping Adda</h3>
              <p>
                Online shopping is a form of electronic commerce which allows
                consumers to directly buy goods or services from a seller over
                the Internet using a web browser or a mobile app.
              </p>
              <NavLink>
                <Button>show now</Button>
              </NavLink>
            </div>
            <div className="hero-section-image">
              <figure>
                <img
                  src="images/osa img.png"
                  alt="hero-section-phot"
                  className="im-style"
                />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
