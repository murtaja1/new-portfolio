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
						title="Odoo Development Experience"
						body="I have experience in customizing Odoo modules and automation. I have Developed and participated in developing tailored solutions for a range of Odoo models, such as accounting, inventory, sales, HR, and more. Additionally, automated Odoo’s processes, improving efficiency and optimizing operations."
					/>
				</Grid>
				<Grid item xs={11} lg={10}>
					<AboutCard
						title="Front-end Development Experience"
						body="I have extensive experience in front-end development, utilizing technologies such as React.js, and Vue.js. I create dynamic and intuitive user interfaces, leveraging the strengths of each technology to deliver high-quality experiences."
					/>
				</Grid>
				<Grid item xs={11} lg={10}>
					<AboutCard
						title="Mobile Development Experience"
						body="I have extensive experience in mobile app development using Flutter and React Native. With Flutter, I create cross-platform apps with a fast development cycle and impressive UI components. I also utilize React Native to build robust apps for iOS and Android platforms, focusing on code reusability and excellent user interfaces."
					/>
				</Grid>
				<Grid item xs={11} lg={10}>
					<AboutCard
						title="Back-end Development Experience"
						body="I have actively participated in projects utilizing Django and Python, gaining extensive experience in these frameworks. Additionally, I have acquired valuable expertise in Flask, further enhancing my backend development skills."
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default About;
