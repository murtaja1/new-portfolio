const styles = {
	container: {
		position: "fixed",
		width: "100%",
		zIndex: 1,
	},
	regularIcon: {
		marginTop: "5px",
		fontSize: "45px",
		color: "primary.light",
	},
	customIcon: {
		fontSize: "30px",
		color: "primary.main",
	},
	desktopMenu: {
		cursor: "pointer",
		fontSize: "35px",
		marginTop: "9px",
		marginRight: "30px",
		color: "text.secondary",
	},
	hover: {
		transitionDuration: "0.5s",
		transitionProperty: "transform",
		"&:hover": {
			transform: "scale(1.2)",
			WebkitTransform: "scale(1.2)",
		},
	},
};
export default styles;
