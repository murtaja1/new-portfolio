import { CssBaseline } from "@mui/material";
import Container from "./containers/Container";
import ThemeWrapper from "./theme/ThemeWrapper";
import CParticles from "./components/CParticles";

function App() {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<CParticles />
			<Container />
		</ThemeWrapper>
	);
}

export default App;
