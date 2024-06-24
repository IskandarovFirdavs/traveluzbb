import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
const All = styled("div")`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
  }
`;
const Right = styled("div")`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;
const LocationDiv = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const InputsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 100%;

  @media only screen and (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled("input")`
  height: 9%;
  width: 70%;
  border: none;
  border-bottom: 2px solid grey;
  &:focus-visible {
    outline: none;
  }
`;
const Placeholder = styled("textarea")`
  height: 8%;
  width: 70%;
  border: none;
  border-bottom: 2px solid grey;
  &:focus-visible {
    outline: none;
  }
`;
const Submit = styled("input")`
  height: 8%;
  width: 30%;
  border: none;
  font-weight: 700;
  border-radius: 20px;
  background-color: greenyellow;
  &:focus-visible {
    outline: none;
  }
`;

const IframeImg = styled("img")`
  width: 40%;
  height: 400px;
  border: 0;
  @media only screen and (max-width: 640px) {
    width: 95%;
  }
`;
const FormEmail = styled("form")`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;
export const Ariza = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_enw6q1l", "template_f7ks4tb", form.current, {
        publicKey: "UcGQhl6IzWjC_lI7C",
      })
      .then(
        () => {
          alert("Sizning xabaringiz MUAVVFAQIYATLI yuborildi !");
        },
        (error) => {
          alert("XATO! Qayta urunib ko'ring...", error.text);
        }
      );
  };

  return (
    <All>
      <IframeImg
        src="https://scholarshipfellow.com/wp-content/uploads/2021/03/How-to-Write-a-Leave-Application-.png"
        alt=""
      />
      <Right>
        <LocationDiv>
          <InputsDiv>
            <FormEmail ref={form} onSubmit={sendEmail}>
              <Input
                list="browsers"
                name="from_qayerdan"
                placeholder="✈️   Qayerdan : viloyatlar , shaharlar"
              />
              <Input
                list="browsers"
                name="from_qayerda"
                placeholder="🚢    Qayerda : viloyatlar , shaharlar"
              />
              <Input name="from_qachon" type="datetime-local" />
              <Input
                name="from_belgi"
                type="text"
                placeholder="📃   Uchrashuv belgisidagi ism"
              />

              <Input
                type="number"
                name="from_kattalar"
                min="1"
                max="50"
                placeholder="🧑‍🤝‍🧑   Kattalar"
              />
              <Input
                type="number"
                name="from_bolalar"
                min="0"
                max="50"
                placeholder="👶   Bolalar"
              />
              <Input type="text" name="from_name" placeholder="🔤   Ism :" />
              <Input
                type="email"
                name="from_email"
                placeholder="📨   Gmail yoki Telefon raqamingiz :"
              />
              <Placeholder name="Izoh :" placeholder="💬 Izoh :" />
              <Submit type="submit" value="Yubormoq" />
            </FormEmail>
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
          </InputsDiv>
        </LocationDiv>
      </Right>
    </All>
  );
};
export default Ariza;
