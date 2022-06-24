import React from "react";

export const Card = ({
	poster_path,
	original_title,
	event,
	overview,
	vote_average,
	release_date,
}) => {
	const domain_img = "https://image.tmdb.org/t/p/w220_and_h330_face/";

	return (
		<article className="sections-card" onClick={event}>
			<img
				className="sections-card-img"
				src={domain_img + poster_path}
				alt={original_title}
			/>
			<p className="sections-card-title">Titulo: {original_title}</p>
			<p className="sections-card-description">Descripcion: {overview}</p>
			<p>
				Valoracion:{" "}
				<span className="sections-card-valoration">{vote_average}</span>
			</p>
			<p className="sections-card-release">Fecha de salida: {release_date}</p>
		</article>
	);
};
