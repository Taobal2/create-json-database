import React from "react";
import { Container, Wrapper } from "../Components/Styles/Pages.styled";

const AboutPage = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{ marginTop: "50px", fontWeight: "bold" }}>
          This is the about page !
        </div>
      </Wrapper>
    </Container>
  );
};

export default AboutPage;
