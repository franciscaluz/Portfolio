import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import Navigation from "../components/Navigation";


class BaseScreen extends PureComponent {
    render() {
        return (
            <Wrapper>
                <div className="navigation-wrapper">
                    <Navigation />
                </div>

                <div className='page-content'>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}

export default BaseScreen;

const Wrapper = styled.div`

.navigation-wrapper {
    height: 100%;
    background: #ffffff;
    width: 100%;
  }

`