import React from "react";
import styled from "styled-components/macro";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BaseScreen = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <div className="page-wrapper">
        {children}
      </div>
      <Footer />
    </Wrapper>
  );
};

export default BaseScreen;
const Wrapper = styled.div`
  position: relative;
`;
