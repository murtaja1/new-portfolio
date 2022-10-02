import { useState } from "react";

import {
	Box,
	Button,
	Container,
	Grid,
	Snackbar,
	Typography,
} from "@mui/material";

import emailjs from "@emailjs/browser";
import BasicTextField from "../../components/textFields/BasicTextField";
const Bounce = require("react-reveal/Bounce");

function Contact() {
	const [message, setMessage] = useState({
		firstName: "",
		lastName: "",
		email: "",
		description: "",
	});
	const [snackBar, setSnackBar] = useState({
		state: false,
		error: false,
		message: "",
	});

	const handleCloseSnack = () => {
		setSnackBar({ ...snackBar, state: false });
	};
	const handleChange = (e: any) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
	};

	const handleCheckBeforeSubmit = () => {
		if (message.email === "" && message.description === "") {
			setSnackBar({
				state: true,
				error: true,
				message: "Email and Description are Required",
			});
		} else {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		var templateParams = {
			to_name: "Murtaja Adnan",
			from_name: message.firstName + " " + message.lastName,
			from_email: message.email,
			message: message.description,
		};

		emailjs
			.send(
				"service_14xycl8",
				"template_khn7z6c",
				templateParams,
				"user_EP1niFzrjn0C8VpbdDmuU"
			)
			.then(
				() => {
					setMessage({
						firstName: "",
						lastName: "",
						description: "",
						email: "",
					});
					setSnackBar({
						state: true,
						error: false,
						message: "Your Email Has Been Sent!",
					});
				},
				function (_) {
					setSnackBar({
						state: true,
						error: true,
						message:
							"There was a trouble sending the email, please try again or send directly via Gmail by click at my email above.",
					});
				}
			);
	};

	return (
		<Container maxWidth="md" sx={{ mt: "100px" }}>
			<Grid container spacing={2} justifyContent="space-around">
				<Grid item xs={12}>
					<Box sx={{ mt: "10px" }}>
						<Box sx={{ mt: "10px" }}>
							<Typography variant="h3" sx={{ color: "text.primary" }}>
								<Bounce cascade left>
									Get in touch
								</Bounce>
							</Typography>
							<Typography variant="h5" sx={{ color: "text.primary" }}>
								<Bounce cascade left delay={100}>
									Would like to know more!
								</Bounce>
							</Typography>
							<Bounce cascade left delay={200}>
								<Typography variant="body1" sx={{ color: "text.primary" }}>
									Interested in my work?
								</Typography>
								Have a project that could use my skills?
								<Typography variant="body1" sx={{ color: "text.primary" }}>
									Wanna hire me?
								</Typography>
								<Typography variant="body1" sx={{ color: "text.primary" }}>
									then please drop a message and let’s chat!
								</Typography>
								<a
									href="mailto:murtajaadnan7@gmail.com"
									style={{ textDecoration: "none" }}
								>
									<Typography variant="body1" sx={{ color: "text.primary" }}>
										<strong>Email: </strong> murtajaadnan7@gmail.com
									</Typography>
								</a>
							</Bounce>
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6}>
					<BasicTextField
						multiline={false}
						value={message.firstName}
						name={"firstName"}
						placeholder={"First Name"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<BasicTextField
						multiline={false}
						value={message.lastName}
						name={"lastName"}
						placeholder={"Last Name"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<BasicTextField
						multiline={false}
						value={message.email}
						name={"email"}
						placeholder={"Email"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<BasicTextField
						multiline={true}
						value={message.description}
						name={"description"}
						placeholder={"Description"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						type="submit"
						sx={{ bg: "red" }}
						variant="contained"
						onClick={handleCheckBeforeSubmit}
					>
						submit
					</Button>
				</Grid>
			</Grid>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				open={snackBar.state}
				onClose={handleCloseSnack}
				autoHideDuration={4000}
				message={
					<Typography sx={{ color: snackBar.error ? "red" : "white" }}>
						{snackBar.message}
					</Typography>
				}
			/>
		</Container>
	);
}

export default Contact;
