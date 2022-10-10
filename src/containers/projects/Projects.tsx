import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ProjectCard from "../../components/project/ProjectCard";
import { ProjectType } from "../../components/project/types";
import { mobileProjects, projectsData } from "../../services/constData";

function Projects() {
	const mobile = useMediaQuery("(min-width:600px)");
	const mobile1 = useMediaQuery("(min-width:900px)");

	return (
		<Container
			maxWidth="md"
			sx={{ mt: mobile ? "100px" : "10px", mb: mobile ? "10px" : "100px" }}
		>
			<Grid
				container
				justifyContent={mobile1 ? "space-between" : "center"}
				alignItems="center"
				spacing={2}
			>
				<Grid item xs={12}>
					<Typography variant="h2" sx={{ fontWeight: "bold" }}>
						Projects:
					</Typography>
				</Grid>
				{mobileProjects.map((project, index) => (
					<Grid key={index} item xs={6} sm={3.5} md={2.6}>
						<ProjectCard project={project as ProjectType} mobile={true} />
					</Grid>
				))}
				{projectsData.map((project, index) => (
					<Grid key={index} item xs={11} sm={8} md={6}>
						<ProjectCard
							project={project as unknown as ProjectType}
							mobile={false}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Projects;
