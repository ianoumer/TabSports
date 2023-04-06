import { Container, Typography, Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Buttons from "./buttons";

const CareersSection = styled(Box)(({ theme }) => ({
	display: "inline-block",
	maxWidth: "100%",
	minWidth: "100%",
	width: "90vw",
	marginLeft: "auto",
	overflow: "hidden",
	":before": {
		content: '""',
		width: "100%",
		borderTop: "1px dashed #9CADCB",
		transform: "translateY(110px)",
		display: "block",
		position: "static",
		zIndex: "-1",
	},
	"> div": {
		width: "100%",
		padding: "3rem 0",
		color: "#1A2A57",
		paddingLeft: "24px",
		paddingRight: "24px",
		h2: {
			fontFamily: "Sofia Sans Condensed",
			fontWeight: "700",
			textTransform: "uppercase",
		},
		"p:first-of-type": {
			textTransform: "uppercase",
			backgroundColor: "white",
			display: "inline-block",
			marginBottom: "40px",
			paddingRight: "30px",
		},
		"p:last-of-type": {
			maxWidth: "500px",
		},
	},
	"> div:last-of-type": {
		width: "100%",
		padding: "0rem 0rem 10rem",
		position: "relative",
		overflow: "auto",
		"> div": {
			display: "flex",
			flexWrap: "no-wrap",
			alignContent: "flex-end",
			"> div": {
				height: "428px",
				backgroundColor: "#1A2A57",
				borderRadius: "20px",
				padding: "40px",
				width: "316px",
				margin: "0 15px",
				color: "white",
				position: "relative",
				" > div:last-of-type": {
					position: "absolute",
					bottom: "0",
					"> p": {
						marginBottom: "20px",
					},
					"> button": {
						marginBottom: "30px",
						color: "white",
						backgroundColor: "#1A2A57",
						"span:first-of-type": {
							backgroundColor: "#1A2A57",
						},
					},
					"> button:hover": {
						color: "#1A2A57",
						backgroundColor: "white",
						"span:first-of-type": {
							backgroundColor: "#1A2A57",
						},
					},
				},
				"p:first-of-type": {
					textTransform: "initial",
					backgroundColor: "transparent",
					display: "inline-block",
					marginBottom: "0px",
					paddingRight: "0px",
					":nth-of-type(odd)": {
						opacity: ".5",
					},
					":nth-of-type(odd) + p": {
						fontSize: "24px",
						fontFamily: "Sofia Sans Condensed",
						fontWeight: "700",
						lineHeight: "24px",
						textTransform: "uppercase",
						margin: "0",
					},
				},
			},
		},
	},
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexWrap: "wrap",
		maxWidth: "2560px",
		minWidth: "900px",
		"> div": {
			width: "30%",
			padding: "5rem 0 10rem",
			"> h2 ": {
				maxWidth: "0%",
			},
		},
		"> div:last-of-type": {
			width: "70%",
			padding: "10rem 0rem",
		},
	},
}));

function Careers() {
	return (
		<CareersSection>
			<div>
				<p>Join Us</p>
				<Typography variant='h2'>Careers</Typography>
				<p>
					There&apos;s so much more to TAB NZ than meets the eye, so why not
					scratch the surface and find out more. Are you ready to join our team?
				</p>
				<Buttons version='default' />
			</div>
			<Box sx={{ bg: "blue", display: "flex" }}>
				<div>
					<Card variant='outlined'>
						<div>
							<p>Job Posted</p>
							<p>Customer Service Representative </p>
						</div>
						<div>
							<p>Location:</p>
							<p>Auckland, New zealand</p>
						</div>
						<div>
							<p>Job posted 4 days ago</p>
							<Buttons version='default' />
						</div>
					</Card>
					<Card variant='outlined'>
						<div>
							<p>Job Posted</p>
							<p>Customer Service Representative </p>
						</div>
						<div>
							<p>Location:</p>
							<p>Auckland, New zealand</p>
						</div>
						<div>
							<p>Job posted 4 days ago</p>
							<Buttons version='filled' />
						</div>
					</Card>
					<Card variant='outlined'>
						<div>
							<p>Job Posted</p>
							<p>Customer Service Representative </p>
						</div>
						<div>
							<p>Location:</p>
							<p>Auckland, New zealand</p>
						</div>
						<div>
							<p>Job posted 4 days ago</p>
							<Buttons version='filled' />
						</div>
					</Card>
					<Card variant='outlined'>
						<div>
							<p>Job Posted</p>
							<p>Customer Service Representative </p>
						</div>
						<div>
							<p>Location:</p>
							<p>Auckland, New zealand</p>
						</div>
						<div>
							<p>Job posted 4 days ago</p>
							<Buttons version='filled' />
						</div>
					</Card>
					<Card variant='outlined'>
						<div>
							<p>Job Posted</p>
							<p>Customer Service Representative </p>
						</div>
						<div>
							<p>Location:</p>
							<p>Auckland, New zealand</p>
						</div>
						<div>
							<p>Job posted 4 days ago</p>
							<Buttons version='filled' />
						</div>
					</Card>
				</div>
			</Box>
		</CareersSection>
	);
}

export default Careers;

// .css-j5hzmw >div:last-of-type {
//     width: 70%;
//     padding: 10rem 3rem;
//     position: relative;
// }

// max-width: 2560px;
// min-width: 768px;
// width: 90vw;
// padding-left: 24px;
// margin-left: auto;
// overflow: hidden;
// }
