import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import styled from "styled-components";
import AvatarCard from "../AvatarCard/AvatarCard";
import Description from "../Description/Description";

const CustomTitle = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 56px;
	line-height: 72px;

	letter-spacing: 1px;

	background: ${(props) =>
		props.theme === "light"
			? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%);"
			: "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	width: 80%;
`;

const Hero = ({ content }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<CustomTitle theme={theme}>{content}</CustomTitle>
			<AvatarCard />
			<Description />
		</>
	);
};

export default Hero;
