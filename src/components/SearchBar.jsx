import React, { useState } from 'react';


function SearchBar({ onSearch }) {
	const [cat, setCat] = useState("")

	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			onSearch(cat);
			setCat("")
		}}>
			<input type="text" value={cat} onChange={e => setCat(e.target.value)} />
			<input type="submit" value="Mostrar" />
		</form>
	)
}

export default SearchBar;