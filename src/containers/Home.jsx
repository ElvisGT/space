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
