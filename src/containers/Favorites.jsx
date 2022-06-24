import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_card } from "../Slices/favoritesSlice";
import { Card } from "../components/Card";

export const Favorites = () => {
	const favorites = useSelector((state) => state.favorites.value);
	const dispatch = useDispatch();

	const handleRemove = (card) => {
		dispatch(remove_card(card));
	};

	const deleted_duplicates = [...new Set(favorites)]; //Esto es para eliminar duplicados

	return (
		<div className="Favorites">
			<h1 className="Favorites-title">Mis Favoritos</h1>
			<div className="Favorites-section">
				{deleted_duplicates.length > 0 ? (
					deleted_duplicates.map((item) => (
						<Card {...item} key={item.id} event={() => handleRemove(item)} />
					))
				) : (
					<h2 className="Favorites-empty">Sin articulos</h2>
				)}
			</div>
		</div>
	);
};
