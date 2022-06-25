import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { add_card } from "../Slices/favoritesSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
	const API_Popular = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	const data_popular = useFetch(API_Popular);

	const API_top_rated = `https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	const data_top_rated = useFetch(API_top_rated);

	const API_upcoming = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	const data_upcoming = useFetch(API_upcoming);
	
	const dispatch = useDispatch();

	const handleAdd = (card) => {
	dispatch(add_card(card));
	};


	return (
		<div className="Home">
			<div className="Home-sections-container">
				<h2 className="Home-category">Mas populares</h2>
				<div className="Home-sections">
					{data_popular !== undefined &&
						data_popular.map((item) => (
							<Card {...item} key={item.id} event={() => handleAdd(item)} />
						))}
				</div>
			</div>

			<div className="Home-sections-container">
				<h2 className="Home-category">Mejor Valorados</h2>
				<div className="Home-sections">
					{data_top_rated !== undefined &&
						data_top_rated.map((item) => (
							<Card {...item} key={item.id} event={() => handleAdd(item)} />
						))}
				</div>
			</div>

			<div className="Home-sections-container">
				<h2 className="Home-category">Proximos Estrenos</h2>
				<div className="Home-sections">
					{data_upcoming !== undefined &&
						data_upcoming.map((item) => (
							<Card {...item} key={item.id} event={() => handleAdd(item)} />
						))}
				</div>
			</div>
		</div>
	);
};
