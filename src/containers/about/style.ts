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
	{
		icon: typescript,
		name: "TYPESCRIPT",
		delay: 50,
	},
	{
		icon: javascript,
		name: "JAVASCRIPT",
		delay: 100,
	},
	{
		icon: react,
		name: "REACT.JS and REACT NATIVE",
		delay: 150,
	},
	{
		icon: redux,
		name: "REDUX",
		delay: 200,
	},
	{
		icon: reactBootstrap,
		name: "React-bootstrap",
		delay: 250,
	},
	{
		icon: vueBootstrap,
		name: "Vue-bootstrap",
		delay: 300,
	},
	{
		icon: bootstrap,
		name: "BOOTSTRAP",
		delay: 350,
	},
	{
		icon: vue,
		name: "VUE",
		delay: 400,
	},
	{
		icon: html,
		name: "HTML",
		delay: 450,
	},
	{
		icon: css,
		name: "CSS",
		delay: 500,
	},
	{
		icon: material,
		name: "MATERIAL",
		delay: 550,
	},
	{
		icon: database,
		name: "DATABASE",
		delay: 600,
	},
	{
		icon: flutter,
		name: "FLUTTER",
		delay: 650,
	},
	{
		icon: dart,
		name: "DART",
		delay: 700,
	},
	{
		icon: postgres,
		name: "POSTGRES",
		delay: 750,
	},
	{
		icon: python,
		name: "PYTHON",
		delay: 800,
	},
	{
		icon: django,
		name: "DJANGO",
		delay: 850,
	},
	{
		icon: flask,
		name: "FLASK",
		delay: 900,
	},
	{
		icon: firebase,
		name: "FIREBASE",
		delay: 950,
	},
	{
		icon: git,
		name: "GIT",
		delay: 1000,
	},
	{
		icon: github,
		name: "GITHUB",
		delay: 1050,
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
