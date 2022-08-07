import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import NotFound from "./notFound/NotFound";
import Skills from "./skills/Skills";
import Work from "./work/Work";

function Container() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Container;
