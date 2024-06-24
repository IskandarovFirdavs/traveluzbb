import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
const Nav = styled("div")`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: greenyellow;
`;

const Right = styled("div")`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: auto;
  justify-content: space-around;
`;

const H1 = styled("h1")`
  margin: 0;
  color: black;
  cursor: pointer;
  width: 80%;
  .roboto-black-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: italic;
  }
  @media only screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 250px) {
    font-size: 15px;
    width: 100%;
  }
`;
const H6 = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  margin: 0;
  color: black;
  font-size: 80%;
  cursor: pointer;
  text-decoration: underline 0.15em greenyellow;
  text-underline-offset: 0.6em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms;
  &:hover {
    text-decoration-color: black;
    text-underline-offset: 0.4em;
  }
`;

const Header2 = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 20%;
  height: 50px;
`;

const LangIcon = styled("img")`
  height: 50px;
`;

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Nav>
      <a
        style={{
          width: "30%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "auto",
          justifyContent: "center",
          marginTop: "-10px"
        }}
        href="https://iskandarovfirdavs.github.io/travel/"
      >
        <H1>Uzbekistan Transfer.uz</H1>
      </a>

      {width <= 800 ? (
        <Header2>
          {" "}
          <div className="dropdown">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-4965044-4133429.png?f=webp"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <a href="https://iskandarovfirdavs.github.io/travel/">
                  <LangIcon
                    src="https://static.vecteezy.com/system/resources/previews/016/328/589/original/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/traveluzb/">
                  <LangIcon
                    src="https://www.pinclipart.com/picdir/big/94-946409_flag-ru-russia-icon-russian-federation-flag-icon.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <img
              src="https://www.svgrepo.com/show/509382/menu.svg"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <H6 to={"/yo'nalishlar"}>Yo'nalishlarimiz</H6>
                <H6 to={"/ariza"}>Taklif olmoq</H6>
                <H6 to={"/sharhlar"}>Izohlar</H6>
                <H6 to={"/bog'lanish"}>Biz bilan bog'lanish</H6>
              </div>
            </div>
          </div>
        </Header2>
      ) : (
        <Right>
          <H6 to={"/yo'nalishlar"}>Yo'nalishlarimiz</H6>
          <H6 to={"/ariza"}>Taklif olmoq</H6>
          <H6 to={"/sharhlar"}>Izohlar</H6>
          <H6 to={"/bog'lanish"}>Biz bilan bog'lanish</H6>
          <div className="dropdown">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-4965044-4133429.png?f=webp"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <a href="https://iskandarovfirdavs.github.io/travel/">
                  <LangIcon
                    src="https://static.vecteezy.com/system/resources/previews/016/328/589/original/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/traveluzb/">
                  <LangIcon
                    src="https://www.pinclipart.com/picdir/big/94-946409_flag-ru-russia-icon-russian-federation-flag-icon.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Right>
      )}
    </Nav>
  );
};

export default Navbar;
