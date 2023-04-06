import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const pages = [
	"About Us",
	"Social Responsibility",
	"Careers",
	"News",
	"Grants",
	"Reports",
	"Contact Us",
];

const FooterSection = styled(Box)(({ theme }) => ({
	display: "block",
	[theme.breakpoints.up("md")]: {
		display: "flex",
		flexWrap: "wrap",
	},
}));

const FooterColumn = styled(Box)(({ theme }) => ({
	backgroundColor: "white",
	width: "100%",
	overflow: "hidden",
	a: {
		color: "white",
		textDecoration: "none",
		transition: "background-color .4s ease-in-out",
		":hover": {
			opacity: "0.5",
		},
	},
	":first-of-type a": {
		backgroundColor: "rgb(26, 42, 87)",
		display: "inline-block",
		padding: "65.176px 22px",
		borderRadius: "0 0 20px 20px",
		img: {
			width: "139px",
			height: "65.16px",
			transform: "translate(0px, 4px)",
		},
	},
	":first-of-type p": {
		padding: "20px 0",
		color: "#1A2A57",
		maxWidth: "411px",
	},
	":last-of-type": {
		padding: "60px 0px",
		backgroundColor: "#1A2A57",
		div: {
			display: "flex",
			flexWrap: "wrap",
			color: "white",
		},
	},
	":last-of-type > div > ul": {
		width: "40%",
		listStyle: "none",
		":nth-of-type(2) > li:nth-of-type(3)": {
			paddingTop: "50px",
		},
		":nth-of-type(-n+2)": {
			fontFamily: "Sofia Sans Condensed",
			fontWeight: "bold",
			textTransform: "uppercase",
		},
		"li > ul": {
			display: "flex",
			flexWrap: "wrap",
			listStyle: "none",
			padding: "10px 0",
			maxWidth: "60%",
			li: {
				width: "33.33%",
			},
		},
	},
	":last-of-type > div > div": {
		width: "20%",
		display: "block",
		"> p": {
			fontFamily: "Sofia Sans Condensed",
			fontWeight: "bold",
			textTransform: "uppercase",
			transform: "translateX(-10px)",
		},
	},
	[theme.breakpoints.up("md")]: {
		width: "50%",
		":last-of-type": {
			padding: "60px 30px",
		},
	},
}));

function Footer(props: { Logo: { sourceUrl: string; title: string } }) {
	return (
		<FooterSection>
			<FooterColumn>
				<Container style={{ padding: "0 60px" }}>
					<Link href='/'>
						<Image
							src={props.Logo.sourceUrl}
							alt={props.Logo.title}
							width='278'
							height='131'
						/>
					</Link>
					<p>
						TAB NZ is deeply ingrained in New Zealand&apos;s culture, and, by
						betting with TAB NZ on racing or sport, you contribute to fueling
						the future of racing codes and sporting organisations across New
						Zealand.
					</p>
				</Container>
			</FooterColumn>
			<FooterColumn>
				<div>
					<ul>
						{pages.map((page) => (
							<li key={page}>
								<Link href='#'>{page}</Link>
							</li>
						))}
					</ul>
					<ul>
						<li>
							<Link href='#'>Privacy Policy</Link>
						</li>
						<li>
							<Link href='#'>Terms & Conditions</Link>
						</li>
						<li>
							Socials
							<ul>
								<li>
									<Link href='#'>
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M18.896 0H1.104C0.494 0 0 0.494 0 1.104V18.896C0 19.506 0.494 20 1.104 20H10.682V12.255H8.076V9.237H10.682V7.01C10.682 4.426 12.26 3.02 14.565 3.02C15.669 3.02 16.617 3.102 16.894 3.139V5.839H15.296C14.042 5.839 13.8 6.435 13.8 7.309V9.236H16.789L16.399 12.254H13.799V20H18.896C19.506 20 20 19.506 20 18.896V1.104C20 0.494 19.506 0 18.896 0Z'
												fill='white'
											/>
										</svg>
									</Link>
								</li>
								<li>
									<Link href='#'>
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M19.2 0H0.8C0.3575 0 0 0.3575 0 0.8V19.2C0 19.6425 0.3575 20 0.8 20H19.2C19.6425 20 20 19.6425 20 19.2V0.8C20 0.3575 19.6425 0 19.2 0ZM15.3825 7.2425C15.39 7.36 15.39 7.4825 15.39 7.6025C15.39 11.2725 12.595 15.5 7.4875 15.5C5.9125 15.5 4.4525 15.0425 3.2225 14.255C3.4475 14.28 3.6625 14.29 3.8925 14.29C5.1925 14.29 6.3875 13.85 7.34 13.105C6.12 13.08 5.095 12.28 4.745 11.18C5.1725 11.2425 5.5575 11.2425 5.9975 11.13C5.36932 11.0024 4.80469 10.6612 4.39954 10.1645C3.99439 9.66771 3.77372 9.04602 3.775 8.405V8.37C4.1425 8.5775 4.575 8.705 5.0275 8.7225C4.64711 8.46899 4.33514 8.12553 4.11928 7.72257C3.90341 7.31962 3.79031 6.86963 3.79 6.4125C3.79 5.895 3.925 5.4225 4.1675 5.0125C4.86476 5.87084 5.73483 6.57286 6.72116 7.07291C7.7075 7.57297 8.78802 7.85988 9.8925 7.915C9.5 6.0275 10.91 4.5 12.605 4.5C13.405 4.5 14.125 4.835 14.6325 5.375C15.26 5.2575 15.86 5.0225 16.395 4.7075C16.1875 5.35 15.7525 5.8925 15.175 6.235C15.735 6.175 16.275 6.02 16.775 5.8025C16.3975 6.3575 15.925 6.85 15.3825 7.2425Z'
												fill='white'
											/>
										</svg>
									</Link>
								</li>
								<li>
									<Link href='#'>
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M1.53846 0C1.13044 0 0.739122 0.162087 0.450605 0.450605C0.162087 0.739122 0 1.13044 0 1.53846V18.4615C0 18.8696 0.162087 19.2609 0.450605 19.5494C0.739122 19.8379 1.13044 20 1.53846 20H18.4615C18.8696 20 19.2609 19.8379 19.5494 19.5494C19.8379 19.2609 20 18.8696 20 18.4615V1.53846C20 1.13044 19.8379 0.739122 19.5494 0.450605C19.2609 0.162087 18.8696 0 18.4615 0H1.53846ZM3.15385 7.69231H6.07692V16.9231H3.15385V7.69231ZM6.26923 4.62308C6.26923 5.0617 6.09499 5.48237 5.78483 5.79252C5.47467 6.10268 5.05401 6.27692 4.61538 6.27692C4.17676 6.27692 3.7561 6.10268 3.44594 5.79252C3.13578 5.48237 2.96154 5.0617 2.96154 4.62308C2.96154 4.18445 3.13578 3.76379 3.44594 3.45363C3.7561 3.14347 4.17676 2.96923 4.61538 2.96923C5.05401 2.96923 5.47467 3.14347 5.78483 3.45363C6.09499 3.76379 6.26923 4.18445 6.26923 4.62308ZM16.9231 11.3185C16.9231 8.54154 15.1277 7.46154 13.3446 7.46154C12.7619 7.43323 12.1817 7.55563 11.66 7.81692C11.2646 8.01692 10.8508 8.46923 10.5308 9.26H10.4492V7.69231H7.69231V16.9308H10.6246V12.0154C10.5831 11.5123 10.7431 10.8615 11.0723 10.4754C11.4031 10.0877 11.8723 9.99539 12.2308 9.94923H12.3431C13.2754 9.94923 13.9677 10.5262 13.9677 11.98V16.9292H16.9L16.9231 11.3185Z'
												fill='white'
											/>
										</svg>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div>
						<button
							style={{
								transform: "rotate(270deg)",
								backgroundColor: "white",
								borderRadius: "100%",
								width: "50px",
								height: "50px",
								border: "1px solid white",
							}}
							onClick={() =>
								window.scrollTo({
									top: 100,
									left: 100,
									behavior: "smooth",
								})
							}
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
									fill='#1A2A57'
								/>
							</svg>
						</button>
						<p>Back to Top</p>
					</div>
					<ul>
						<li>© 2023 - TAB New Zealand</li>
					</ul>
					<ul>
						<li>Created by The Web Guys</li>
					</ul>
				</div>
			</FooterColumn>
		</FooterSection>
	);
}

export default Footer;
