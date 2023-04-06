import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const CTASection = styled(Box)(({ theme }) => ({
	fontFamily: "Sofia Sans Condensed",
	fontWeight: "700",
	textAlign: "center",
	textTransform: "uppercase",
	color: "#1A2A57",
	padding: "8rem 1rem 25rem",
	backgroundPosition: "bottom",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundImage: "url('/Img5.jpg')",
	[theme.breakpoints.up("md")]: {
		padding: "15rem 2rem 30rem",
		backgroundSize: "contain",
		backgroundImage:
			"linear-gradient(rgb(255, 255, 255) 0%, rgba(225, 227, 224) 38%, rgba(225, 227, 224, .5) 50%, rgba(225, 227,224, 0) 53%),url(/Img5.jpg)",
	},
	[theme.breakpoints.up("lg")]: {
		padding: "15rem 5rem 40rem",
	},
	[theme.breakpoints.up("xl")]: {
		padding: "15rem 3rem 52rem",
		backgroundImage:
			"linear-gradient(rgb(255, 255, 255) 0%, rgba(225, 227, 224) 36%, rgba(225, 227, 224, .5) 41%, rgba(225, 227,224, 0) 55%),url(/Img5.jpg)",
	},
	[theme.breakpoints.up("xl")]: {
		backgroundSize: "cover",
		backgroundPosition: "top",
	},
}));

const CTAHeading = styled("h2")(({ theme }) => ({
	fontSize: "4rem",
	fontWeight: "Bold",
	lineHeight: "4rem",
	margin: "0 auto 1rem",
	maxWidth: "1440px",
	[theme.breakpoints.up("md")]: {
		fontSize: "8rem",
		lineHeight: "7rem",
		margin: "0 auto 2rem",
	},
	[theme.breakpoints.up("lg")]: {
		fontSize: "10rem",
		lineHeight: "9rem",
		margin: "0 auto 5rem",
	},
	[theme.breakpoints.up("xl")]: {
		fontSize: "14rem",
		lineHeight: "13rem",
		margin: "0 auto 6rem",
	},
}));

const CTAImage = styled(Image)(({ theme }) => ({
	width: "40px",
	height: "45.59px",
	borderRadius: "15%",
	margin: "0 20px",
	[theme.breakpoints.up("md")]: {
		width: "82px",
		height: "93.47px",
	},
	[theme.breakpoints.up("lg")]: {
		width: "100px",
		height: "113.99px",
	},
	[theme.breakpoints.up("xl")]: {
		width: "143px",
		height: "163.32px",
	},
}));

const CTASubtitle = styled("h3")(() => ({
	fontSize: "24px",
}));

function CTA() {
	return (
		<CTASection>
			<CTAHeading>
				Fuelling
				<CTAImage
					src='/Img6.jpg'
					alt='Football'
					width={287}
					height={327}
				></CTAImage>
				the
				<CTAImage
					src='/Img7.jpg'
					alt='Lacrose'
					width={287}
					height={327}
				></CTAImage>
				Future
			</CTAHeading>
			<CTASubtitle>
				of sport, racing and communities in New Zealand.
			</CTASubtitle>
		</CTASection>
	);
}

export default CTA;
