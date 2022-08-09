import React from "react";
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

interface NavDrawerProps {
	open: boolean;
	handleDrawer: () => void;
}

function NavDrawer({ open, handleDrawer }: NavDrawerProps) {

	return (
		<Drawer open={open} anchor="top">
			<Box sx={{ height: "100vh", bgcolor: "secondary.light" }}>
				<Grid container justifyContent="flex-end">
					<IconButton onClick={handleDrawer} sx={{marginTop: '20px', marginRight:"20px"}}>
						<CloseIcon sx={{ color: "text.secondary", fontSize: "40px" }} />
					</IconButton>
				</Grid>
				<List>
					{tabs.map((tab, index) => (
						<Link
							key={index}
							to={tab.link}
							onClick={handleDrawer}
							style={{ textDecoration: "none" }}
						>
							<ListItem sx={{ height: "20vh", textAlign: "center" }}>
								<ListItemText>
									<Typography variant="h1" sx={{ color: "text.secondary" }}>
										{tab.tab}
									</Typography>
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
