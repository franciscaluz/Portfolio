import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const WebProjectCard = () => {
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

export default WebProjectCard;

const Wrapper = styled.div``;
