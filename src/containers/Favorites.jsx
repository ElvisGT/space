import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_card } from "../Slices/favoritesSlice";

export const Favorites = () => {
	const favorites = useSelector((state) => state.favorites.value);
	const domain_img = "https://image.tmdb.org/t/p/w220_and_h330_face/";
	const dispatch = useDispatch();

	const handleRemove = (card) => {
		dispatch(remove_card(card));
	};

	const deleted_duplicates = [...new Set(favorites)]; //Esto es para eliminar duplicados

	return deleted_duplicates.length > 0 ? (
		deleted_duplicates.map((item) => (
			<article
				key={item.id}
				className="sections-card"
				onClick={() => handleRemove(item)}
			>
				<img
					className="sections-card-img"
					src={domain_img + item.poster_path}
					alt={item.original_title}
				/>
				<p className="sections-card-title">Titulo: {item.original_title}</p>
				<p className="sections-card-description">
					Descripcion: {item.overview}
				</p>
				<p>
					Valoracion:{" "}
					<span className="sections-card-valoration">{item.vote_average}</span>
				</p>
				<p className="sections-card-release">
					Fecha de salida: {item.release_date}
				</p>
			</article>
		))
	) : (
		<h1>Empty</h1>
	);
};
