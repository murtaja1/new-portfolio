import {
	Box,
	Container,
	Grid,
	ThemeProvider,
	Tooltip,
	useMediaQuery,
} from "@mui/material";

import { languages, theme } from "./style";
import AboutCard from "../../components/AboutCard";
const Slide = require("react-reveal/Slide");

function About() {
	const mobile = useMediaQuery("(max-width:600px)");

	return (
		<Container
			maxWidth="xl"
			sx={{ mt: mobile ? "20px" : "100px", mb: mobile ? "100px" : "100px" }}
		>
			<Grid container justifyContent="center" alignItems="center" spacing={3}>
				<Grid item xs={11} lg={10}>
					<Box>
						<AboutCard
							title="My Skills"
							body="The languages I speak and technologies I use to build AWESOMENESS:"
						/>
					</Box>
				</Grid>
				<Grid
					item
					container
					justifyContent="center"
					alignItems="center"
					columnSpacing={6}
					rowSpacing={4}
					sx={{ overflow: "hidden", pb: "10px" }}
					xs={11.5}
					sm={11}
					lg={10}
				>
					<ThemeProvider theme={theme}>
						{languages.map((icon, i) => {
							return (
								<Grid
									item
									xs={4}
									sm={3}
									md={2}
									xl={1.5}
									key={i}
									className="outerBox"
								>
									<Slide right delay={icon.delay}>
										<Tooltip title={icon.name} placement="top">
											<img
												src={icon.icon}
												height="60px"
												width="60px"
												className="innerBox"
											/>
										</Tooltip>
									</Slide>
								</Grid>
							);
						})}
					</ThemeProvider>
				</Grid>
				<Grid item xs={11} lg={10}>
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
				<Grid item xs={11} lg={10}>
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
				<Grid item xs={11} lg={10}>
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
