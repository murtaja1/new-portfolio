export interface WorkDrawerProps {
	open: boolean;
	image: string;
	techs: string[];
	links: string[];
	handleDrawer: () => void;
}