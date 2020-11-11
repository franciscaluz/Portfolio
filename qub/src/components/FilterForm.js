import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { Form, FormControl, FormGroup } from "react-bootstrap";

class FilterForm extends PureComponent {

    render() {
        const { setFilterStr } = this.props

        return (
            <Wrapper>
                <Form inline>
                    <FormGroup className="mb-0 input-search">
                        <FormControl type="search" placeholder="Rechercher par artiste ou album" onChange={e => setFilterStr(e.target.value)} />
                    </FormGroup>
                </Form>
            </Wrapper>
        );
    }
}

export default FilterForm;
const Wrapper = styled.div`
width: 100%;

form {
    width: 100%;
}

`