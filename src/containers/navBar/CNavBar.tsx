import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconContainer, { MenuIconContainer } from "../../components/Icons";
import styles from "./style";
import externalURLS from "../../services/externalURLS";
import NavDrawer from "../navDrawer/NavDrawer";
import { useState } from "react";
const Fade = require("react-reveal/Fade");

function CNavBar() {
	const mobile = useMediaQuery("(min-width:600px)");
	const classes = styles;
	const [openDrawer, setOpenDrawer] = useState(false);
	const handleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};
	return (
		<Box
			sx={{
				...classes.container,
				bottom: mobile ? "" : "10px",
			}}
		>
			<NavDrawer open={openDrawer} handleDrawer={handleDrawer} />

			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item></Grid>
				<Grid item>
					<Grid container alignItems="center" alignSelf="center">
						<a href={externalURLS.linkedIn} target="_blank">
							<Fade delay={10} top>
								<LinkedInIcon
									sx={{ ...classes.regularIcon, ...classes.hover }}
								/>
							</Fade>
						</a>
						<a href={externalURLS.facebook} target="_blank">
							<Fade delay={20} top>
								<FacebookIcon
									sx={{ ...classes.regularIcon, ...classes.hover }}
								/>
							</Fade>
						</a>
						<Box sx={{ width: "5px" }} />
						<a href={externalURLS.github} target="_blank">
							<Fade delay={30} top>
								<IconContainer
									classes={classes.hover}
									icon={<GitHubIcon sx={classes.customIcon} />}
								/>
							</Fade>
						</a>
						<Box sx={{ width: "10.5px" }} />
						<a href={externalURLS.twitter} target="_blank">
							<Fade delay={40} top>
								<IconContainer
									classes={classes.hover}
									icon={<TwitterIcon sx={classes.customIcon} />}
								/>
							</Fade>
						</a>
						{!mobile && (
							<>
								<Box sx={{ width: "10.5px" }} />
								<Fade delay={50} right>
									<MenuIconContainer
										classes={classes.hover}
										icon={
											<MenuIcon
												onClick={handleDrawer}
												sx={{
													fontSize: "30px",
												}}
											/>
										}
									/>
								</Fade>
							</>
						)}
					</Grid>
				</Grid>
				<Grid item>
					{mobile && (
						<Fade delay={50} right>
							<MenuIcon
								sx={{ ...classes.desktopMenu, ...classes.hover }}
								onClick={handleDrawer}
							/>
						</Fade>
					)}
				</Grid>
			</Grid>
		</Box>
	);
}

export default CNavBar;
