import { useState, MouseEvent, useRef } from "react";
import { useScroll, useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Box,
	Menu,
	MenuItem,
	IconButton,
	Button,
} from "@mui/material";

const pages = [
	"About Us",
	"Social Responsibility",
	"Careers",
	"News",
	"Grants",
	"Reports",
];

declare namespace JSX {
	interface ElementClass {
		currentTarget: any;
		anchorNav: any;
		anchorEl: any;
	}
}

function Navbar(props: { Logo: { sourceUrl: string; title: string } }) {
	const [anchorNav, setanchorNav] = useState<null>();

	const [scrollVal, setScrollVal] = useState(0);
	useScroll({
		onChange: ({ value: { scrollYProgress } }) => {
			setScrollVal(scrollYProgress);
		},
	});

	const handleOpenNavMenu = (event: MouseEvent) => {
		let currentTarget: any = event.currentTarget;
		setanchorNav(currentTarget);
	};
	const handleCloseNavMenu = () => {
		setanchorNav(null);
	};

	return (
		<AppBar
			style={{
				background: "transparent",
				boxShadow: "none",
			}}
		>
			<animated.div
				style={{
					transition: "background-color .4s ease-in-out",
					backgroundColor:
						scrollVal >= 0.029074421513445905 ? "#1A2A57" : "transparent",
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						{/* DESKTOP */}
						<Link
							href='/'
							style={{
								backgroundColor: "#1A2A57",
								padding: "15px 10px",
								transform: "translate(0, -1px)",
							}}
						>
							<Image
								src={props.Logo.sourceUrl}
								alt={props.Logo.title}
								width='278'
								height='131'
								style={{
									width: "80px",
									height: "37.7px",
									transform: "translate(0px, 4px)",
								}}
							/>
						</Link>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "center",
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "white",
										display: "block",
										padding: "8px 25px",
										fontFamily: "Sofia Sans Condensed",
										fontWeight: "bold",
									}}
								>
									{page}
								</Button>
							))}
						</Box>

						<Button
							onClick={handleCloseNavMenu}
							sx={{
								display: { xs: "none", md: "flex" },
								my: 2,
								color: "white",
								fontFamily: "Sofia Sans Condensed",
								fontWeight: "bold",
							}}
						>
							tab.co.nz
							<span
								style={{
									padding: "0 0px 0 5px",
									transform: "translate(0, 2px)",
								}}
							>
								<svg
									width='13'
									height='13'
									viewBox='0 0 13 13'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.00022 1H3C1.89543 1 1 1.89543 1 3V10.0006C1 11.1052 1.89543 12.0006 3 12.0006H10.0006C11.1052 12.0006 12.0006 11.1052 12.0006 10.0006V8.33374'
										stroke='#F5F5F5'
										strokeWidth='1.5'
									/>
									<path
										d='M5.00244 8.00039L12.0028 1M12.0028 1V5.33357M12.0028 1H7.3359'
										stroke='#F5F5F5'
										strokeWidth='1.5'
									/>
								</svg>
							</span>
						</Button>

						{/* MOBILE */}
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
								justifyContent: "end",
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<svg
									viewBox='0 0 100 80'
									width='40'
									height='40'
									fill={scrollVal >= 0.029074421513445905 ? "white" : "#1A2A57"}
								>
									<rect width='100' height='15'></rect>
									<rect y='30' width='100' height='15'></rect>
									<rect y='60' width='100' height='15'></rect>
								</svg>
							</IconButton>
							<Menu
								id='menu-appbar'
								className='navbar'
								anchorEl={anchorNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography
											variant='h4'
											fontFamily={"Sofia Sans Condensed"}
											fontWeight={"Bold"}
											color={"#1A2A57"}
											textTransform={"uppercase"}
										>
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</animated.div>
		</AppBar>
	);
}

export default Navbar;
