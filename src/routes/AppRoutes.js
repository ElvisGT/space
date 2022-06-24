import React from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { Layout } from "../containers/Layout";
import { Home } from "../containers/Home";
import { Favorites } from "../containers/Favorites";
import { Explore } from "../containers/Explore";
import { About } from "../containers/About";
import "../static/css/styles.css";

export const AppRoutes = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/favorites" element={<Favorites />} />
						<Route exact path="/explore" element={<Explore />} />
						<Route exact path="/about" element={<About />} />
					</Routes>
				</Layout>
			</HashRouter>
		</Provider>
	);
};
