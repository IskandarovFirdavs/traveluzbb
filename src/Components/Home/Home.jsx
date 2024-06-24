import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const All = styled("div")`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  @media only screen and (max-width: 1210px) {
    flex-direction: column;
    height: 800px;
  }
  @media only screen and (max-width: 800px) {
    margin-top: -40px;
  }
  @media only screen and (max-width: 350px) {
    margin-top: -150px;
  }
`;
const Left = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 1210px) {
    flex-direction: column;
    width: 90%;
    height: 60%;
    margin-top: -150px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    width: 90%;
    margin-top: -170px;
    text-align: center;
  }
  @media only screen and (max-width: 350px) {
    height: 50%;
    margin-top: -270px;
  }
`;
const Img = styled("img")`
  height: 300px;
  border-radius: 20px;
  @media only screen and (max-width: 1210px) {
    width: 100vw;
    border-radius: 0;
  }
`;

const H1 = styled("h1")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  @media only screen and (max-width: 1210px) {
    color: white;
  }
`;

const Buttons = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;
const ButtonLeft = styled("button")`
  width: 30%;
  height: 100%;
  border: 1px solid greenyellow;
  border-bottom-left-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1210px) {
    height: 60%;
    width: 40%;
  }
`;
const ButtonRight = styled("button")`
  width: 30%;
  height: 100%;
  border: none;
  border-top-right-radius: 20px;
  border: 1px solid greenyellow;
  background-color: white;
  display: flex;
  align-items: center;
  transition: 0.5s;

  justify-content: center;
  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1210px) {
    height: 60%;
    width: 40%;
  }
`;

const LocationIcon = styled("img")`
  height: 60%;
  @media only screen and (max-width: 350px) {
    height: 40%;
  }
`;
const Location = styled("p")`
  font-size: 16px;
  margin-left: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

const Input = styled("input")`
  width: 40%;
  height: 12%;
  border: 1px solid grey;
  padding-left: 10px;
  border: 1px solid grey;
  &:focus-visible {
    outline: none;
  }
  @media only screen and (max-width: 1210px) {
    height: 8%;
    width: 40%;
  }
  @media only screen and (max-width: 500px) {
    height: 8%;
    width: 70%;
  }
`;
const Button = styled(Link)`
  position: relative;
  height: 15%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: greenyellow;
  border: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:after {
    content: "";
    background: #94de94;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  @media only screen and (max-width: 500px) {
    height: 8%;
    width: 75%;
  }
`;

const H4 = styled("h4")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: black;
`;

const Home = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <div>
      <All>
        <Left>
          <Img
            src="https://t3.ftcdn.net/jpg/01/78/79/48/360_F_178794882_8xGoQaTmX0yU4XLdnqhSGqyrKbJ3cckb.jpg"
            alt=""
          />
        </Left>
        <Right>
          <H1>O'zbekiston bo'ylab sayohat</H1>
          <Buttons>
            <ButtonLeft
              key={1}
              className={active === "1" ? "focus" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn-icons-png.flaticon.com/512/106/106195.png"
                alt=""
              />
              <Location>SAYOHAT</Location>
            </ButtonLeft>
            <ButtonRight
              key={2}
              className={active === "2" ? "focus" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn.icon-icons.com/icons2/3514/PNG/512/watch_time_clock_icon_221069.png"
                alt=""
              />
              <Location>SOATLIK IJARA</Location>
            </ButtonRight>
          </Buttons>

          <Input
            list="browsers"
            name="browser"
            placeholder="Qayerdan : viloyatlar , shaharlar"
          />
          <Input
            list="browsers"
            name="browser"
            placeholder="Qayerda : viloyatlar , shaharlar"
          />
          <datalist id="browsers">
            <option value="Qashqadaryo" />
            <option value="Surxondaryo" />
            <option value="Jizzax" />
            <option value="Samarqand" />
            <option value="Toshkent" />
            <option value="Namangan" />
            <option value="Farg`ona" />
            <option value="Xorazm" />
            <option value="Sirdaryo" />
            <option value="Navoiy" />
            <option value="Andijon" />
            <option value="Buxoro" />
          </datalist>

          <Button to={"/takliflar"}>
            <H4>ARIZA QOLDIRMOQ</H4>
          </Button>
        </Right>
      </All>
    </div>
  );
};

export default Home;
