import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    padding: 2rem;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
    width: 60%;
`;

function CouncilorsItem({name, code, id}) {
    return (
        <Root>
            <div>
                Name: {name}
            </div>
            <div>
                Code: {code}
            </div>
            <div>
                ID: {id}
            </div>
        </Root>
    )
}

export default CouncilorsItem
