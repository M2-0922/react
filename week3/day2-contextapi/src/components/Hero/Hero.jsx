import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "styled-components";
import PencilCaseIcon from "../../assets/pencil-case.png"
const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;


    h1{
        margin: 12px 0;
    }
    p{
        margin: 6px 0;
    }
    button {
        margin: 6px 0;
    }
    div{
        &:last-child{
            text-align:center;
        }
        img{
            width: 100%;
            height: 100%;
            max-width: 300px;
        }
    }
`;

const CustomButton = styled.button`
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333"};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

const Hero = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <HeroContainer >
            <div>
                <h1>UseContext and Router</h1>
                <p>Aliquip ut deserunt enim consequat. Aliquip ad nostrud qui laboris excepteur exercitation cillum veniam nulla veniam magna officia ullamco. Ipsum nisi aute culpa pariatur aliqua duis et id. Aliqua non eu sint anim sint nulla.</p>
                <CustomButton theme={theme}>Discover</CustomButton>
            </div>
            <div>
                <img src={PencilCaseIcon} alt="Hello" />
            </div>
        </HeroContainer>
    );
}

export default Hero;