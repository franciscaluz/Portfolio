import React, {useState} from "react";
import styled from "styled-components/macro";
import Headroom from "react-headroom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const BaseScreen = ({ children }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);

  // check if out button is disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  //toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };


  return (
    <Wrapper>
      <Menu state={state} />
      <Headroom>
        <Navigation>
          <button onClick={handleMenu}>
            {state.clicked === true ? <RiCloseFill/> : <RiMenuFill/> }
          </button>
        </Navigation>
      </Headroom>
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
