import React from 'react';
import './top-navbar.css';

export default function TopNavbar(props) {
	return(
		<nav>
			<ul>
				<li>
					<a className="how-to-play">How to play</a>
				</li>
				<li>
					<a className="start-new-game" onClick={e => e.props.onRestartGame()}>New Game</a>
				</li>
			</ul>
		</nav>

		);
}