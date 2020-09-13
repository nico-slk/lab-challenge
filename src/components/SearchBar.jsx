import React, { useState } from 'react';


function SearchBar({ onSearch }) {
	const [cat, setCat] = useState("")

	return (
		<div className="row">
			<form className="form-search" onSubmit={(e) => {
				e.preventDefault();
				onSearch(cat);
				setCat("")
			}}>
				<input type="text" className="autocomplete center-align yellow lighten-1" placeholder="..." id="buscador" value={cat} onChange={e => setCat(e.target.value)} />
				{/* <label for="buscador">Buscar</label> */}
				<button type="submit search" className="btn waves-effect waves-light"> BUSCAR CATEGORIA </button>
			</form>
		</div>
	)
}

export default SearchBar;