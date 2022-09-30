export interface ProjectDrawerProps {
	open: boolean;
	image: string;
	techs: string[];
	links: string[];
	handleDrawer: () => void;
}