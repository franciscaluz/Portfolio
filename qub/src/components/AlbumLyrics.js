import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components/macro";
import { Container, Row, Col, Button } from "react-bootstrap";

class AlbumLyrics extends PureComponent {

  render() {
    const { name, title, background, year, length, tracks, trackList } = this.props

    return (

      < Wrapper >
        <Container fluid>
          <Row>
            <Col md={5} lg={4} xl={3}>
              <div className="card-img">
                <div className='img-wrapper' style={{ backgroundImage: background }}></div>
              </div>
              <p className="text-uppercase">Album</p>
              <h1 className="mb-0">{title}</h1>
              <h5>Par {name}</h5>
              <ul className="album-info h6">
                <li className="">{year}</li>
                <li className="">{tracks} Chansons</li>
                <li className="">{length} min</li>
              </ul>
              <Button variant="primary" onClick={() => this.props.history.goBack()}>
                Revenir à l'album
              </Button>
            </Col>
            <Col md={7} lg={8} xl={9}>
              <div className='lyrics-wrapper'>
                <h1>{trackList.song}</h1>
                <ul className="list-unstyled">
                  {trackList.lyrics.map((lyrics, index) => (
                    <li key={index}>
                      {lyrics}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper >
    );
  }
}

export default withRouter(AlbumLyrics)

const Wrapper = styled.div`
.card-img {
  margin-bottom: 30px;
}

.album-info {
  padding-left: 0;
  list-style:none;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-right: 15px;
    border-right: 2px solid;
    padding-right: 15px;

    &:last-child{
      border-right:0;
      padding-right: 0;
      margin-right:0;
    }
  }
}

.lyrics-wrapper {
  li {
    font-size: 18px
    margin-bottom: 10px;
  }

  @media(max-width: 767.98px){
    margin-top: 30px;

    li {
      font-size: 13px;
    }
  }
}




`

