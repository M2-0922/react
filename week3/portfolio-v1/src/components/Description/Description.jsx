import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "styled-components";

const DescriptionContainer = styled.div`
	width: 500px;
`;

const Title = styled.h2`
	font-size: 28px;
	letter-spacing: 1px;
	color: ${(props) => (props.theme === "light" ? "rgb(51, 51, 51)" : "#FBFBFB")};
`;

const DescriptionContent = styled.p`
	font-size: 18px;
	margin-top: 10px;
	color: ${(props) => (props.theme === "light" ? "rgb(51, 51, 51)" : "#d6d6d6")};
`;

const Blue = styled.span`
	color: #4ca9ff;
`;

const LightBlue = styled.span`
	color: #62d9ff;
`;

const Green = styled.span`
	color: #80ffa3;
`;

const Description = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<DescriptionContainer>
			<Title theme={theme}>Biography</Title>
			<DescriptionContent theme={theme}>
				Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on <Blue>React</Blue>,
				<LightBlue>UX Research</LightBlue> and
				<Green>Agile</Green>.
			</DescriptionContent>
		</DescriptionContainer>
	);
};

export default Description;
