import React from 'react';
import SearchBar from './SearchBar.jsx';



function Nav(props) {

	return (
		<div className="container">
			<nav className="row">
				<div className="blk col s8 push-s2">
					<div className="center-align">
						<div className="blk input-field col s12">
							<SearchBar className="center-align" onSearch={props.onSearch} />
						</div>
					</div>
				</div>
				{/* <div class="row">
					<div class="col s4">
						<div class="row">
							<div class="input-field col s12">
								
							</div>
						</div>
					</div>
				</div> */}
			</nav>
		</div>
	);
}

export default Nav;