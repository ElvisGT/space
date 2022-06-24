import React from "react";
import { useDispatch } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { add_card } from "../Slices/favoritesSlice";

export const Home = () => {
	const domain_img = "https://image.tmdb.org/t/p/w220_and_h330_face/";
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
							<article
								key={item.id}
								className="sections-card"
								onClick={() => handleAdd(item)}
							>
								<img
									className="sections-card-img"
									src={domain_img + item.poster_path}
									alt={item.original_title}
								/>
								<p className="sections-card-title">
									Titulo: {item.original_title}
								</p>
								<p className="sections-card-description">
									Descripcion: {item.overview}
								</p>
								<p>
									Valoracion:{" "}
									<span className="sections-card-valoration">
										{item.vote_average}
									</span>
								</p>
								<p className="sections-card-release">
									Fecha de salida: {item.release_date}
								</p>
							</article>
						))}
				</div>
			</div>

			<div className="Home-sections-container">
				<h2 className="Home-category">Mejor Valorados</h2>
				<div className="Home-sections">
					{data_top_rated !== undefined &&
						data_top_rated.map((item) => (
							<article key={item.id} className="sections-card">
								<img
									className="sections-card-img"
									src={domain_img + item.poster_path}
									alt={item.original_title}
								/>
								<p className="sections-card-title">
									Titulo: {item.original_title}
								</p>
								<p className="sections-card-description">
									Descripcion: {item.overview}
								</p>
								<p>
									Valoracion:{" "}
									<span className="sections-card-valoration">
										{item.vote_average}
									</span>
								</p>
								<p className="sections-card-release">
									Fecha de salida: {item.release_date}
								</p>
							</article>
						))}
				</div>
			</div>

			<div className="Home-sections-container">
				<h2 className="Home-category">Proximos Estrenos</h2>
				<div className="Home-sections">
					{data_upcoming !== undefined &&
						data_upcoming.map((item) => (
							<article key={item.id} className="sections-card">
								<img
									className="sections-card-img"
									src={domain_img + item.poster_path}
									alt={item.original_title}
								/>
								<p className="sections-card-title">
									Titulo: {item.original_title}
								</p>
								<p className="sections-card-description">
									Descripcion: {item.overview}
								</p>
								<p>
									Valoracion:{" "}
									<span className="sections-card-valoration">
										{item.vote_average}
									</span>
								</p>
								<p className="sections-card-release">
									Fecha de salida: {item.release_date}
								</p>
							</article>
						))}
				</div>
			</div>
		</div>
	);
};
