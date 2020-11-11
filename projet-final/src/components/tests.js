/* import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import BaseScreen from './BaseScreen'
import { withRouter, useHistory, useParams } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap';
import CharacterEditModal from './modals/CharacterEditModal';

const CharacterSingleScreen = () => {
    const [results, setResults] = useState({})

    const id = useParams().id;

    useEffect(() => {
        async function getData() {
            let url = 'https://rickandmortyapi.com/api/character/'
            const res = await fetch(url + id);
            const data = await res.json();
            setResults(data);
        }
        getData();
    }, [id]);

    const history = useHistory();
    console.log("id : ", id)
    console.log("name : ", results.name)

    return (
        <BaseScreen>
            <Wrapper className="character-single-wrapper">
                <Row>
                    <Col sm="6">
                        <div className="character-single-image-wrapper">
                            <div className="image-ratio-1">
                                <div className="img-wrapper" style={{ backgroundImage: `url(${results.image})` }}></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6">
                        <h2>{results.name} {results.id}</h2>
                        <span className="character-page-field-title">Statut</span>
                        <p>{results.status}</p>
                        <span className="character-page-field-title">Espèce</span>
                        <p>{results.species}</p>
                        <span className="character-page-field-title">Type</span>
                        <p>{results.type}</p>
                        <span className="character-page-field-title">Genre</span>
                        <p>{results.gender}</p>
                        <span className="character-page-field-title">Planète d'origine</span>
                        <p>{results.location && results.location.name}</p>
                        <span className="character-page-field-title">Emplacement</span>
                        <p>{results.origin && results.origin.name}</p>
                    </Col>
                </Row>
                <div>
                    <Button onClick={() => history.goBack()} className="btn btn-theme-primary">Retour</Button>
                    <CharacterEditModal />
                </div>
            </Wrapper>
        </BaseScreen>
    );
}

export default withRouter(CharacterSingleScreen);
const Wrapper = styled.div`
padding: 30px;
border-radius: 10px;
overflow: hidden;
box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.2);

.character-single-image-wrapper {
    margin-bottom: 30px;
}

.character-page-field-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

` */