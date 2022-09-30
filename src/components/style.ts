import { createTheme, styled } from "@mui/material";

export const theme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					"& .outerBox": {
						borderRadius: "8.5px",
						height: "299px",
						width: "400px",
						overflow: "hidden",
						position: "absolute",
						"&:hover": {
							"& .innerBox": {

								background:
									"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.3) 90%)",
								position: "absolute",
								display: "block",
								"& .grid": {
									position: "absolute",
									bottom: "10%",
									padding: "10px",
								},
							},
						},
						"& .innerBox": {
							height: "300px",
							width: "100%",
							backgroundColor: "transparent",
							display: "none",
						},
					},
				},
			},
		},
	},
});

export const DivGrow = styled("div")({
	"@keyframes grow": {
		"0%": {
			transform: "scale(1)",
		},
		"50%": {
			transform: "scale(1.2)",
		},
		"100%": {
			transform: "scale(1)",
		},
	},
	animation: "grow 1s infinite ease",
	position: "relative",
	transform: "translate(-50%, -50%)",
	width: "80px",
	height: "80px",
	borderRadius: "50%",
	backgroundColor: "black",
	zIndex: "999",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "white",
	cursor: "none",
});
