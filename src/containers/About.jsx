import React from "react";

export const About = () => {
	return (
		<div className="About">
			<div className="About-card">
				<h2 className="About-title">Objetivos</h2>
				<p className="About-description">
					Este proyecto ha sido realizado con el principal objetivo
					de poner en práctica algunas de las tecnologías frontend aprendidas por mí 
					en los últimos meses.
				</p>
				<h2 className="About-title">Tecnoligías utilizadas</h2>
				<ul className="About-list">
					<li>React.js como base principal</li>
					<li>Redux ToolKit para el flujo de información</li>
					<li>API Rest para mostrar los datos</li>
					<li>Npm como instalador de paquetes</li>
				</ul>
				<h2 className="About-title">Agradecimientos</h2>
				<ul className="About-list">
					<li>Documentación oficial de Redux ToolKit: <a href="https://redux-toolkit.js.org/" target={"_blank"} rel="noreferrer" className="About-link">Enlace</a></li>
					<li>Iconos gracias a <a href="https://iconos8.es/" target={"_blank"} rel="noreferrer" className="About-link">Icons8</a></li>
					<li>Documentación oficial de JavaScript: <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target={"_blank"} rel="noreferrer" className="About-link">Enlace</a></li>
				</ul>
			</div>
			
		</div>
	);
};
