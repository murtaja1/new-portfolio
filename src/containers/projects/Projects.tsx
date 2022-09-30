import { Container, Grid, useMediaQuery } from "@mui/material";
import ProjectCard from "../../components/project/ProjectCard";

const h = ["React.js", "JavaScript", "JavaScript", "JavaScript", "JavaScript"];
const links = ["Repo", "Preview"];

function Projects() {
	const mobile = useMediaQuery("(min-width:600px)");

	return (
		<Container maxWidth='xl'
			sx={{ mt: mobile ? "100px" : "10px", mb: mobile ? "10px" : "100px" }}
		>
			<Grid container justifyContent="center" alignItems="center" spacing={3}>
				{h.map((_, index) => (
					<Grid key={index} item>
						<ProjectCard />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Projects;
