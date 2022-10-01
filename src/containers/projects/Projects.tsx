import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ProjectCard from "../../components/project/ProjectCard";

const h = ["React.js", "JavaScript", "JavaScript", "JavaScript", "JavaScript"];

function Projects() {
	const mobile = useMediaQuery("(min-width:600px)");

	return (
		<Container
			maxWidth="lg"
			sx={{ mt: mobile ? "100px" : "10px", mb: mobile ? "10px" : "100px" }}
		>
			<Grid container justifyContent="center" alignItems="center" spacing={1}>
				<Grid item xs={10}>
					<Typography variant="h2" sx={{ fontWeight: "bold" }}>
						Projects:
					</Typography>
				</Grid>
				{h.map((_, index) => (
					<Grid key={index} item xs={12} sm={8} md={5}>
						<ProjectCard />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Projects;
