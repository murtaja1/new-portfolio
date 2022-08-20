import {
	Box,
	createTheme,
	Grid,
	ThemeProvider,
	Typography,
	styled,
} from "@mui/material";
import { useState } from "react";
import image from "../../assets/find.png";
const Slide = require("react-reveal/Slide");

const h = ["React.js", "JavaScript", "Python", "JavaScript", "Python"];

const Keyframes = styled("div")({
	"@keyframes grow": {
		"0%": {
			transform: "scale(1)",
		},
		"50%": {
			transform: "scale(1.2)",
		},
		"100%": {
			transform: "scale(1)",
		},
	},
	animation: "grow 1s infinite ease",
	position: "relative",
	transform: "translate(-50%, -50%)",
	width: "80px",
	height: "80px",
	borderRadius: "50%",
	backgroundColor: "black",
	zIndex: "999",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "white",
	cursor: "none"
});

function Work() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [button, setButton] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				sx={{ width: "100wh", height: "100vh", overflow: "hidden" }}
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Box
					onMouseMove={(e) => {
						setCoords({
							x: e.clientX - e.currentTarget.offsetLeft,
							y: e.clientY - e.currentTarget.offsetTop,
						});
					}}
					onMouseEnter={(e) => {
						setButton(true);
					}}
					onMouseLeave={() => {
						setButton(false);
					}}
				>
					<Box className="innerBox">
						{button && (
							<Keyframes
								style={{
									left: `${coords.x - 40}px`,
									top: `${coords.y - 40}px`,
								}}
							>
								Click
							</Keyframes>
						)}
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
								<Grid item xs={12} container>
									<Typography variant="h6">
										An attendance management system!
									</Typography>
								</Grid>
								<Grid item xs={12}>
									{h.map((e) => (
										<Grid
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

					<img
						src={image}
						width="400"
						height="300"
						style={{ borderRadius: "9px" }}
					/>
				</Box>
			</Grid>
		</ThemeProvider>
	);
}

export default Work;

const theme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					"& .MuiBox-root": {
						borderRadius: "8.5px",
						height: "299px",
						width: "400px",
						overflow: "hidden",
						backgroundColor: "transparent",
						position: "absolute",
						"& .innerBox": {
							"&.hoverDiv": {
								transform: "scale(1.2)",
								WebkitTransform: "scale(1.2)",
								background: "red",
							},
							height: "300px",
							width: "400px",
							backgroundColor: "transparent",
							display: "none",
						},
						"&:hover": {
							background:
								"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.3) 90%)",
							"& .MuiBox-root": {
								display: "block",
								"& .grid": {
									position: "absolute",
									bottom: "10%",
									padding: "10px",
								},
							},
						},
					},
				},
			},
		},
	},
});
