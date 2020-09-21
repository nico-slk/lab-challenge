import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
	return (
		<div className="card z-depth-3">
			<div className="row">
				<div className="card-image waves-block waves-light col l10 push-l1 m12 s10 push-s1 center-aling" >
					<img src={props.img} alt="" className="activator center-aling" />
				</div>
			</div>
			<div className="card-content">
				<p className="card-title truncate">{props.title}</p>
				<Link to="/" className="btn-floating btn-large halfway-fab waves-effect waves-light light-blue lighten-2 teal" >
					<i className="material-icons activator">arrow_drop_up</i>
				</Link>
			</div>
			<div className="card-reveal">
				<p className="card-title">{props.title}</p>
				<h5>${props.price} {props.currentId}</h5>
				<p className="red-text darken-2">stock: {props.availableQuantity}</p>
				<p className="teal-text">Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
			</div>
		</div>
	)
}


export default ProductCard