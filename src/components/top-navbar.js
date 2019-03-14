import React from 'react';
import './top-navbar.css';

export default function TopNavbar(props) {
	return(
		<nav>
			<ul>
				<li>
					<a href="#what" className="how-to-play">How to play</a>
				</li>
				<li>
					<a href="#guessFeedback" className="start-new-game" onClick={() => props.onRestartGame()}>New Game</a>
				</li>
			</ul>
		</nav>

		);
}