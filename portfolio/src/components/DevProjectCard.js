import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const DevProjectCard = ({
  id,
  name,
  description,
  background,
  logo,
  utilities,
}) => {
  return (
    <Wrapper className="list-group-item">
      <Link to={"/project/" + id} className="dev-project-card">
        <div className="dev-project-card-img-wrapper">
          <div className="image-ratio-1">
            <div
              className="img-wrapper"
              style={{
                backgroundColor: `${background}`,
              }}
            >
              <div className="dev-project-card-logo-wrapper">
                <img src={logo} alt={name} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="dev-project-card-body">
          <h6>{name}</h6>
          <p>{description}</p>
          <ul>
            {utilities.map((utility, index) => {
              return <li key={index}>#{utility}</li>;
            })}
          </ul>
        </div>
      </Link>
    </Wrapper>
  );
};

export default withRouter(DevProjectCard);

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
  }

  .dev-project-card-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dev-project-card-body {
    flex: 0 0 70%;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding-left: 0;

      li {
        margin-right: 5px;
      }
    }
  }
`;
