const styles = {
	container: {
		position: "fixed",
		paddingTop: "20px",
		width: "100%",
	},
	regularIcon: {
		fontSize: "45px",
		color: "primary.light",
	},
	customIcon: {
		fontSize: "30px",
		color: "primary.main",
	},
	desktopMenu: {
		fontSize: "35px",
		marginTop: "9px",
		marginRight: "30px",
	},
	hover: {
		transitionDuration: "1s",
		"&:hover": {
			transitionDuration: "1s",
			transform: "scale(1.2)",
			WebkitTransform: "scale(1.2)",
		},
	},
};
export default styles;
