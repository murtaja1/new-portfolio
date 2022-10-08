import { Grid, Typography, useMediaQuery } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function AboutCard({ title, body }: { title: string; body: string }) {
	const mobile = useMediaQuery("(max-width:700px)");

	return (
		<Grid container>
			<Grid
				item
				xs={12}
				sm={11}
				md={10}
				container
				alignItems="center"
				sx={{ mb: "10px" }}
			>
				<CircleOutlinedIcon sx={{ mr: "5px" }} />
				<Typography variant={mobile ? "h5" : "h3"} sx={{ fontWeight: "bold" }}>
					{title}:
				</Typography>
			</Grid>
			<Grid item xs={12} sm={11} md={10}>
				<Typography variant={mobile ? "h5" : "h4"}>{body}</Typography>
			</Grid>
		</Grid>
	);
}

export default AboutCard;
