import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconContainer, { MenuIconContainer } from "../../components/Icons";
import styles from "./style";
import externalURLS from "../../services/externalURLS";

function CNavBar() {
	const mobile = useMediaQuery("(min-width:600px)");
	const classes = styles;
	return (
		<Box
			sx={{
				...classes.container,
				bottom: mobile ? "" : "10px",
			}}
		>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item></Grid>
				<Grid item>
					<Grid container alignItems="center" alignSelf="center">
						<a href={externalURLS.linkedIn} target="_blank">
							<LinkedInIcon sx={{ ...classes.regularIcon, ...classes.hover }} />
						</a>
						<a href={externalURLS.facebook} target="_blank">
							<FacebookIcon sx={{ ...classes.regularIcon, ...classes.hover }} />
						</a>
						<Box sx={{ width: "5px" }} />
						<a href={externalURLS.github} target="_blank">
							<IconContainer
								classes={classes.hover}
								icon={<GitHubIcon sx={classes.customIcon} />}
							/>
						</a>
						<Box sx={{ width: "10.5px" }} />
						<a href={externalURLS.twitter} target="_blank">
							<IconContainer
								classes={classes.hover}
								icon={<TwitterIcon sx={classes.customIcon} />}
							/>
						</a>
						{!mobile && (
							<>
								<Box sx={{ width: "10.5px" }} />
								<MenuIconContainer
									classes={classes.hover}
									icon={
										<MenuIcon
											sx={{
												fontSize: "30px",
											}}
										/>
									}
								/>
							</>
						)}
					</Grid>
				</Grid>
				<Grid item>
					{mobile && (
						<MenuIcon sx={{ ...classes.desktopMenu, ...classes.hover }} />
					)}
				</Grid>
			</Grid>
		</Box>
	);
}

export default CNavBar;
