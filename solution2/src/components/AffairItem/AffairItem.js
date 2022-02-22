import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
    margin-top: 1rem;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 5px;
    padding: 1rem;
`;

const AffairItem = ({id, date}) => {
    return (
        <Root>
            <div>
                id: {id}
            </div>
            <div>
                Updated: {date}
            </div>
        </Root>
    )
}

export default AffairItem;
