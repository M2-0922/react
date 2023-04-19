import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { addCity, fetchWeather, setCity } from '../../actions/weatherAction';

const SearchContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
    form{
        border:1px solid black;
        position: relative;
        input{
            width: 100%;
            height: 40px;
            padding: 0 1rem;
            font-size: 16px;
            outline: none;
        }
        button{
            position: absolute;
            right: 6px;
            top: 6px;
            height: 28px;
            padding: 6px 12px;
        }
    }
`;

const Search = () => {
    const [selectedCity, setSelectedCity] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(fetchWeather(selectedCity));
        dispatch(setCity(selectedCity));
        dispatch(addCity(selectedCity));
    }

  return (
    <SearchContainer>
        <form onSubmit={handleSubmit}>
            <input type="text" value={selectedCity} placeholder='City that you like' onChange={(ev) => setSelectedCity(ev.target.value)} />
            <button>Search</button>
        </form>
    </SearchContainer>
  )
}

export default Search