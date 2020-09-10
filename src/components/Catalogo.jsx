import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'

function Catalogo(props) {
	const [ord, setOrd] = useState({})

	useEffect(() => {
		setOrd(props.state)
	}, [props.state])

	function sortByPriceAsc() {

		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (a.price > b.price) ? 1 : -1)
			})
			console.log(ord)
		}
		console.log(ord)
	}
	function sortByPriceDesc() {

		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (b.price > a.price) ? 1 : -1)
			})
			console.log(ord)
		}
		console.log(ord)
	}

	return (
		<div>
			{console.log(ord)}
			<button type="submit" className="btn btn-primary" onClick={() => sortByPriceAsc()}>
				Menor a Mayor
          	</button>
			<button type="submit" className="btn btn-primary" onClick={() => sortByPriceDesc()}>
				Mayor a Menor
          	</button>
			{ord.results ? ord.results.map((e) =>
				<ProductCard
					key={e.id}
					img={e.thumbnail}
					title={e.title}
					price={e.price}
					currentId={e.currency_id}
					availableQuantity={e.available_quantity}
				/>
			) : false}
		</div>
	)
}

export default Catalogo;