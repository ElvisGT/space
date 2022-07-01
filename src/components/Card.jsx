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
			<p className="sections-card-title"><span>Título</span>: {original_title}</p>
			<p className="sections-card-description"><span>Descripción</span>: {overview}</p>
			<p>
				<span>Valoración:{" "}</span>
				<span className="sections-card-valoration">{vote_average}</span>
			</p>
			<p className="sections-card-release"><span>Fecha de salida</span>: {release_date}</p>
		</article>
	);
};
