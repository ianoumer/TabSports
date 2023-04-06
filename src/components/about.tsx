import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Buttons from "./buttons";
import { useRef } from "react";

const AboutSection = styled(Container)(({ theme }) => ({
	display: "inline-block",
	"> div": {
		width: "100%",
		padding: "3rem 0",
		color: "#1A2A57",
		":before": {
			content: '""',
			width: "100%",
			borderTop: "1px dashed #9CADCB",
			transform: "translateY(-30px)",
		},
		"> div": {
			width: "100%",
			margin: "auto",
			maxWidth: "535px",
			maxHeight: "535px",
			overflow: "hidden",
			backgroundColor: "#1A2A57",
			borderRadius: "20px",
			backgroundImage: "url('/img2.jpg')",
			backgroundSize: "contain",
			backgroundPosition: "left",
			backgroundBlendMode: "soft-light",
			backgroundAttachment: "fixed",
			backgroundRepeat: "repeat-y",
			"> img": {
				display: "block",
				width: "100%",
				height: "auto",
				margin: "0 auto",
				borderRadius: "20px",
				transform: "scale(.44)",
			},
		},
		h2: {
			fontFamily: "Sofia Sans Condensed",
			fontWeight: "700",
			textTransform: "uppercase",
		},
		p: {
			marginBottom: "40px",
		},
	},
	[theme.breakpoints.up("sm")]: {
		display: "flex",
		flexWrap: "wrap",
		"> div": {
			width: "50%",
			padding: "10rem 0",
		},
		"> div:last-of-type": {
			padding: "10rem 3rem",
			display: "flex",
			flexWrap: "wrap",
			alignContent: "flex-end",
		},
	},
}));

function About() {
	const about = useRef<null | HTMLElement>(null);

	return (
		<AboutSection id={"about"}>
			<div>
				<div>
					<Image src='/img2.jpg' alt='About' width={1070} height={1067}></Image>
				</div>
			</div>
			<div>
				<Typography variant='h2'>About us</Typography>
				<p>
					TAB NZ is deeply ingrained in New Zealand&apos;s culture. As New
					Zealand’s sole betting agency, every dollar bet with TAB NZ
					contributes to fuelling the future of racing and sporting
					organisations across New Zealand.
				</p>
				<Buttons version='default' />
			</div>
		</AboutSection>
	);
}

export default About;
