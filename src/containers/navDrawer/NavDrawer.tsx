import Drawer from "@mui/material/Drawer";
import {
	Box,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { tabs } from "../../services/constData";
import { styled } from "@mui/material";
const Fade = require("react-reveal/Fade");

interface NavDrawerProps {
	open: boolean;
	handleDrawer: () => void;
}

// const Keyframes = styled(ListItem)({
// 	"&:hover": {
// 		"@keyframes pulsate": {
// 			from: {
// 				textDecorationColor: "transparent",
// 			},
// 			to: {
// 				textDecorationColor: "auto",
// 			},
// 		},
// 		textDecoration: "line-through",
// 		// textDecorationColor: "red",

// 		textDecorationThickness:"1px",
// 		animation: "pulsate 1s ease",
// 		// animation: "pulsate 2s linear .3s 1 forwards",
// 	},
// });

function NavDrawer({ open, handleDrawer }: NavDrawerProps) {
	return (
		<Drawer open={open} anchor="top">
			<Box sx={{ height: "100vh", bgcolor: "secondary.light" }}>
				<Fade left delay={100}>
					<Grid container justifyContent="flex-end">
						<IconButton
							onClick={handleDrawer}
							sx={{ marginTop: "20px", marginRight: "20px" }}
						>
							<CloseIcon sx={{ color: "text.secondary", fontSize: "40px" }} />
						</IconButton>
					</Grid>
				</Fade>
				<List>
					{tabs.map((tab, index) => (
						<Link
							key={index}
							to={tab.link}
							onClick={handleDrawer}
							style={{ textDecoration: "none" }}
						>
							<ListItem
								sx={{
									height: "20vh",
									textAlign: "center",
									"&:hover": {
										bgcolor: "#2a2828",
									},
								}}
							>
								<ListItemText>
									<Fade left delay={tab.delay}>
										<Typography variant="h1" sx={{ color: "text.secondary" }}>
											{tab.tab}
										</Typography>
									</Fade>
								</ListItemText>
							</ListItem>
						</Link>
					))}
				</List>
			</Box>
		</Drawer>
	);
}

export default NavDrawer;
