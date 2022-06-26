import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_card } from "../Slices/favoritesSlice";
import { Card } from "../components/Card";
import { setFalseNotification } from '../Slices/notificationSlice';

export const Favorites = () => {
	const favorites = useSelector((state) => state.favorites.value);
	const dispatch = useDispatch();
	
	const handleRemove = (card) => {
		dispatch(remove_card(card));
	};

	useEffect(() => {
		if (window.location.hash === "#/favorites") {
			dispatch(setFalseNotification());
		};
		
	}, []);

	const clearDuplicates = [...new Set(favorites)]; //Esto es para eliminar duplicados
	
	
	return (
		<div className="Favorites">
			<h1 className="Favorites-title">Mis Favoritos({ clearDuplicates.length })</h1>
			<div className="Favorites-section">
				{clearDuplicates.length > 0 ? (
					clearDuplicates.map((item) => (
						<Card {...item} key={item.id} event={() => handleRemove(item)} />
					))
				) : (
					<h2 className="Favorites-empty">Sin articulos</h2>
				)}
			</div>
		</div>
	);
};
