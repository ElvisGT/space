import React from "react";
import { useSelector } from "react-redux";
import { active } from "../Slices/menuSlice";
import { useDispatch } from "react-redux";
import { Menu } from '../components/Menu';
import { Link } from 'react-router-dom';



export const Header = () => {
	const menu = useSelector((state) => state.menu.value);
	const notification = useSelector((state) => state.notification.value);
	const dispatch = useDispatch();

	const handleMenu = () => {
		dispatch(active());
		window.scroll(0, 0);
	};

	return (
		<div className="Header">
			<h1 className="Header-gretting">Mi Espacio</h1>
			<Link to="/login"><img src="https://i.ibb.co/2M9V0wm/icons8-usuario-30.png" alt="user"/></Link>
			{!menu
				? 
					<>
						{notification  && 
							<p className="Header-notification notification-menu-closed">!</p>
						}
						
						<img
							src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png"
							alt="icono de menu"
							className="Header-menu-icon"
							onClick={handleMenu}
						/>
					</>
			 	: 
					<>
						<div className="background-dark" onClick={handleMenu}></div>
						<Menu event={ handleMenu } />
					</>
			}
		</div>
	);
};
