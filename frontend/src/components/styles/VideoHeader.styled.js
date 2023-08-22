import styled from "styled-components";

export const HeaderContainer = styled.div`

`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 600px;
	overflow: hidden;
`;

export const Video = styled.video`
  margin: auto;
	width: 100%;
	height: auto;
`;

export const TextContainer = styled.div`
	width: 60%;
	height: 300px;
	margin: auto;
	background: rgba(128, 130, 45, .7);
	position: fixed;
	top: 200px;
	margin-left: 20%;
	margin-right: 20%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
`;

export const Text = styled.div`
	max-width: 60%;
	font-size: 2rem;
	font-family: 'Roboto Slab', serif;
`;