import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBarContainer = styled.div`
    // width: 155px;
    // height: 155px;
    // border-radius: 50%;
    // border: 2px solid ${props => props.theme === "light" ? "#333" : "#fff"};
    // display: flex;
    // justify-content: center;
    // align-items:center;
`;
// const InputSearchBar = styled.input`
//     // width: 155px;
// `;

const SearchBar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <SearchBarContainer theme={theme}>
            <input value={busqueda}
                placeholder={placeholder} />
        </SearchBarContainer>
    )
}

export default AvatarCard