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
					sx={{ pb: "10px" }}
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
						body="Most of my development experience lies in the front-end field as I have about two years of
						 experience and have <number> of projects, including the projects that
						I am most proud of which Seat Score which is an Attendance Management System
						 with its portfolio, Find Yours which was my graduation project with my team and The Iraqi student."
					/>
				</Grid>
				<Grid item xs={11} lg={10}>
					<AboutCard
						title="Mobile Development Experience"
						body="I use Flutter for my mobile applications as I have develop and participated in some mobile apps @ Integrated Path, including Reeh which is 
						two apps in one app😁."
					/>
				</Grid>
				<Grid item xs={11} lg={10}>
					<AboutCard
						title="Back-end Development Experience"
						body="I use Django and Python for the backend, I have developed the backend for the Iraqi Student and participated in the backend of Seat Score."
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default About;
