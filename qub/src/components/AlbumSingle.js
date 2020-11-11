import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as Like } from "../assets/icn-like.svg";
import { ReactComponent as More } from "../assets/icn-more.svg";
import { ReactComponent as See } from "../assets/icn-see.svg";
import { ReactComponent as SeeNot } from "../assets/icn-see-not.svg";

class AlbumSingle extends PureComponent {
  render() {
    const { match } = this.props
    const { name, title, background, year, length, tracks, trackList } = this.props

    return (
      <Wrapper >
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
              <Link to="/" className='btn btn-outline-primary'>
                Retour à la page d'accueil
                </Link>
            </Col>
            <Col md={7} lg={8} xl={9}>
              <div className="tracklist-header">
                <Link to="#" className="btn btn-primary">Lecture</Link>
                <Link to="#" className="btn btn-icon btn-icon-outline-primary"><Like /></Link>
                <Link to="#" className="btn btn-icon btn-icon-outline-primary"><More /></Link>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Titre</th>
                      <th scope="col">Paroles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackList.map(({ id, song, lyrics }, index) => (
                      <tr key={id}>
                        <th scope="row">{index + 1}</th>
                        <td>{song}</td>
                        <td>
                          {lyrics.length ? (
                            <Link to={`${match.params.albumId}/${id}`} className="btn btn-icon btn-icon-primary"><See /></Link>
                          ) : (
                              <Button className='btn btn-icon disabled'><SeeNot /></Button>
                            )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper >
    );
  }
}

export default withRouter(AlbumSingle)

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

.tracklist-header {
  margin-bottom: 15px;

  a {
    margin-right: 10px;
    pointer-events: none;
  }

  @media(max-width: 767.98px){
    margin-top: 30px;
  }
}

.table {
  thead tr th {
    &:nth-child(3) {
      text-align: right;
    }
  }
  thead th {
    text-transform: uppercase;
    border-bottom: 1px solid #dee2e6;
    font-size: 12px;
  }
  td, th {
    vertical-align: middle;

    &:nth-child(1){
      width: 5%;  
    }
    &:nth-child(2){
      width: 80%;  
    }
    &:nth-child(3){
      text-align: right;  
    }
  }
}

`
