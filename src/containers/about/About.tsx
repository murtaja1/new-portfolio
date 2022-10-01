import { useState } from "react";

import { Box, Container, Grid, Tooltip, useMediaQuery } from "@mui/material";

import { SkillIconAnimation, languages, GunIconAnimation } from "./Data";
import AboutCard from "../../components/AboutCard";
const Slide = require("react-reveal/Slide");

function About() {
	const mobile = useMediaQuery("(min-width:600px)");
	const [show, setShow] = useState(false);

	return (
		<Container
			maxWidth="xl"
			sx={{ mt: mobile ? "100px" : "10px", mb: mobile ? "10px" : "100px" }}
		>
			<Grid container justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={10}>
					<AboutCard
						title="My Skills"
						body="The languages I speak and technologies I use to build AWESOMENESS:"
					/>
				</Grid>
				<Grid item container justifyContent="center" xs={12}>
					<Grid
						item
						xs={9}
						sx={{ overflow: "hidden", mt: "15px", height: "300px" }}
					>
						{languages.map((icon, i) => (
							<Box key={i}>
								<Slide right delay={icon.delay}>
									<Tooltip title={icon.name} placement="top">
										<SkillIconAnimation
											style={{
												animationDelay: icon.sDelay,
												top: icon.top,
												left: icon.left,
											}}
										>
											<img src={icon.icon} width="100%" height="100%" />
										</SkillIconAnimation>
									</Tooltip>
								</Slide>
							</Box>
						))}
					</Grid>
					<Grid item xs={1}>
						<GunIconAnimation>
							<img
								onClick={() => {
									setShow(!show);
								}}
								src="/gun.svg"
								alt="d"
								height="120px"
								style={{
									transform: "rotateY(180deg)",
									cursor: "pointer",
									marginTop: "20px",
								}}
							/>
						</GunIconAnimation>
					</Grid>
				</Grid>
				<Grid item xs={10}>
					<AboutCard
						title="Front-end Development Experience"
						body="Over the past two years, I have been developing and participating in
						different kinds of projects with various technologies and languages.
						One of the projects is a smart attendance web application called
						Seat Score, the other is a mobile application for delivery and more.
						As a software developer by training and at heart I invest in my
						learning to become a better developer and delivery high quality
						work."
					/>
				</Grid>
				<Grid item xs={10}>
					<AboutCard
						title="Mobile Development Experience"
						body="Over the past two years, I have been developing and participating in
						different kinds of projects with various technologies and languages.
						One of the projects is a smart attendance web application called
						Seat Score, the other is a mobile application for delivery and more.
						As a software developer by training and at heart I invest in my
						learning to become a better developer and delivery high quality
						work."
					/>
				</Grid>
				<Grid item xs={10}>
					<AboutCard
						title="Back-end Development Experience"
						body="Over the past two years, I have been developing and participating in
						different kinds of projects with various technologies and languages.
						One of the projects is a smart attendance web application called
						Seat Score, the other is a mobile application for delivery and more.
						As a software developer by training and at heart I invest in my
						learning to become a better developer and delivery high quality
						work."
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default About;
