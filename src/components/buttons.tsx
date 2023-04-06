import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const LearnMoreButton = styled(Button)(() => ({
	fontSize: "16px",
	fontFamily: "Sofia Sans Condensed",
	fontWeight: "700",
	color: "#1A2A57",
	backgroundColor: "white",
	minWidth: "221px",
	maxWidth: "221px",
	borderRadius: "100vw",
	padding: "16px 2rem",
	border: "3px solid #9CADCB",
	boxShadow: "none",
	":hover": {
		backgroundColor: "#1A2A57",
		color: "white",
	},
	"span:first-of-type": {
		backgroundColor: "#1A2A57",
		color: "white",
		width: "28px",
		height: "28px",
		marginLeft: "2rem",
		borderRadius: "100vw",
		transform: "translate(25px, 0px)",
	},
	"span:first-of-type > svg": {
		margin: "auto",
	},
}));
declare namespace JSX {
	interface ElementClass {
		props: any;
	}
}
function Buttons(props: any) {
	return (
		<LearnMoreButton
			variant='contained'
			endIcon={
				<svg
					width='15'
					height='15'
					viewBox='0 0 11 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10.0642 4.00002C10.0642 4.0575 10.0549 4.11139 10.0364 4.16169C10.0181 4.21199 9.98689 4.25869 9.94271 4.30181L7.0268 7.14727C6.93844 7.2335 6.83344 7.27661 6.7118 7.27661C6.59045 7.27661 6.48559 7.2335 6.39723 7.14727C6.30887 7.06105 6.26469 6.96045 6.26469 6.84548C6.26469 6.73051 6.30887 6.62991 6.39723 6.54369L8.56207 4.43115L0.963046 4.43115C0.837868 4.43115 0.734781 4.38976 0.653784 4.30698C0.572786 4.22449 0.532288 4.12217 0.532288 4.00002C0.532288 3.87786 0.574554 3.7754 0.659085 3.69262C0.743912 3.61013 0.848914 3.56888 0.974091 3.56888L8.56207 3.56888L6.39723 1.45634C6.30887 1.37012 6.26469 1.26952 6.26469 1.15455C6.26469 1.03958 6.30887 0.938986 6.39723 0.852759C6.48559 0.766533 6.59045 0.72342 6.7118 0.72342C6.83344 0.72342 6.93844 0.766533 7.0268 0.852759L9.94271 3.69822C9.98689 3.74134 10.0181 3.78804 10.0364 3.83834C10.0549 3.88864 10.0642 3.94253 10.0642 4.00002Z'
						fill={props == "filled" ? "#1A2A57" : "white"}
					/>
				</svg>
			}
		>
			Learn More
		</LearnMoreButton>
	);
}

export default Buttons;
