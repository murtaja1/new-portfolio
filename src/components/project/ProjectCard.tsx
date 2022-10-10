import { useState } from "react";

import { Box, Grid, ThemeProvider, Typography } from "@mui/material";

import Image from "./Image";
import { DivGrow, theme } from "../style";
import ProjectDrawer from "./ProjectDrawer";
import { projectsData } from "../../services/constData";
import { ProjectType } from "./types";

const Slide = require("react-reveal/Slide");

function ProjectCard({
	project,
	mobile,
}: {
	project: ProjectType;
	mobile: boolean;
}) {
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
						width: "100%",
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
								<Typography
									sx={{
										color: "white",
										position: "absolute",
										top: "20px",
										left: "20px",
										fontSize: "10px",
									}}
								>
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
									<img src="/cursor.svg" alt="d" width={"100%"} />
								</Box>
							</DivGrow>

							<Grid container className="grid">
								<Slide delay={50} up>
									<Grid item xs={12}>
										<Typography
											variant={mobile ? "body2" : "h4"}
											sx={{ fontWeight: "bold", color: "white" }}
										>
											{project.title}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography variant={mobile ? "subtitle2" : "h6"}>
											{project.cardDesc}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										{project.tools.map((e, index) => (
											<Grid
												key={index}
												item
												sx={{
													bgcolor: "gray",
													px: "5px",
													pt: "2px",
													height: "25px",
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
						<Image
							src={project.img}
							errorImg="https://via.placeholder.com/400x200.png?text=No+Image"
							placeholderImg="https://via.placeholder.com/400x200.png?text=Loading..."
							width="100%"
							height="300"
						/>
					</Box>
				</Grid>
			</ThemeProvider>
			<ProjectDrawer
				open={openDrawer}
				handleDrawer={handleDrawer}
				project={project}
				mobile={mobile}
			/>
		</>
	);
}

export default ProjectCard;
