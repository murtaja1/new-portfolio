import React from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import AnimatedText from "react-animated-text-content";
// @ts-ignore
import CV from "../../assets/cv.pdf";
const Zoom = require("react-reveal/Fade");

function Home() {
	const mobile = useMediaQuery("(min-width:600px)");

	return (
		<Container>
			<Grid
				container
				sx={{ width: "100wh", height: "100vh", overflow: "hidden" }}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={12}></Grid>

				<Grid item xs={12} sm={10} md={8}>
					<Typography variant={mobile ? "h2" : "h3"} textAlign="center">
						<AnimatedText
							type="words" // animate words or chars
							animation={{
								x: "200px",
								y: "-20px",
								scale: 1.1,
								ease: "ease-in-out",
							}}
							animationType="wave"
							interval={0.06}
							duration={0.6}
							className="animated-paragraph"
							includeWhiteSpaces
							threshold={0.1}
							rootMargin="20%"
						>
							Hi, My name is Murtaja Adnan.
						</AnimatedText>
					</Typography>
					<Box sx={{ height: "20px" }} />
					<Typography variant="h3" color="text.secondary" textAlign="center">
						<AnimatedText
							type="words" // animate words or chars
							animation={{
								x: "200px",
								y: "-20px",
								scale: 1.1,
								ease: "ease-in-out",
							}}
							animationType="wave"
							interval={0.06}
							duration={0.4}
							className="animated-paragraph"
							includeWhiteSpaces
							threshold={0.1}
							rootMargin="20%"
						>
							Over the past three years, I've developed expertise as a software
							developer, actively contributing to diverse projects involving
							multiple technologies. Notably, I played a key role in building
							Seat Score, a smart attendance web app, and a delivery mobile
							application. My focus extends to Odoo development and
							Implementation, an open-source ERP platform. With extensive
							experience in Odoo, I've successfully implemented customized
							solutions, streamlined business processes, and improved
							operational efficiency for clients. As a dedicated and constantly
							improving developer, I prioritize staying up-to-date with industry
							trends. By combining technical expertise with a commitment to
							delivering high-quality work, I consistently exceed expectations
							and drive project success.
						</AnimatedText>
					</Typography>
					<Zoom delay={12500}>
						<Box pt={1.5} mb={10} sx={{ textAlign: "center" }}>
							<Button
								sx={{
									textTransform: "inherit !important",
									background: "red",
									"&:hover": {
										backgroundColor: "#d05252",
									},
									mainColor: {
										color: "#8a8a8a ",
									},
								}}
								variant="contained"
							>
								<a
									href={CV}
									style={{ textDecoration: "none", color: "white" }}
									download
								>
									Download my CV
								</a>
							</Button>
						</Box>
					</Zoom>
				</Grid>
				<Grid item xs={12}></Grid>
			</Grid>
		</Container>
	);
}

export default Home;
