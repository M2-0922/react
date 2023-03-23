import { useState, useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import searchIcon from '../../assets/SearchOutline.png'

const SearchContainer = styled.div`
    position: relative;
    width: 1140px;
    height: 83px;
`;

const SearchForm = styled.form`
    width: 100%;
    height: 100%;
    label {
        display: flex;
        justify-content: spece-between;
        text-align: center;
        width: 100%;
        height: 100%;
        input {
            width: 100%;
            padding: 0 2rem;
            border: none;
            border-radius: 10px;
            font-size: 1.2rem;
            color: ${props => props.theme === "light" ? "#333" : "#9C9C9C"};
            background: ${props => props.theme === "light" ? "#fff" : "#323443" };
            border: ${props => props.theme === "light" ? "2px solid #323443" : "none" };
        }
    }
`;

const SearchButton = styled.button`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translate(-50%, -50%);
    background: ${props => props.theme === "light" ? "#fff" : "#323443" };
    // color: ${props => props.theme === "light" ? "#333" : "#fff"};
    border: none;
    cursol: pointer; //doesn't work
`;


const SearchBar = () => {
    const { theme } = useContext(ThemeContext);
    const [ search, setSearch ] = useState("");

    const handleSearch = (e) => {
        const {value} = e.target;
        console.log(value);
        setSearch(value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault;
    //     useEffect(() => {
    //         console.log("submit!");
    //     },[]);
    // }

  return (
    <SearchContainer>
        <SearchForm theme={ theme }>
            <label>
                <input
                    type="text"
                    name="search"
                    onChange={handleSearch}
                    value={search}
                    placeholder="Type your favorite snippet here, hehehe ....."
                >
                </input>
            </label>
        </SearchForm>
        <SearchButton theme={ theme }>
            <img src={searchIcon} alt="search" />
        </SearchButton>
    </SearchContainer>
  )
}

export default SearchBar