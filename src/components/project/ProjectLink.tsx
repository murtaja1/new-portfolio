import { Typography } from "@mui/material";

function ProjectLink({ title, link }: { title: string; link?: string }) {
	return (
		<div>
			<Typography variant="h5" sx={{ display: "inline-block" }}>
				{title}:
			</Typography>
			<Typography
				variant="h5"
				sx={{ color: "#cacaca", display: "inline-block" }}
			>
				<a
					href={link}
					target="_blank"
					style={{ textDecoration: "none", color: "#cacaca" }}
				>
					&nbsp; {link}
				</a>
			</Typography>
		</div>
	);
}

export default ProjectLink;
