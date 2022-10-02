import { createTheme } from "@mui/material";

export const theme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					"& fieldset": {
						borderColor: "#cacaca",
					},
					"&:hover fieldset": {
						borderColor: "#cacaca !important",
					},
					"& .Mui-focused fieldset": {
						borderColor: "#cacaca !important",
					},
					"& .MuiOutlinedInput-root": {
						background: "#2f2f2f",
						color: "#cacaca",

					},
					input: {
						color: "#cacaca",
						background: "#2f2f2f",
						borderRadius: "5px",
					},
					textarea: {
						background: "#2f2f2f",
					},
				},
			},
		},
	},
});
