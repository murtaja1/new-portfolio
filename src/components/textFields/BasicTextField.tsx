import { TextField, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./style";

function BasicTextField({
	multiline,
	value,
	name,
	placeholder,
	onChange,
}: {
	multiline: boolean;
	value: string;
	name: string;
	placeholder: string;
	onChange:
		| React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined;
}) {
	return (
		<ThemeProvider theme={theme}>
			<TextField
				value={value}
				onChange={onChange}
				name={name}
				variant="outlined"
				placeholder={placeholder}
				fullWidth
				multiline={multiline}
				rows={4}
			/>
		</ThemeProvider>
	);
}

export default BasicTextField;
