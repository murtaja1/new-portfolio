import {
	useMediaQuery,
	Drawer,
	Box,
	Grid,
	IconButton,
	Typography,
	Divider,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

import { ProjectDrawerProps } from "./types";

const ProjectDrawer = ({
	open,
	image,
	techs,
	links,
	handleDrawer,
}: ProjectDrawerProps) => {
	const mobile = useMediaQuery("(min-width:600px)");
	return (
		<Drawer open={open} onClose={handleDrawer} anchor="right">
			<Box
				sx={{
					width: mobile ? "500px" : "100%",
					bgcolor: "secondary.light",
					paddingLeft: "25px",
					paddingRight: "25px",
					paddingTop: "10px",
				}}
			>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<IconButton
							onClick={handleDrawer}
							sx={{
								border: " solid 2px",
								borderColor: "text.primary",
								padding: "3px",
							}}
						>
							<ArrowBackIosNewOutlinedIcon
								sx={{
									color: "text.primary",
									fontSize: "15px",
								}}
							/>
						</IconButton>
					</Grid>
					<Grid item>
						<Typography
							variant="h4"
							sx={{ cursor: "pointer" }}
							onClick={handleDrawer}
						>
							Back To Projects.
						</Typography>
					</Grid>
					<Divider
						sx={{
							width: "100%",
							bgcolor: "text.primary",
							height: "0.5px",
							padding: "0px",
							marginTop: "10px",
							marginBottom: "10px",
						}}
					/>
					<Grid item xs={12}>
						<Typography variant="h2" sx={{ color: "white" }}>
							Seat Score
						</Typography>
						<Typography variant="h3">
							An attendance management system!
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<img
							src={image}
							width="100%"
							height="300"
							style={{
								borderRadius: "9px",
								marginTop: "10px",
								marginBottom: "10px",
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h3" sx={{ paddingBottom: "5px" }}>
							Description:
						</Typography>

						<Typography variant="h5">
							An attendance management system that enable managers to properly
							follow what the fuck are their employees doing via a web and
							mobile application!An attendance management system that enable
							managers to properly follow what the fuck are their employees
							doing via a web and mobile application!
						</Typography>
						<Typography
							variant="h3"
							sx={{ paddingBottom: "5px", paddingTop: "10px" }}
						>
							Technologies:
						</Typography>
						{techs.map((e, index) => (
							<Box
								key={index}
								sx={{
									bgcolor: "gray",
									height: "25px",
									display: "inline-flex",
									justifyContent: "center",
									alignItems: "center",
									borderRadius: "4px",
									margin: "5px",
									paddingLeft: "10px",
									paddingRight: "10px",
								}}
							>
								<Typography
									sx={{
										color: "black",
									}}
									variant="h5"
								>
									{e}
								</Typography>
							</Box>
						))}
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="h3"
							sx={{ paddingBottom: "5px", paddingTop: "10px" }}
						>
							Links to Visit:
						</Typography>
						{links.map((e, index) => (
							<div key={index}>
								<Typography variant="h5" sx={{ display: "inline-block" }}>
									{e}:
								</Typography>
								<Typography
									variant="h5"
									sx={{ color: "#cacaca", display: "inline-block" }}
								>
									<a
										href="https://findyours.netlify.app/"
										target="_blank"
										style={{ textDecoration: "none", color: "#cacaca" }}
									>
										&nbsp; https://findyours.netlify.app/
									</a>
								</Typography>
							</div>
						))}
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ marginBottom: "49px" }} />
			<Box
				sx={{
					position: "fixed",
					bottom: "0",
					height: "50px",
					bgcolor: "black",
					width: mobile ? "500px" : "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography>
					<a
						href="https://findyours.netlify.app/"
						target="_blank"
						style={{
							textDecoration: "none",
							color: "#cacaca",
							paddingRight: "5px",
						}}
					>
						Open Project!
					</a>
				</Typography>
				<LaunchOutlinedIcon sx={{ fontSize: "20px" }} />
			</Box>
		</Drawer>
	);
};

export default ProjectDrawer;
