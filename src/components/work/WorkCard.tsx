import { useState } from "react";

import {
	Box,
	Grid,
	ThemeProvider,
	Typography,
} from "@mui/material";

import image from "../../assets/find.png";
import { DivGrow, theme } from "../style";
import WorkDrawer from "./WorkDrawer";

const Slide = require("react-reveal/Slide");

const h = ["React.js", "JavaScript", "Python", "JavaScript", "Python"];
const links = ["Repo", "Preview"];

function WorkCard() {
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
								{openDrawer ? "Boom..." : "Hit It!"}
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
			<WorkDrawer
				open={openDrawer}
				image={image}
				handleDrawer={handleDrawer}
				techs={h}
				links={links}
			/>
		</>
	);
}

export default WorkCard;
