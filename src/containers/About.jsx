import React from "react";

export const About = () => {
	return (
		<div className="About">
			<div className="About-card">
				<h2 className="About-title">Objetivos</h2>
				<p className="About-description">
					Este proyecto ha sido realizado con el principal objetivo
					de poner en practica algunas de las tecnologias frontend aprendidas por mi 
					en los ultimos meses.
				</p>
				<h2 className="About-title">Tecnoligias utilizadas</h2>
				<ul className="About-list">
					<li>React.js como base principal</li>
					<li>Redux ToolKit para el flujo de informacion</li>
					<li>API Rest para mostrar los datos</li>
					<li>Npm como instalador de paquetes</li>
				</ul>
				<h2 className="About-title">Agradecimientos</h2>
				<ul className="About-list">
					<li>Documentacion oficial de Redux ToolKit: <a href="@" target={"_blank"} rel="noreferrer" className="About-link">Enlace</a></li>
					<li>Iconos gracias a <a href="@" target={"_blank"} rel="noreferrer" className="About-link">Icons8</a></li>
					<li>Documentacion oficial de JavaScript: <a href="@" target={"_blank"} rel="noreferrer" className="About-link">Enlace</a></li>
				</ul>
			</div>
			
		</div>
	);
};
