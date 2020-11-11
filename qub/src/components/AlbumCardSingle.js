import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components/macro";
import { Card } from "react-bootstrap";

const AlbumCardSingle = ({ id, name, title, background }) => {
  return (
    <Wrapper className="col" >
      <Link to={`${id}`} className='album-card-single'>
        <div className='card-img'>
          <div className='img-wrapper' style={{ backgroundImage: background }}></div>
        </div>
        <Card.ImgOverlay>
          <div className='album-info'>
            <div className='album-info-inner'>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>
                {title}
              </Card.Subtitle>
            </div>
          </div>
        </Card.ImgOverlay>
      </Link>
    </Wrapper >
  )
}


export default AlbumCardSingle

const Wrapper = styled.div`
margin-bottom: 30px;

.album-card-single {
  display: block;
  width:100%;
  height: 100%;
  border-radius: 7.5px;
  border: none;
  box-shadow: none;
  overflow: hidden;

  &:hover {
    .album-info-inner {
      transform: translate(0, 0);
    }
  }
    .card-body {
        padding: 0;
    }
}

.album-info {
  padding: .75rem 1.25rem;

  .h5 {
    margin-bottom: 10px;
  }

  .h6 {
    margin-bottom: 0;
    color: #ffffff !important;
  }

  .card-subtitle {
    color: #9a9a9a;
    text-transform: uppercase;
    font-size: 10px;
  }
}

.album-card-single-img {
  display: block;
  width: 100%;
  height: 345px;
}

.card-img-overlay {
  top: unset;
  bottom: 0;
  height: 100%;
  background: transparent;
  cursor: pointer;
  padding: 0;

  .album-info {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .album-info-inner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: #FF21B2;
    padding: 1.25rem;
    color: #ffffff;
    transform: translate(0, 100%);
    transition: all 0.3s ease;
  }
}
`
