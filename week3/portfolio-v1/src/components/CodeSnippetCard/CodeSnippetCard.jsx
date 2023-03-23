import { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import starIcon from '../../assets/IconReact.png';

const CardContainer = styled.div`
    width: 556px;
    height: 282px;
    padding 2rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme === "light" ? "#fff" : "#323443" };
    border: ${props => props.theme === "light" ? "2px solid #323443" : "none" };
    border-radius: 20px;
`;

const CardTop = styled.div`
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    h4 {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
    }
    p {
        letter-spacing: 0.5px;
    }
`;

const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CardBottomIcons = styled.div`
    display: flex;
    gap: 1rem;
    div {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: ${props => props.theme === "light" ? "#333" : "#fff" };
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
    
const CardBottomStars = styled.div`
    display: flex;
    align-items: center;
`;

const CodeSnippetCard = ({ title, description, icons, count }) => {
    const { theme } = useContext(ThemeContext);

    return (
    <CardContainer theme={ theme }>
        <CardTop theme={ theme }>
            <h4>{title}</h4>
            <p>{description}</p>
        </CardTop>
        <CardBottom>
            <CardBottomIcons theme={ theme }>
                {icons.map((icon, index) => 
                    <div key={index}>
                        <img src={icon} alt="icon"/>
                    </div>
                )}
            </CardBottomIcons>
            <CardBottomStars>
                <div>
                    <img src={starIcon} alt="star"/>
                </div>
                <p>{count} stars</p>
            </CardBottomStars>
        </CardBottom>
    </CardContainer>
  )
}

export default CodeSnippetCard