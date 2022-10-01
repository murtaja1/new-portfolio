import { Grid, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function AboutCard({ title, body }: { title: string; body: string }) {
	return (
		<Grid container>
			<Grid item xs={10} container alignItems="center" sx={{mb:"10px"}}>
				<CircleOutlinedIcon sx={{ mr: "5px" }} />
				<Typography variant="h3" sx={{ fontWeight: "bold" }}>
					{title}:
				</Typography>
			</Grid>
			<Grid item xs={10}>
				<Typography variant="h4">{body}</Typography>
			</Grid>
		</Grid>
	);
}

export default AboutCard;
