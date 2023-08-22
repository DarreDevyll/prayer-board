import { HeaderContainer, 
	VideoContainer, 
	Video, 
	TextContainer,
	Text } from "./styles/VideoHeader.styled";

const text = 'The goal of this page is to provide a space for Christians from \
any background to come together in prayer for the needs and the city of Dekalb';

export default function VideoHeader({video: {file, type}}) {
	return (
		<>
		<HeaderContainer>
			<VideoContainer>
				<Video autoPlay muted loop src={file} type={type} />
			</VideoContainer>
			<TextContainer>
				<Text>{text}</Text>
			</TextContainer>
		</HeaderContainer>
		</>
	)
}