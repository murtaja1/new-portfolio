import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import CNavBar from "./navBar/CNavBar";
import NotFound from "./notFound/NotFound";
import About from "./about/About";
import Projects from "./projects/Projects";

function Container() {
	return (
		<div style={{ overflow: "hidden" }}>
			<BrowserRouter>
				<CNavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Container;
