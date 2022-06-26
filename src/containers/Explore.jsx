import React, { useState,useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from '../components/Card';
import { add_card } from "../Slices/favoritesSlice";
import { useDispatch } from "react-redux";
import { setTrueNotification } from "../Slices/notificationSlice";


export const Explore = () => {
	const [search, setsearch] = useState("a");
	const inputRef = useRef(null);
	const API_Search = `https://api.themoviedb.org/3/search/movie?api_key=f45c79601c26a15cfef52a1a31e4da6e&language=es-ES&query=${search}&page=1`;
	const data = useFetch(API_Search);
	const dispatch = useDispatch();
	let cardFinded = [];
	if (data !== undefined) { //Esto es para buscar coincidendicias
		cardFinded = data.filter(item => {
		return item.title.toLowerCase().includes(search.toLowerCase());
		});
	
	}
	
	if (search.length === 0) { //Si buscamos y borramos de pronto regresa al valor anterior
		setsearch("a");
	}
	

	const handleAdd = (card) => {
		dispatch(add_card(card));
		dispatch(setTrueNotification());
	};

	const handleSearch = () => {
		setsearch(inputRef.current.value);
	};

	return (
		<div className="Explore">
			<h1 className="Explore-title">Buscador de peliculas</h1>
			<div>
				<form>
					<label htmlFor="search_bar">
						<input id="search_bar"
								placeholder="Teclee la pelicula que desee"
								onChange={handleSearch}
								ref={ inputRef }
						/>
					</label>
				</form>
			</div>
			<div>
				{
					cardFinded.map(item => (
						<Card {...item} key={item.id} event={ () => handleAdd(item) } />
					))
				}
			</div>
		</div>
	);
};
