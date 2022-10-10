import { projectsData } from "../../services/constData";
export type ProjectType = { img: string;
	title: string;
	cardDesc: string;
	description: string;
	tools: string[];
	google?: string;
	apple?: string;
	delay: number;
	link?: undefined;
	repo?: undefined;}

export interface ProjectDrawerProps {
	project: ProjectType;
	open: boolean;
	mobile: boolean;
	handleDrawer: () => void;
}
