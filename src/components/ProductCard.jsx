import React from 'react';

function ProductCard(props) {
	return (
		< div className="card-body">
			<div>
				<img src={props.img} alt="" />
			</div>
			<h4>{props.title}</h4>
			<h5>$ {props.price}{props.currentId}</h5>
			<p>stock: {props.availableQuantity}</p>
		</div >
	)
}


export default ProductCard