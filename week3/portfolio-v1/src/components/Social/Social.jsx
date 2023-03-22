import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import styled from "styled-components";

const SocialContainer = styled.div`
	width: 197px;
`;

const Title = styled.h2`
	font-size: 28px;
`;

const SocialIconContainer = styled.div`
	display: flex;
	justify-content: left;
	gap: 1rem;
	margin-top: 10px;
	svg {
		font-size: 26px;
	}
`;

const Social = () => {
	return (
		<SocialContainer>
			<Title>Lets connect</Title>
			<SocialIconContainer>
				<AiOutlineInstagram />
				<AiOutlineTwitter />
				<AiFillFacebook />
			</SocialIconContainer>
		</SocialContainer>
	);
};

export default Social;
