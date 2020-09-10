import React from 'react';
import logo from '../mundo.svg';
import SearchBar from './SearchBar.jsx';



function Nav(props) {

	return (
		<nav>
			<img src={logo} className="App-logo" alt="logo" />
			<h1>TU PUTA MADRE</h1>
			<SearchBar onSearch={props.onSearch} />
		</nav>
	);
}

export default Nav;