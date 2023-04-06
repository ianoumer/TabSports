import { Box, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Buttons from "./buttons";
import Image from "next/image";

const NewsSection = styled(Box)(({ theme }) => ({
	backgroundColor: "#1A2A57",
	padding: "12rem 0 6rem",
	":before": {
		content: '""',
		width: "100%",
		borderTop: "1px dashed #9CADCB",
		transform: "translateY(-70px)",
		position: "absolute",
	},
	"> div": {
		display: "flex",
		flexWrap: "wrap",
		"> div": {
			width: "100%",
			margin: "33px 0",
			position: "relative",
			h2: {
				textAlign: "center",
			},
			":nth-of-type(odd)": {
				paddingRight: "8px",
			},
			":nth-of-type(even)": {
				paddingLeft: "8px",
			},
			"> button": {
				position: "absolute",
				margin: "0 auto",
				right: "0",
				bottom: "-30px",
				left: "0",
			},
		},
	},
	[theme.breakpoints.up("sm")]: {
		h2: { textAlign: "left" },
		"> div": {
			"> div": {
				width: "50%",
				h2: {
					textAlign: "left",
				},
				"> button": {
					margin: "0",
					bottom: "0px",
					left: "inherit",
				},
			},
		},
	},
}));

const NewsCard = styled(Box)(({ theme }) => ({
	img: {
		width: "auto",
		height: "100%",
	},
}));
type articlesPost = {
	title: string;
	newsArticles: {
		published: string;
		thumbnail: {
			sourceUrl: string;
			altText: string;
		};
	};
};

function News(props: any) {
	const articles: articlesPost[] = props.articles.newsArticles.nodes;

	return (
		<NewsSection>
			<Container>
				<div>
					<Typography
						sx={{
							textTransform: "uppercase",
							color: "white",
							fontFamily: "Sofia Sans Condensed",
							fontWeight: "700",
							lineHeight: "50.1px",
							letterSpacing: "-1px",
						}}
						variant='h2'
					>
						Catch up on the latest news from TAB NZ
					</Typography>
				</div>
				<div>
					<Buttons version='default' />
				</div>

				{articles.map((item) => {
					return (
						<NewsCard key={item.title}>
							<Link
								href='#'
								sx={{
									textDecoration: "none",
								}}
							>
								<Box
									sx={{
										height: "330px",
										overflow: "hidden",
										borderRadius: "20px",
										display: "flex",
										alignItems: "center",
									}}
								>
									<Image
										src={item.newsArticles.thumbnail.sourceUrl}
										alt='About'
										width={1070}
										height={1067}
									></Image>
								</Box>
								<Typography
									sx={{
										color: "white",
										pb: "10px",
										pt: "25px",
									}}
									variant='body1'
								>
									{item.newsArticles.published}
								</Typography>
								<Typography
									sx={{
										textTransform: "uppercase",
										color: "white",
										fontFamily: "Sofia Sans Condensed",
										fontWeight: "700",
										lineHeight: "20.04px",
									}}
									variant='h5'
								>
									{item.title}
								</Typography>
							</Link>
						</NewsCard>
					);
				})}
				{/* <NewsCard>
					<Link
						href='#'
						sx={{
							textDecoration: "none",
						}}
					>
						<Box
							sx={{
								height: "330px",
								overflow: "hidden",
								borderRadius: "20px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Image
								src='/img2.jpg'
								alt='About'
								width={1070}
								height={1067}
							></Image>
						</Box>
						<Typography
							sx={{
								color: "white",
								pb: "10px",
								pt: "25px",
							}}
							variant='body1'
						>
							8 March 2023
						</Typography>
						<Typography
							sx={{
								textTransform: "uppercase",
								color: "white",
								fontFamily: "Sofia Sans Condensed",
								fontWeight: "700",
								lineHeight: "20.04px",
							}}
							variant='h5'
						>
							TAB NZ boosting odds of success for women&apos;s sport on
							International Women’s Day
						</Typography>
					</Link>
				</NewsCard> */}
			</Container>
		</NewsSection>
	);
}

export default News;
