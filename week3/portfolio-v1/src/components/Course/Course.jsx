import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../context/ThemeContext';

const CourseContainer = styled.div`
    position: relative;
    width: 263px;
    height: 190px;
    background: ${props => props.theme === "light" ? "#fff" : "#323443" };
    border: ${props => props.theme === "light" ? "2px solid #323443" : "none" };
    border-radius: 12px;
    
`;

const CourseImageContainer = styled.div`
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    left: 50%;
    background: ${props => props.theme === "light" ? "#fff" : "#323443" };
    border: 2px solid ${props => props.theme === "light" ? "#323443" : "#fff" };
    // border: 2px solid ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};
    transform: translate(-50%, -50%);
    img {
        position: absolute;
        // color: ${props => props.theme === "light" ? "#333" : "#fff"};
        width: 75%;
        height: 75%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const CourseDescContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    h6 {
        font-size: 1rem;
        font-weight: 900;
        letter-spacing: 1px;
        color: ${props => props.theme === "light" ? "#333" : "#FAFAF9"};
    }
    p {
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: ${props => props.theme === "light" ? "#333" : "#EFEDE8"};
    }

`

const Course = ({ image, name, title, description }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <CourseContainer theme={ theme }>
            <CourseImageContainer theme={ theme }>
                <img src={image} slt={name} />
            </CourseImageContainer>
            <CourseDescContainer theme={ theme }>
                <h6>{title}</h6>
                <p>{description}</p>
            </CourseDescContainer>
        </CourseContainer>
    )
}

export default Course