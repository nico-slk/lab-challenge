import React, { useState, useEffect } from 'react';
import Paginator from './paginator'

function Catalogo(props) {
	const [ord, setOrd] = useState({})

	useEffect(() => {
		Promise.resolve(props.state)
			.then(() => setOrd(props.state))
	}, [props.state])


	function sortByPriceAsc() {
		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (a.price > b.price) ? 1 : -1)
			})
		}
	}
	function sortByPriceDesc() {
		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (b.price > a.price) ? 1 : -1)
			})
		}
	}

	function filterByCondition(condition) {
		if (condition === 'nuevo') {
			setOrd({
				...ord,
				results: props.state.results.filter((e) => e.condition === "new")
			})
		}
		if (condition === 'usado') {
			setOrd({
				...ord,
				results: props.state.results.filter((e) => e.condition !== "new")
			})
		}
		if (condition === 'todos') {
			setOrd({
				...ord,
				results: props.state.results
			})
		}
	}

	return (
		<div className="container">
			<div className="row">
				<button type="submit" className="btn btn-primary col l4 m4 s12" onClick={() => filterByCondition('nuevo')}>
					Nuevos
          			</button>
				<button type="submit" className="btn btn-primary col l4 m4 s12" onClick={() => filterByCondition('usado')}>
					Usados
          			</button>
				<button type="submit" className="btn btn-primary col l4 m4 s12" onClick={() => filterByCondition('todos')}>
					Todos
          			</button>
			</div>
			<div className="row">
				<button type="submit" className="btn btn-primary col l6 m5 push-m1 s12 valign-wrapper" onClick={() => sortByPriceAsc()}>
					<i className="material-icons">arrow_drop_down</i>Menor a Mayor
          			</button>
				<button type="submit" className="btn btn-primary col l6 m5 push-m1 s12 valign-wrapper" onClick={() => sortByPriceDesc()}>
					<i className="material-icons">arrow_drop_up</i>Mayor a Menor
          			</button>
			</div>
			<div className="content">
				<div className="row">
					{ord.results ? <Paginator p={ord.results} /> : null}
				</div>
			</div>
		</div >
	)
}

export default Catalogo;