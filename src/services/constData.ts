import collageScore from "../assets/projectImages/collageScore.png";
import iraqiStudent from "../assets/projectImages/iraqiStudent.png";
import weather from "../assets/projectImages/weather.png";
import find_yours from "../assets/projectImages/find.png";
import reehWeb from "../assets/projectImages/reehWeb.png";
import seatScore from "../assets/projectImages/seatScore.jpg";
import seatScorePort from "../assets/projectImages/seatScorePort.png";
import seatScoreMobile from "../assets/projectImages/seatScoreMobile.png";
import reehMobile from "../assets/projectImages/reehMobile.png";

export const tabs = [
	{ tab: "Home", delay: 90, link: "/" },
	{ tab: "Projects", delay: 60, link: "/projects" },
	{ tab: "About", delay: 40, link: "/about" },
	{ tab: "Contact", delay: 10, link: "/contact" },
];
export const mobileProjects = [
	{
		img: reehMobile,
		title: "Reeh Mobile App",
		cardDesc: "A delivery mobile app for Reeh company.",
		description:
			"A delivery mobile app for Reeh company I developed @ Integrated Path. It's for two kinds of customers. One is the vendor and the other is the courier. It includes User Authentication, Dashboards Screens for Courier and Vendor, All Deliveries Screens for Courier and Vendor, Form Screen, Balance Screen, Delivery Details Screens for Courier and Vendor and Product Screen. It's a cross platform mobile app, currently available on AppStore GooglePlay.",
		tools: ["Dart", "Flutter"],
		google:
			"https://play.google.com/store/apps/details?id=com.alrazeez.reehAPP&hl=en&gl=US",
		apple: "https://apps.apple.com/us/app/reeh/id1636255857",
		delay: 1000,
	},
	{
		img: seatScoreMobile,
		title: "Seat Score Mobile App",
		cardDesc: "A mobile app for employees attendance.",
		description:
			"A mobile app for employees attendance I participated in developing @ Integrated Path. It's a cross platform mobile app, currently available on AppStore GooglePlay. ",
		tools: ["Dart", "Flutter"],
		google:
			"https://play.google.com/store/apps/details?id=com.intpath.seatscore&hl=en&gl=US",
		apple: "https://apps.apple.com/us/app/seat-score/id1640483274",
		delay: 1000,
	},
];

export const projectsData = [
	{
		img: seatScorePort,
		title: "Seat Score Portfolio",
		cardDesc: "A web applications to show seat score features.",
		description:
			"A web applications to show seat score features with dynamic content.",
		tools: ["Typescript", "React.js", "Material UI", "CSS", "HTML"],
		link: "https://seat-score-portfolio.vercel.app/",
		repo: "",
		delay: 1000,
	},
	{
		img: seatScore,
		title: "Seat Score Web App",
		cardDesc:
			"A web applications for the Administration to manage employee attendance.",
		description:
			"A web applications for the Administration to manage employees attendance I developed @ Integrated Path. It includes User Authentication, Dashboard,Employee, Employee Profile, Attendance, Approve, Time Off Requests, Change Attendance Requests,  Location and Weekly Calendar pages.",
		tools: ["Typescript", "React.js", "Redux.js", "Material UI", "CSS", "HTML"],
		link: "https://seatscore-web-app.vercel.app/",
		repo: "",
		delay: 1000,
	},
	{
		img: reehWeb,
		title: "Reeh Web App",
		cardDesc: "A delivery web application for Reeh company.",
		description:
			"A delivery web application that I participated in developing for Reeh company @ Integrated Path.",
		tools: ["Typescript", "React.js", "Material UI", "CSS", "HTML"],
		link: "https://portal.alrazeez.com/login",
		repo: "",
		delay: 1000,
	},
	{
		img: find_yours,
		title: "Find Yours",
		cardDesc: "A web application that helps people find their",
		description:
			"With its unique idea, Find Yours is a web application that helps people find their lost items and allow others to share the items they find.",
		tools: ["JavaScrip", "React.js", "Material UI", "CSS", "HTML", "Firebase"],
		link: "https://findyours.netlify.app/",
		repo: "https://github.com/murtaja1/find_yours",
		delay: 1000,
	},
	{
		img: iraqiStudent,
		title: "The Iraqi Student",
		cardDesc: "A web app that contains the info about universities.",
		description:
			"A web app that contains the info about universities, collage, department or institute  that every Iraqi student need to know before applying.",
		tools: [
			"JavaScrip",
			"Vue.js",
			"Vue-Bootstrap",
			"python",
			"Django",
			"CSS",
			"HTML",
		],
		link: "https://iraqistudent.netlify.app/",
		repo: "https://github.com/murtaja1/iraqi-student-frontend",
		delay: 1200,
	},
	{
		img: weather,
		title: "Weather",
		cardDesc: "A user-friendly web application that tells you.",

		description:
			"A user-friendly web application that tells you the weather status for today and forecasts for the next five days only by typing your location.",
		tools: ["JavaScrip", "React.js", "React-Bootstrap", "CSS", "HTML"],
		link: "https://weatherapp-cpp-team.netlify.app/",
		repo: "https://github.com/murtaja1/weather_app_js",
		delay: 1400,
	},
	{
		img: collageScore,
		title: "The Score",
		cardDesc: "A web app developed to let student know.",

		description:
			"A web app developed to let student know the score of a collage, department or institute very easily by type the name only in Iraq.",
		tools: ["JavaScrip", "Vue.js", "Vue-Bootstrap", "CSS", "HTML"],
		link: "https://murtaja1.github.io/collage_score/",
		repo: "https://github.com/murtaja1/collage_score",
		delay: 1600,
	},
];
