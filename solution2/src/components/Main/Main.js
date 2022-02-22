import React, { useState, useEffect } from 'react'
import CouncilorsItem from '../CouncilorsItem/CouncilorsItem';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import httpConsumer from '../../api/api';
import sorter from '../../helpers/sorter/sorter';
import filter from '../../helpers/sorter/filter/filter';
import AffairItem from '../AffairItem/AffairItem';
import { uuid } from 'uuidv4';

const Root = styled.div`
    width: 1400px;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
`;

const CouncilorsWrapper = styled.div`
    flex: 0.6;
`;

const AffairsWrapper = styled.div`
    flex: 0.3
`;

const ButtonContainer = styled.div`
    margin: 1rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const OptionContainer = styled.div`
    padding: 1rem;
    border: 1px solid lightrey;
    border-radius: 5px;
    background-color: white;
`;

const InputWrapper = styled.div`
    padding: 0.5rem;
`;

const DataWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    table-gap: none;
`;

const Councilors = () => {

    const [councilors, setCouncilors] = useState([]);
    const [affairs, setAffairs] = useState([]);

    const [nameInputValue, setNameInputValue] = useState('');
    const [idInputValue, setIdinputValue] = useState('');

    const[ affairsInputValue, setAffairsInputValue ] = useState('');

    const [nameFilteredData, setNameFilteredData] = useState([]);
    const [idFilteredData, setIdFilteredData] = useState([]);

    const [affairsFiltered, setAffairsFiltered] = useState([]);

    useEffect(() => {
        httpConsumer.getCouncilors().then(data => {
            setCouncilors([...sorter.sortByName(data)]);
        })
        httpConsumer.getAffairs().then(data => {
            setAffairs(data);
        })
    }, [])

    const handleNameSort = () => {
        setCouncilors( [...sorter.sortByName(councilors)]);
    }

    const handleIDSort = () => {
        setCouncilors( [...sorter.sortByID(councilors)]);
    }

    const handleNameInputValue = (event) => {
        setNameInputValue(event.target.value);
        setNameFilteredData([...filter.filterByName(councilors, event.target.value)]);
    }

    const handleIdInputValue = (event) => {
        setIdinputValue(event.target.value);
        setIdFilteredData([...filter.filterById(councilors, event.target.value)]);
    }

    const handleAffairsInput = (event) => {
        setAffairsInputValue(event.target.value);
        setAffairsFiltered([...filter.filterByDate(affairs, event.target.value )])
    }

    return (
        <Root>
            <CouncilorsWrapper>
            <OptionContainer>
                <ButtonWrapper>
                    <ButtonContainer>
                        <Button color='primary' variant="contained" onClick={handleNameSort}>Sort by Name</Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button color='primary' variant="contained" onClick={handleIDSort}>Sort by ID</Button>
                    </ButtonContainer>
                </ButtonWrapper>
                <ButtonWrapper>
                    <InputWrapper>
                    <TextField value={nameInputValue} onChange={handleNameInputValue} label="Find by name:"/>
                    </InputWrapper>
                    <InputWrapper>
                        <TextField value={idInputValue} onChange={handleIdInputValue} label="Find by Id:" />
                    </InputWrapper>
                </ButtonWrapper>
            </OptionContainer>
            <div>Councilors</div>
            {nameInputValue && nameFilteredData.map(el => {
                return <CouncilorsItem id={el.id} name={el.name} code={el.code}/>
            })}
            {idInputValue && idFilteredData.map(el => {
                return <CouncilorsItem id={el.id} name={el.name} code={el.code} />
            })}
            <DataWrapper>
            {(!nameInputValue && !idInputValue) && councilors.map(el => {
                return <CouncilorsItem id={el.id} name={el.name} code={el.code}/>
            })}
            </DataWrapper> 
            </CouncilorsWrapper>
            <AffairsWrapper>
            <OptionContainer>
                <InputWrapper>
                    <TextField value={affairsInputValue} onChange={handleAffairsInput} type='date' />
                </InputWrapper>
            </OptionContainer>
                <div>Affairs</div>
                {affairsInputValue && affairsFiltered.map(el => {
                    return <AffairItem id={uuid()} date={el.updated} />
                }) }
                {!affairsInputValue && affairs.map(el => {
                    return <AffairItem key={uuid()} id={el.id} date={el.updated}/>
                })}
            </AffairsWrapper>
        </Root>
    )
}

export default Councilors;
