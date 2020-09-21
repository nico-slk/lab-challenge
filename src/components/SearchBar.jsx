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
				{/* <i className="material-icons col l1 m1 s1 valign-wrapper ">search</i> */}
				{/* <input type="text" className="autocomplete yellow lighten-2" placeholder="..." id="buscador" value={cat} onChange={e => setCat(e.target.value)} /> */}
				<input type="text" className="autocomplete center-align  yellow lighten-2" placeholder="..." id="buscador" value={cat} onChange={e => setCat(e.target.value)} />
				<button type="submit search" className="btn waves-effect waves-light btn-primary"> BUSCAR CATEGORIA </button>
			</form>

		</div>
	)
}

export default SearchBar;