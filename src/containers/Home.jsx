import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useDispatch, useSelector} from "react-redux";
import { add_card } from "../Slices/favoritesSlice";
import { setTrueNotification } from "../Slices/notificationSlice";
import { HomeSections } from "../components/HomeSections";

export const Home = () => {
	const API_Popular = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	const API_top_rated = `https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	const API_upcoming = `https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES`;
	
	const data_popular = useFetch(API_Popular);
	const data_top_rated = useFetch(API_top_rated);
	const data_upcoming = useFetch(API_upcoming);
	const dispatch = useDispatch();
	const favorites = useSelector(state => state.favorites.value);

	
	const handleAdd = (card) => {
		const isCardInFav = favorites.find(item => item.id === card.id);
		
		if (!isCardInFav) {
			dispatch(add_card(card));
			dispatch(setTrueNotification());
		}
		
	};


	return (
		<div className="Home">
			<div className="Home-introduction-container">
				<div className="Home-introduction">
					<h1 className="Home-introduction-title">Bienvenido al sitio <span className="Home-introduction-MiEspacio">Mi Espacio</span></h1>	
					<p className="Home-introduction-description">
						Aqui podras encontrar la pelicula que desees
						y saber informacion sobre la fecha de lanzamiento, 
						sinopsis, entre otras cosas.
					</p>
					<h2 className="Home-introduction-includes">Ademas: </h2>
					<ul className="Home-introduction-list">
						<li>Tiene la funcionalidad de agregar a favoritos con solo tocar
							la pelicula. De igual forma para borrar de la lista de favoritos</li>
						<li>Tiene un buscador en tiempo real en el que puedes encontrar la pelicula que desees</li>
					</ul>
				</div>
			</div>
				<HomeSections title={"Mas populares"}>
					{data_popular !== undefined &&
						data_popular.map((item) => (
							<Card {...item} key={item.id} event={() => handleAdd(item)} />
						))}
				</HomeSections>

				<HomeSections title={"Mejor valorados" }>
					{data_top_rated !== undefined &&
						data_top_rated.map((item) => (
							<Card {...item} key={item.id} event={() => handleAdd(item)} />
						))}
				</HomeSections>

				<HomeSections title={"Proximos estrenos" }>
					{data_upcoming !== undefined &&
						data_upcoming.map((item) => (
							< Card { ...item } key = { item.id } event = {() => handleAdd(item)} />
						))}
				</HomeSections>
		</div>
	);
};
