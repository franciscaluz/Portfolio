import React from 'react';
import styled from 'styled-components/macro'
import { Container } from 'reactstrap';
import { RiGithubLine, RiLinkedinLine, RiMailLine } from "react-icons/ri";

const Footer = () => {

  return (

    <Wrapper>

      <Container fluid="md">

        <div className="d-flex align-items-center justify-content-between">

          <p className="text-thin text-sm">FA/VS@copyright.2020</p>

          <p>
            <a href="https://www.linkedin.com/in/franciscaluz-vargas/" target="_blank" rel="noopener noreferrer"><RiLinkedinLine/></a>
            <a href="https://github.com/franciscaluz" target="_blank" rel="noopener noreferrer"><RiGithubLine/></a>
            <a href="mailto:franciscaluz@hotmail.com" target="_blank" rel="noopener noreferrer"><RiMailLine/></a>
          </p>
        </div>

      </Container>

    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  height: 40px;

p {
margin-bottom: 0;
a {
display: inline-flex;
align-items: center;
justify-content: center;
margin-left: 0.5em;
color: #ccc;
font-weight: 0.7em;
}



@media(max-width:767.98px){

    p {
        font-size: 12px;
        margin-bottom: 0;
    }
}
`;
