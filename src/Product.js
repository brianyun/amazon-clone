import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
	const addToBasket = () => {
		console.log("hello basket");
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>

				<div className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</div>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => {
							return <p>&#11088;</p>;
						})}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={() => addToBasket()}>Add to basket</button>
		</div>
	);
};

export default Product;
