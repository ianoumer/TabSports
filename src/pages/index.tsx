import Head from "next/head";
import { GetStaticProps } from "next";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Stack from "@/components/stack";
import Careers from "@/components/careers";
import News from "@/components/news";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { gql } from "@apollo/client";
import { client } from "../../data/client";

export default function Home(props: Post) {
	return (
		<>
			<Head>
				<title>Tab: Future of Racing and Sporting</title>
				<meta
					name='description'
					content="TAB NZ is deeply ingrained in New Zealand's culture. As New Zealand's sole betting agency, every dollar bet with TAB NZ contributes to fuelling the future of racing and sporting organisations across New Zealand."
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar
				Logo={{
					sourceUrl: props.data.page.homepagehero.logo.sourceUrl,
					title: props.data.page.homepagehero.logo.title,
				}}
			/>
			<Hero
				heroImage={{
					sourceUrl: props.data.page.homepagehero.heroImage.sourceUrl,
					title: props.data.page.homepagehero.heroImage.title,
				}}
			/>
			<About />
			<Stack />
			<Careers />
			<News
				articles={{
					newsArticles: props.data.posts,
				}}
			/>
			<CTA />
			<Footer
				Logo={{
					sourceUrl: props.data.page.homepagehero.logo.sourceUrl,
					title: props.data.page.homepagehero.logo.title,
				}}
			/>
		</>
	);
}

type Post = {
	data: any;
	heroImage: any;
	articles: any;
};

export const getStaticProps: GetStaticProps<{ data: Post[] }> = async () => {
	const res = await client.query({
		query: gql`
			query MyQuery {
				page(id: "cG9zdDoxNw==") {
					homepagehero {
						logo {
							sourceUrl
							title
						}
						heroImage {
							sourceUrl
							title
						}
					}
				}
				posts {
					nodes {
						title
						newsArticles {
							published
							thumbnail {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		`,
	});
	const data = res.data;
	return {
		props: {
			data,
		},
	};
};
