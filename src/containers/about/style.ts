import django from "../../assets/django.svg";
import flask from "../../assets/flask.svg";
import material from "../../assets/material.svg";
import vueBootstrap from "../../assets/vueBootstrap.svg";
import git from "../../assets/git.svg";
import redux from "../../assets/redux.svg";
import reactBootstrap from "../../assets/reactBootstrap.js";
import typescript from "../../assets/typescript.svg";
import javascript from "../../assets/javascript.svg";
import postgres from "../../assets/postgres.svg";
import firebase from "../../assets/firebase.svg";
import dart from "../../assets/dart.svg";
import flutter from "../../assets/flutter.svg";
import database from "../../assets/database.svg";
import html from "../../assets/html.svg";
import react from "../../assets/react.svg";
import vue from "../../assets/vue.svg";
import python from "../../assets/python.svg";
import css from "../../assets/css.svg";
import bootstrap from "../../assets/bootstrap.svg";
import github from "../../assets/github.svg";

import { createTheme } from "@mui/material";

export const languages = [
	// first column
	{
		icon: typescript,
		name: "TYPESCRIPT",
		color: "",
		delay: 200,
		aniDelay: "0s",
		top: "10px",
		left: "0px",
	},
	{
		icon: javascript,
		name: "JAVASCRIPT",
		color: "#e34f26",
		delay: 400,
		aniDelay: "0.2s",
		top: "110px",
		left: "0px",
	},
	{
		icon: react,
		name: "REACT",
		color: "#0048BA",
		delay: 800,
		aniDelay: "0.4s",
		top: "210px",
		left: "0px",
	},
	// second column
	{
		icon: redux,
		name: "REDUX",
		color: "#00d8ff",
		delay: 1000,
		aniDelay: "0.6s",
		top: "10px",
		left: "130px",
	},
	{
		icon: reactBootstrap,
		name: "React-bootstrap",
		color: "#f0db4f",
		delay: 1200,
		aniDelay: "0.8s",
		top: "110px",
		left: "130px",
	},
	{
		icon: vueBootstrap,
		name: "Vue-bootstrap",
		color: "",
		delay: 1400,
		aniDelay: "1s",
		top: "210px",
		left: "130px",
	},

	// third column
	{
		icon: bootstrap,
		name: "BOOTSTRAP",
		color: "#f0db4f",
		delay: 1600,
		aniDelay: "1.2s",
		top: "10px",
		left: "260px",
	},
	{
		icon: vue,
		name: "VUE",
		color: "#f0db4f",
		delay: 1800,
		aniDelay: "1.4s",
		top: "110px",
		left: "260px",
	},
	{
		icon: html,
		name: "HTML",
		color: "#f0db4f",
		delay: 2000,
		aniDelay: "1.6s",
		top: "210px",
		left: "260px",
	},

	// forth column
	{
		icon: css,
		name: "CSS",
		color: "#f0db4f",
		delay: 2200,
		aniDelay: "1.8s",
		top: "10px",
		left: "390px",
	},
	{
		icon: material,
		name: "MATERIAL",
		color: "#f0db4f",
		delay: 2400,
		aniDelay: "2s",
		top: "110px",
		left: "390px",
	},
	{
		icon: database,
		name: "DATABASE",
		color: "#f0db4f",
		delay: 2600,
		aniDelay: "2.2s",
		top: "210px",
		left: "390px",
	},

	// fifth column
	{
		icon: flutter,
		name: "FLUTTER",
		color: "#f0db4f",
		delay: 2800,
		aniDelay: "2.4s",
		top: "10px",
		left: "510px",
	},
	{
		icon: dart,
		name: "DART",
		color: "#f0db4f",
		delay: 3000,
		aniDelay: "2.6s",
		top: "110px",
		left: "510px",
	},
	{
		icon: postgres,
		name: "POSTGRES",
		color: "#f0db4f",
		delay: 3200,
		aniDelay: "2.8s",
		top: "210px",
		left: "510px",
	},

	// sixth column
	{
		icon: python,
		name: "PYTHON",
		color: "#f0db4f",
		delay: 3000,
		aniDelay: "3s",
		top: "10px",
		left: "640px",
	},
	{
		icon: django,
		name: "DJANGO",
		color: "#f0db4f",
		delay: 3200,
		aniDelay: "3.2s",
		top: "110px",
		left: "640px",
	},
	{
		icon: flask,
		name: "FLASK",
		color: "#f0db4f",
		delay: 3400,
		aniDelay: "3.4s",
		top: "210px",
		left: "640px",
	},

	// sixth column
	{
		icon: firebase,
		name: "FIREBASE",
		color: "#f0db4f",
		delay: 3600,
		aniDelay: "3.6s",
		top: "10px",
		left: "770px",
	},
	{
		icon: git,
		name: "GIT",
		color: "#f0db4f",
		delay: 3800,
		aniDelay: "3.8s",
		top: "110px",
		left: "770px",
	},
	{
		icon: github,
		name: "GITHUB",
		color: "#f0db4f",
		delay: 4000,
		aniDelay: "4s",
		top: "210px",
		left: "770px",
	},
];

export const theme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					"&.outerBox": {
						"@keyframes SkillIconAnimation": {
							"0%": {
								transition: "transform .2s",
								transform: "scale(0.5)",
							},
							"100%": {
								transition: "transform .2s",
								transform: "scale(1.3)",
							},
						},
						"&:hover": {
							"& .innerBox": {
								animation: `SkillIconAnimation 1s 1`,
								transition: "transform .2s",
								transform: "scale(1.3)",
							},
						},
					},
				},
			},
		},
	},
});
