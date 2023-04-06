import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Buttons from "./buttons";
import { styled } from "@mui/material/styles";

const HeroSection = styled(Box)(({ theme, property }) => ({
	backgroundImage: `linear-gradient(#00000000, #202020ba), url(${property})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	color: "#F5F5F5",
	minHeight: "700px",
	maxHeight: "768px",
	paddingTop: "180px",
	paddingBottom: "30px",
	height: "100vh",
	[theme.breakpoints.up("md")]: {
		paddingTop: "280px",
		paddingBottom: "50px",
	},
}));

const HeroContainer = styled(Container)(({ theme }) => ({
	position: "relative",
	button: {
		position: "absolute",
		right: "4rem",
		bottom: "-6rem",
		cursor: "pointer",
	},
	"a:nth-of-type(2)": {
		transform: "translate(0px, 0px)",
	},
	a: {
		color: "white",
		textUnderlinePosition: "from-font",
		textDecorationThickness: "1px",
		display: "inline-block",
		transform: "translate(0px, 0px)",
		transition: "all .5s ease-in-out",

		img: {
			display: "none",
			transition: "all .5s ease-in-out",
			opacity: "0",
			transform: "translate(0px, 0px)",
		},
	},
	"a:hover": {
		color: "#9CADCB",
		transform: "translate(0px, 0px)",
		img: {
			opacity: "1",
			transform: "translate(0px, 0px)",
		},
	},
	[theme.breakpoints.up("sm")]: {
		h1: {
			letterSpacing: "-2px",
		},
		"a:nth-of-type(2)": {
			transform: "translate(-110px, 0px)",
		},
		a: {
			display: "inline-block",
			transform: "translate(-60px, 0px)",

			img: {
				display: "inline-block",
				transform: "translate(80px, 0px)",
			},
		},
		"a:hover": {
			transform: "translate(0px, 0px)",
			img: {
				transform: "translate(0px, 0px)",
			},
		},
	},
	[theme.breakpoints.up("md")]: {
		"a:nth-of-type(2)": {
			transform: "translate(-120px, 0px)",
		},
		a: {
			display: "inline-block",
			transform: "translate(-70px, 0px)",

			img: {
				display: "inline-block",
				transform: "translate(80px, 0px)",
			},
		},
		"a:hover": {
			transform: "translate(0px, 0px)",
			img: {
				transform: "translate(0px, 0px)",
			},
		},
	},
}));

const HeroImage = styled(Image)(({ theme }) => ({
	width: "39.38px",
	height: "45px",
	borderRadius: "15%",
	margin: "0 10px",
	[theme.breakpoints.up("md")]: {
		width: "52.5px",
		height: "60px",
	},
}));

const HeroHeadline = styled(Typography)(({ theme }) => ({
	fontFamily: "Sofia Sans Condensed",
	fontWeight: "bold",
	letterSpacing: "-0.025px",
	textTransform: "uppercase",
	lineHeight: "83.5%",
	[theme.breakpoints.up("md")]: {},
	[theme.breakpoints.up("lg")]: {},
	[theme.breakpoints.up("xl")]: {},
}));

function Hero(props: { heroImage: { sourceUrl: string; title: string } }) {
	return (
		<HeroSection property={props.heroImage.sourceUrl}>
			<HeroContainer>
				<HeroHeadline variant='h1'>
					FUELLING THE FUTURE
					<br />
					OF&nbsp;
					<Link href='/'>
						<HeroImage
							src='/Img1.jpg'
							alt='Lacrose'
							width={287}
							height={328}
						></HeroImage>
						SPORT,
					</Link>
					<Link href='/'>
						<HeroImage
							src='/Img6.jpg'
							alt='Lacrose'
							width={287}
							height={328}
						></HeroImage>
						RACING
					</Link>{" "}
					<br />
					AND{" "}
					<Link href='/'>
						<HeroImage
							src='/Img7.jpg'
							alt='Lacrose'
							width={287}
							height={328}
						></HeroImage>
						COMMUNITIES
					</Link>{" "}
					<br />
					IN NEW ZEALAND
				</HeroHeadline>
				<button
					style={{
						transform: "rotate(90deg) translate(-10px, 0px);",
						backgroundColor: "#1A2A57",
						borderRadius: "100%",
						width: "50px",
						height: "50px",
						left: "30px",
						border: "1px solid white",
					}}
					onClick={() => {
						const myElement = document.getElementById(
							"about"
						) as HTMLFormElement;
						myElement.scrollIntoView({ behavior: "smooth" });
					}}
				>
					<svg
						width='15'
						height='15'
						viewBox='0 0 11 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.0642 4.00002C10.0642 4.0575 10.0549 4.11139 10.0364 4.16169C10.0181 4.21199 9.98689 4.25869 9.94271 4.30181L7.0268 7.14727C6.93844 7.2335 6.83344 7.27661 6.7118 7.27661C6.59045 7.27661 6.48559 7.2335 6.39723 7.14727C6.30887 7.06105 6.26469 6.96045 6.26469 6.84548C6.26469 6.73051 6.30887 6.62991 6.39723 6.54369L8.56207 4.43115L0.963046 4.43115C0.837868 4.43115 0.734781 4.38976 0.653784 4.30698C0.572786 4.22449 0.532288 4.12217 0.532288 4.00002C0.532288 3.87786 0.574554 3.7754 0.659085 3.69262C0.743912 3.61013 0.848914 3.56888 0.974091 3.56888L8.56207 3.56888L6.39723 1.45634C6.30887 1.37012 6.26469 1.26952 6.26469 1.15455C6.26469 1.03958 6.30887 0.938986 6.39723 0.852759C6.48559 0.766533 6.59045 0.72342 6.7118 0.72342C6.83344 0.72342 6.93844 0.766533 7.0268 0.852759L9.94271 3.69822C9.98689 3.74134 10.0181 3.78804 10.0364 3.83834C10.0549 3.88864 10.0642 3.94253 10.0642 4.00002Z'
							fill='white'
						/>
					</svg>
				</button>
				<Buttons version='default' />
			</HeroContainer>
		</HeroSection>
	);
}

export default Hero;
