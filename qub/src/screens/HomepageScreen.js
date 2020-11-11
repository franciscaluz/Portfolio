import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import AlbumCardList from "../components/AlbumCardList";
import FilterForm from "../components/FilterForm";
import { Container, Row, Col } from "react-bootstrap";

class HomepageScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterStr: ''
    };
  }

  render() {
    return (
      <BaseScreen>
        <Wrapper>
          <Container fluid>
            <div>
              <Row>
                <Col md={8}>
                  <h1>Albums</h1>
                </Col>
                <Col md={4}>
                  <FilterForm setFilterStr={val => this.setState({ filterStr: val })} />
                </Col>
              </Row>
            </div>
            <AlbumCardList search={this.state.filterStr} />
          </Container>
        </Wrapper>
      </BaseScreen>
    );
  }
}

export default HomepageScreen;
const Wrapper = styled.div`
margin: 0 auto;

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 0;
  }
}

`
