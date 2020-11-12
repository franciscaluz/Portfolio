import React, {useEffect, useRef} from 'react'
import styled from "styled-components/macro";
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import {menuShow, menuHide, staggerLinks, hoverLink, hoverExit} from './animate'


const Menu = ({ state }) => {
  //create refs for our DOM elements

  let menuWrapper = useRef(null);
  let show1 = useRef(null);
  let show2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.

    if (state.clicked === false) {

      // If menu is closed and we want to open it.

      menuHide(show2, show1);
      // Set menu to display none
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      menuShow(show1, show2);
      staggerLinks(line1, line2, line3);
    }
  }, [state]);

  return (
    <Wrapper ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <div
        ref={(el) => (show1 = el)}
        className="menu-secondary-background-color"
      >
      </div>

      <div ref={(el) => (show2 = el)} className="menu-layer">

        <div className="container">

          <div className="wrapper">

            <div className="menu-links">

              <nav>

                <ul>

                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/infos"
                    >
                      Infos
                    </Link>
                  </li>

                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverLink(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact
                    </Link>
                  </li>

                </ul>

              </nav>

            </div>

          </div>

        </div>

      </div>

    </Wrapper>
  );
};

export default Menu

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: none;
  height: 100%;
  width: 100%;

.menu-secondary-background-color {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000000;
}

.menu-layer {
  position: relative;
  height: 100%;
  background: #1a1a1a;
  overflow: hidden;
}

.wrapper {
  position: relative;
}

.menu-links {
  position: relative;
  top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: block;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        position: relative;
        width: 700px;
        height: 135px;
        font-size: 6em;
        font-weight: 700;
        cursor: pointer;
        overflow: hidden;

        a {
          position: absolute;
          color: #fff;
          text-decoration: none;
          
          &:hover {
            color: #FF2679;
          }
        }
      }
    }
  }
}
`;
