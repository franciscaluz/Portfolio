import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const DevProjectCard = ({ slug, name, description, background, logo, utilities }) => {

  return (

    <Wrapper className="list-group-item">

      <Link to={`/project/${slug}`} className="dev-project-card">

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
          <h3>{name}</h3>

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
  flex: 0 1 30%;
  width: 100%;
  margin-right: 2em;
}

.dev-project-card-logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 60%;
  }
}

.dev-project-card-body {
  flex: 0 1 70%;

  p {
    font-size: 1.125em;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;

    li {
      margin-right: 5px;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 767.98px) {
  .dev-project-card-body {
    p, li {
      font-size: 1em;
    }
  }
}

@media (max-width: 575.98px) {
  .dev-project-card {
    flex-direction: column;
  }

  .dev-project-card-img-wrapper {
    flex: 1 1 auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1em;
  }
}
`;
