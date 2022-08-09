import MenuIcon from "@mui/icons-material/Menu";
import { Box, Grid, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconContainer, { MenuIconContainer } from "../../components/Icons";
import styles from "./style";

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
					<Grid container alignItems="center" justifyContent="space-between">
						<LinkedInIcon
							sx={{ ...classes.regularIcon, ...classes.hover }}
							onClick={() => console.log("dddddddd")}
						/>
						<FacebookIcon sx={{ ...classes.regularIcon, ...classes.hover }} />
						<Box sx={{ width: "5px" }} />

						<IconContainer icon={<GitHubIcon sx={classes.customIcon} />} />
						<Box sx={{ width: "10.5px" }} />
						<IconContainer icon={<TwitterIcon sx={classes.customIcon} />} />
						{!mobile && (
							<>
								<Box sx={{ width: "10.5px" }} />
								<MenuIconContainer
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
					{mobile && <MenuIcon sx={{ ...classes.desktopMenu }} />}
				</Grid>
			</Grid>
		</Box>
	);
}

export default CNavBar;
