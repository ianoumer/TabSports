import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Buttons from "./buttons";

const StackSection = styled(Container)(({ theme }) => ({
	fontFamily: "Sofia Sans Condensed",
	fontWeight: "700",
	textTransform: "uppercase",
	backgroundColor: "#81828E",
	color: "white",
	borderRadius: "20px ",
	height: "600px",
	position: "relative",
	transform: "translateY(37px)",
	"> div": {
		padding: "80px 20px",
	},
	"> div > div:last-of-type": {
		display: "none",
		backgroundColor: "white",
		borderRadius: "20px ",
		width: "300px",
		height: "400px",
		position: "absolute",
		bottom: "100px",
		right: "100px",
	},
	p: {
		maxWidth: "100%",
		textAlign: "center",
		"+ div": {
			position: "relative",
			textAlign: "center",
			display: "block",
			marginTop: "30px",
			h3: {
				fontSize: "70px",
				lineHeight: "70px",
				margin: "0",
				"+ p": {
					display: "none",
					fontSize: "24px",
					lineHeight: "24px",
					margin: "0",
					position: "absolute",
					right: "0",
					top: "35px",
				},
			},
			h2: {
				fontSize: "100px",
				lineHeight: "80px",
				margin: "0",
			},
		},
	},
	button: {
		maxWidth: "600px",
		position: "absolute",
		bottom: "100px",
		right: "100px",
	},
	[theme.breakpoints.up("md")]: {
		"> div": {
			padding: "80px 60px",
		},
		p: {
			maxWidth: "60%",
			textAlign: "left",
			"+ div": {
				h3: {
					fontSize: "70px",
					lineHeight: "70px",
				},
				h2: {
					fontSize: "180px",
					lineHeight: "140px",
					margin: "0",
				},
			},
		},
	},
	[theme.breakpoints.up("lg")]: {
		"> div > div:last-of-type": {
			display: "inline-block",
		},
		p: {
			maxWidth: "60%",
			textAlign: "left",
			"+ div": {
				textAlign: "left",
				display: "inline-block",
				h3: {
					"+ p": {
						display: "inline-block",
					},
				},
			},
		},
	},
	[theme.breakpoints.up("xl")]: {},
}));

function Stack() {
	return (
		<Box sx={{ py: "100px" }}>
			<Container
				sx={{
					backgroundColor: "#E7E7E7",
					position: "absolute",
					left: "0",
					right: "0",
					borderRadius: "20px ",
					height: "600px",
					transform: "translateY(-74px)",
				}}
			></Container>
			<Container
				sx={{
					backgroundColor: "#C0C0C5",
					position: "absolute",
					left: "0",
					right: "0",
					borderRadius: "20px ",
					height: "600px",
					transform: "translateY(-37px)",
				}}
			></Container>
			<Container
				sx={{
					backgroundColor: "#9C9DAB",
					position: "absolute",
					left: "0",
					right: "0",
					borderRadius: "20px ",
					height: "600px",
					transform: "translateY(0px)",
				}}
			></Container>
			<StackSection>
				<Box>
					<p>
						TAB NZ takes our responsibility to minimise harm seriously. Whether
						it’s through our Safer Betting tools, our customer support, or
						proactive engagement, we go beyond the minimum standards to keep
						Kiwis safe when placing a bet.
					</p>
					<div>
						<h3>$175 MILLION</h3>
						<p>*2021/22 season</p>
						<h2>Racing</h2>
					</div>
					<div></div>
				</Box>
			</StackSection>
		</Box>
	);
}

export default Stack;
