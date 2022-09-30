import { Container, Grid, useMediaQuery } from "@mui/material";
import WorkCard from "../../components/WorkCard";

const h = ["React.js", "JavaScript", "JavaScript", "JavaScript", "JavaScript"];
const links = ["Repo", "Preview"];

function Work() {
	const mobile = useMediaQuery("(min-width:600px)");

	return (
		<Container sx={{ mt: mobile ? "100px" : "10px", mb: mobile ? "" : "100px" }}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				spacing={5}
			>
				{h.map((_, index) => (
					<Grid key={index} item>
						<WorkCard />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Work;
