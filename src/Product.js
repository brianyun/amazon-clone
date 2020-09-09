import React from "react";
import "./Product.css";

const Product = () => {
	const addToBasket = () => {
		console.log("hello basket");
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>The lean startup</p>

				<div className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</div>

				<div className="product__rating">
					<p>&#9734;</p>
				</div>
			</div>

			<img
				src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				alt=""
			/>

			<button onClick={() => addToBasket()}>Add to basket</button>
		</div>
	);
};

export default Product;
