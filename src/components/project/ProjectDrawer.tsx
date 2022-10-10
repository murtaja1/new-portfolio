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
import ProjectLink from "./ProjectLink";
import google from "../../assets/projectImages/google.png";
import apple from "../../assets/projectImages/apple.png";

const ProjectDrawer = ({
	open,
	project,
	mobile,
	handleDrawer,
}: ProjectDrawerProps) => {
	const mobile600 = useMediaQuery("(min-width:600px)");

	return (
		<Drawer
			open={open}
			onClose={handleDrawer}
			PaperProps={{
				sx: {
					backgroundColor: "secondary.light",
				},
			}}
			anchor="right"
		>
			<Box
				sx={{
					width: mobile600 ? "500px" : "100%",
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
							{project.title}
						</Typography>
						<Typography variant="h3">{project.cardDesc}</Typography>
					</Grid>
					<Grid item xs={12} textAlign="center">
						<img
							src={project.img}
							width={mobile ? "50%" : "100%"}
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

						<Typography variant="h5">{project.description}</Typography>
						<Typography
							variant="h3"
							sx={{ paddingBottom: "5px", paddingTop: "10px" }}
						>
							Technologies:
						</Typography>
						{project.tools.map((e, index) => (
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
						{mobile ? (
							<>
								<a href={project.google} target="_blank">
									<img
										src={google}
										alt="d"
										width="120px"
										style={{ marginRight: "10px", cursor: "pointer" }}
									/>
								</a>
								<a href={project.apple} target="_blank">
									<img
										src={apple}
										alt="d"
										width="120px"
										style={{ cursor: "pointer" }}
									/>
								</a>
							</>
						) : (
							<>
								<ProjectLink title="Preview" link={project.link} />
								<ProjectLink title="Repo" link={project.repo} />
							</>
						)}
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ marginBottom: "49px" }} />
			{!mobile && (
				<Box
					sx={{
						position: "fixed",
						bottom: "0",
						height: "50px",
						bgcolor: "black",
						width: mobile600 ? "500px" : "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography>
						<a
							href={project.link}
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
			)}
		</Drawer>
	);
};

export default ProjectDrawer;
