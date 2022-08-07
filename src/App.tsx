import { CssBaseline } from "@mui/material";
import Container from "./containers/Container";
import ThemeWrapper from "./theme/ThemeWrapper";
import { Container as MContainer } from "@mui/material";

function App() {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<MContainer>
				<Container />
			</MContainer>
		</ThemeWrapper>
	);
}

export default App;
