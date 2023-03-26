import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'
import searchImage from "../../assets/search.png"

const SearchContainer = styled.div`
    position: relative;
    width: 1140px;
    height: 83px;
    left: 150px;
    top: 1446px;
    background: #3F4152;
    border-radius: 10px;
`;


const Icon = styled.div`
    img{
        position: absolute;
        top: 50%;
        left: 12.5%;
        right: 12.5%;
        top: 12.5%;
        bottom: 12.5%;
        border: 2px; 
        color #FBFBFB;
        transform: translate(-50%, -50%);
    }
`;

const SearchBox = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <SearchContainer theme={theme}>
            <searchForm>
                <textarea>
                    Type your favorite snippet here, hehehe .....
                    <Icon>
                        <img src={searchImage} alt=""/>
                    </Icon>
                </textarea>
            </searchForm>
        </SearchContainer>
    );
};


export default SearchBox