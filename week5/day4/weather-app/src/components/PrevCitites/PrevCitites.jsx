import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../actions/weatherAction';

const PrevCititesContainer = styled.div`
    position: fixed;
    top:0;
    left: ${props => props.isOpen ? "0" : "-200px"};
    width: 200px;
    height: 100%;
    padding: 20px;
    transition: all 0.35s ease-in-out;
    background: black;

    button{
        position: absolute;
        top:24px;
        right: 24px;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
`;

const PrevList = styled.div`
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    h6{
        font-size: 18px;
        cursor: pointer;
    }
`;

const PrevCitites = ({ isOpen, onClose }) => {
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const handleClick = (city) => {
        dispatch(fetchWeather(city));
        onClose();
    }
  return (
    <PrevCititesContainer isOpen={isOpen}>
        <button className='close-btn' onClick={onClose}>X</button>
        <PrevList>
        {
            cities.map(city => {
                return <h6 onClick={() => handleClick(city)}>{city[0].toUpperCase() + city.slice(1)}</h6>
            })
        }
        </PrevList>
    </PrevCititesContainer>
  )
}

export default PrevCitites