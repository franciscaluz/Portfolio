import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { Container } from "reactstrap";
import gsap from "gsap";
import { TweenMax} from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const sections = [
  {
    title: "Architecto aliquam",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.",
  },
  {
    title: "Ceritatis placeat",
    subtitle:
      "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?",
  },
  {
    title: "Vitae voluptates",
    subtitle:
      "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
  },
  {
    title: "Architecto aliquam",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.",
  },
  {
    title: "Ceritatis placeat",
    subtitle:
      "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?",
  },
  {
    title: "Vitae voluptates",
    subtitle:
      "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
  },
];

const TestScreen = () => {
  const [background, setBackground] = useState("#262626");
  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== "#262626" ? "#262626" : "#1b4943";
    setBackground(color);
  };

  // useEffect(() => {
  //   gsap.to('.circle', {
  //     x: '+=100vw',
  //     rotation: 360,
  //     duration: 7,
  //     ease: "power1.out",
  //   });
  //
  // }, []);

  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: background,
      duration: 1,
      ease: "none",
    });
  }, [background]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 60,
          delay: 0.7,
        },
        {
          duration: 0.6,
          autoAlpha: 1,
          ease: "none",
          y: 0,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            scrub: 1,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "restart pause reverse reset",
            markers: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const purple = useRef(null);
  const pink = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      [purple.current],
      6,
      { x: '0', rotation: '360' },
      { x: '100%', yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [pink.current],
      4,

      { x: '100vw', rotation: '360'},
      { x: '85vw', rotation: '-360', repeat: -1, yoyo: true},


    );
  }, []);
  return (
    <Wrapper>
      <Container>
        <header ref={headerRef} className="App-header">
          <button onClick={() => toggleBackground()}>Change background</button>
          <p>Scroll down to see sections being revealed by ScrollTrigger.</p>
        </header>
        <main className="App-main">
          {sections.map(({ title, subtitle }) => (
            <div className="App-section" key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          ))}
        </main>
      </Container>

      <div className="circle-wrapper">
        <div className="circle" ref={pink}>something</div>
        <div className="circle2" ref={purple}>something</div>
      </div>
    </Wrapper>
  );
};
export default TestScreen;

const Wrapper = styled.div`
  position: relative;

  .App {
    text-align: center;
  }

  .App-logo {
    pointer-events: none;
    max-width: 100%;
  }

  .App-header {
    background-color: #262626;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  .App-main {
    padding: 200px 10% 400px 10%;
    margin: 0 auto;
    background: #fc466b; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top,
      #3f5efb,
      #fc466b
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top,
      #3f5efb,
      #fc466b
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .App-section {
    max-width: calc(80% - 50px);
    margin: 30px auto;
    padding: 50px;
    background-color: #fff;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
  .circle-wrapper {
  position: fixed:
  bottom: 15%;
  right: 15%;
  background: pink;
  width: 100%;
  height: 100vh;
  }
  
  .circle {
  position: relative;
  right: 15%;
  background: #1a1a1a;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  }
  
    .circle2 {
  position: relative;
  right: 0;
  background: #1a1a1a;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  }
`;
