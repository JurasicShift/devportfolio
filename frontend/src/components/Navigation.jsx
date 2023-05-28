import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';
import Icons from './Icons';
import useViewport from '../hooks/useViewport';
//ad9eab //af913f color: '#e27429',
const activeStyle = {
	opacity: "1"
};
const styleNavOpen = {
	left: '0px',
};
const styleNavClosed = {
	left: '-60px',
};

const flexNavOpen = {
	left: '0px',
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
};

const navHeight100 = {
	height: "100%"
}

const navHeight0 = {
	height: "0%"
}

const navHeight300 = {
	height: "300px"
}

const burgerClosed = 'fas fa-bars';

const burgerOpen = 'fas fa-times';

function Navigation() {
	const [openNav, setOpenNav] = useState(false);
	const [togElement, setTogElement] = useState(burgerClosed);
	const [togOpacity, setTogOpacity] = useState('0');
	const { width } = useViewport();
	const breakpoint1 = 650;

	const handleToggleClick = () => {
		const navState = openNav;
		setOpenNav(!navState);
	};

	useEffect(() => {
		if (openNav === false) {
            navClose();
	
		}

		if (openNav === true) {
            navOpen();

		}
	}, [openNav]);

    function navOpen() {
        setTogOpacity('0');
		const timer = setTimeout(() => {
				setTogElement(burgerOpen);
				setTogOpacity('1');
			}, 500);
            return () => clearTimeout(timer);
    }

    function navClose() {
        setTogOpacity('0');
	    const timer = setTimeout(() => {
				setTogElement(burgerClosed);
				setTogOpacity('1');
			}, 500);
            return () => clearTimeout(timer);
    }

	return (
		<div className="navLayout" style={width <= breakpoint1 ? openNav === true ? navHeight100 : navHeight0 : navHeight300} >
			<div
				className={width <= breakpoint1 ? openNav === true ? "navSmall navSmallHeight": "navSmall" : "navigation"}
				id="navigation"
				style={width > breakpoint1 ? openNav === true ? styleNavOpen : styleNavClosed : flexNavOpen }
			>
				<ul>
					<li>
						<NavLink
							className="link"
							to={'/'}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={width <= breakpoint1 ? handleToggleClick : null}
						>
							<span className="icon">
								<i className="fas fa-home"></i>
							</span>
							<span className="title">Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							to={'/about'}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={width <= breakpoint1 ? handleToggleClick : null}
						>
							<span className="icon">
								<i className="fas fa-user-circle"></i>
							</span>
							<span className="title">About</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							to={'/projects'}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={width <= breakpoint1 ? handleToggleClick : null}
						>
							<span className="icon">
								<i className="fas fa-drafting-compass"></i>
							</span>
							<span className="title">Projects</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							to={'/tech'}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={width <= breakpoint1 ? handleToggleClick : null}
						>
							<span className="icon">
								<i className="fas fa-code-branch"></i>
							</span>
							<span className="title">Technology</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							to={'/contact'}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={width <= breakpoint1 ? handleToggleClick : null}
						>
							<span className="icon" >
								<i className="far fa-comments"></i>
							</span>
							<span className="title">Contact</span>
						</NavLink>
					</li>
				</ul>
				{width <= breakpoint1 ? <Icons /> : null}
			</div>
			<div className="toggle" id="toggle" onClick={handleToggleClick}>
				<div
					className="iconTog"
					id="iconTog"
					style={{opacity: togOpacity}}
				>
					<i className={togElement}></i>
				</div>
			</div> 
			<Outlet />
		
			{/* <Icons /> */}
		</div>
	);
}


export default Navigation;
