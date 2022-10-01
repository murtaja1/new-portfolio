import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { DivGrow, languages } from "./Data";
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
					<Typography variant="h2" sx={{ fontWeight: "bold" }}>
						About Me:
					</Typography>
				</Grid>
				<Grid item xs={5}>
					<Typography variant="h4">
						Over the past two years, I have been developing and participating in
						different kinds of projects with various technologies and languages.
						One of the projects is a smart attendance web application called
						Seat Score, the other is a mobile application for delivery and more.
						As a software developer by training and at heart I invest in my
						learning to become a better developer and delivery high quality
						work.
					</Typography>
				</Grid>
				<Grid item container justifyContent="space-between" xs={12}>
					<Grid
						item
						xs={10}
						sx={{ overflow: "hidden", mt: "15px", height: "500px" }}
					>
						{languages.map((icon, i) => (
							<Box key={i}>
								<Slide right delay={icon.delay}>
									<DivGrow
										style={{
											animationDelay: icon.sDelay,
											top: icon.top,
											left: icon.left,
										}}
									>
										<img src={icon.icon} width="100%" height="100%" />
									</DivGrow>
								</Slide>
							</Box>
						))}
					</Grid>
					<Grid item xs={2}>
						<img
							onClick={() => {
								setShow(!show);
							}}
							src="/gun.svg"
							alt="d"
							height="100px"
							style={{ transform: "rotateY(180deg)", cursor: "pointer", marginTop:'20px' }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default About;
