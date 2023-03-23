import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
	display: flex;
	align-items: center;
	width: 165px;
	height: 45px;
	padding: 15px 17px 15px 23px;
	border-radius: 12px;
	border: solid 1px #323443;
	background-color: ${(props) => (props.theme === "light" ? "#fff" : "#323443")};
	text-decoration: none;
	color: ${(props) => (props.theme === "light" ? "#323443" : "#c9c9c9")};

	&:hover {
		opacity: 0.8;
	}
`;

const ButtonIcon = styled.div`
	span {
		display: block;
		width: 14px;
		height: 2px;
		margin: 2px;
		background-color: ${(props) => (props.theme === "light" ? "#323443" : "#c4c4c4")};
	}
`;

const ButtonTitle = styled.p`
	padding-left: 20px;
	font-size: 14px;
`;

const CommonButton = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Button to="/" theme={theme}>
			<ButtonIcon>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</ButtonIcon>
			<ButtonTitle>See More</ButtonTitle>
		</Button>
	);
};

export default CommonButton;
