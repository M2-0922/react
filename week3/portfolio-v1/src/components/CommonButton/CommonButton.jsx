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
	background-color: #323443;
	text-decoration: none;
	color: #c9c9c9;
`;

const ButtonIcon = styled.div`
	span {
		display: block;
		width: 14px;
		height: 2px;
		margin: 2px;
		background-color: #c4c4c4;
	}
`;

const ButtonTitle = styled.p`
	display: inline;
	padding-left: 20px;
	font-size: 14px;
`;

const CommonButton = () => {
	return (
		<Button>
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
