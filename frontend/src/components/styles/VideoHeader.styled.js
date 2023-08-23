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
  filter: blur(5px);
`;

export const TextContainer = styled.div`
	width: 60%;
	height: 300px;
	margin: auto;
	background: linear-gradient(to bottom right, rgba(96,81,15,.6) 0%, rgba(200,175,29,.8) 44%, rgba(92,79,7,.7) 87%);
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