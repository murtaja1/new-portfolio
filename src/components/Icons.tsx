import { Box } from "@mui/material";

function IconContainer({ icon, classes }: IconContainerProps) {
	return (
		<Box
			sx={{
				...classes,
				height: "35px",
				width: "35px",
				borderRadius: "5px",
				bgcolor: "primary.light",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{icon}
		</Box>
	);
}

export default IconContainer;

export function MenuIconContainer({ icon, classes }: IconContainerProps) {
	return (
		<Box
			sx={{
				...classes,
				height: "40px",
				width: "40px",
				borderRadius: "50px",
				bgcolor: "#232323",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{icon}
		</Box>
	);
}
