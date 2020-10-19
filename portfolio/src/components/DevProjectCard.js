import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const DevProjectCard = () => {
  return (
    <Wrapper className="list-group-item">
      <Link to="" className="dev-project-card">
        <div className="dev-project-card-img-wrapper">
          <div className="image-ratio-1">
            <div className="img-wrapper"></div>
          </div>
        </div>

        <div className="dev-project-card-body">
          <h6>Project title</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            accumsan amet cras libero commodo in egestas ornare vestibulum.
            Varius porttitor mi lobortis purus viverra cursus lectus integer. Eu
            at diam consequat, lacinia cum. Iaculis neque, massa adipiscing in
            lorem netus adipiscing.
          </p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default DevProjectCard;

const Wrapper = styled.li`
  padding: 0;
  border: none;
  margin-bottom: 3em;

  .dev-project-card {
    display: flex;
    width: 100%;
    text-transform: none;
    font-weight: unset;
    transition: all 0.3s ease;
  }

  .dev-project-card-img-wrapper {
    width: 100%;
    max-width: 14vw;
    margin-right: 2em;

    .img-wrapper {
      background-image: url("https://picsum.photos/200/300");
    }
  }

  .dev-project-card-body {
    flex: 0 0 70%;
  }
`;
