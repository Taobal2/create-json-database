import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComp from "../Components/Body/FormComp";
import { Container, Wrapper } from "../Components/Styles/Pages.styled";

const CreatePage = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const URL = "http://localhost:7000/users";

  const addToData = async (user) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUserData([...userData, data]);
  };
  Navigate("/");

  return (
    <Container>
      <Wrapper>
        <FormComp onFormSubmit={addToData} />
      </Wrapper>
    </Container>
  );
};

export default CreatePage;
