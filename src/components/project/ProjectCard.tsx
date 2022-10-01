import { useState } from "react";

import { Box, Grid, ThemeProvider, Typography } from "@mui/material";

import image from "../../assets/find.png";
import { DivGrow, theme } from "../style";
import ProjectDrawer from "./ProjectDrawer";

const Slide = require("react-reveal/Slide");

const h = ["React.js", "JavaScript", "Python", "JavaScript", "Python"];
const links = ["Repo", "Preview"];

function ProjectCard() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [openDrawer, setOpenDrawer] = useState(false);

	const handleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	const handleMouseMovement = (e: any) => {
		setCoords({
			x: e.pageX - e.currentTarget.offsetLeft,
			y: e.pageY - e.currentTarget.offsetTop,
		});
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					onMouseMove={handleMouseMovement}
					sx={{
						position: "relative",
						height: "299px",
						width: "400px",
						borderRadius: "8.5px",
					}}
				>
					<Box className="outerBox">
						<Box className="innerBox">
							<DivGrow
								style={{
									left: `${coords.x - 40}px`,
									top: `${coords.y - 40}px`,
								}}
								onClick={handleDrawer}
							>
								<Typography variant="body2" sx={{ color: "black" }}>
									{openDrawer ? "Boom..." : "Hit It!"}
								</Typography>
								<Box
									sx={{
										"@keyframes projectGun": !openDrawer
											? ""
											: {
													"0%": {
														transform: "rotate(0deg)",
													},
													"50%": {
														transform: "rotate(-15deg)",
													},
													"100%": {
														transform: "rotate(0deg)",
													},
											  },
										animation: !openDrawer ? "" : "projectGun 0.1s 1",
									}}
								>
									<img src="/gun.svg" alt="d" width={"100%"} />
								</Box>
							</DivGrow>

							<Grid container className="grid">
								<Slide delay={50} up>
									<Grid item xs={12}>
										<Typography
											variant="h4"
											sx={{ fontWeight: "bold", color: "white" }}
										>
											Seat Score
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h6">
											An attendance management system!
										</Typography>
									</Grid>
									<Grid item xs={12}>
										{h.map((e, index) => (
											<Grid
												key={index}
												item
												sx={{
													bgcolor: "gray",
													width: "70px",
													height: "20px",
													display: "inline-block",
													borderRadius: "25px",
													margin: "5px",
												}}
											>
												<Typography
													textAlign="center"
													sx={{
														color: "white",
														paddingTop: "2px",
														fontSize: "12px",
													}}
												>
													{e}
												</Typography>
											</Grid>
										))}
									</Grid>
								</Slide>
							</Grid>
						</Box>
						<img src={image} width="100%" height="300" />
					</Box>
				</Grid>
			</ThemeProvider>
			<ProjectDrawer
				open={openDrawer}
				image={image}
				handleDrawer={handleDrawer}
				techs={h}
				links={links}
			/>
		</>
	);
}

export default ProjectCard;
