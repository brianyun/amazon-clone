import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../reducers/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<div className="checkoutProduct__container">
				<img src={image} alt="" />

				<div className="checkoutProduct__info">
					<p>{title}</p>

					<div className="checkoutProduct__price">
						<small>$</small>
						<strong>{price}</strong>
					</div>

					<div className="checkoutProduct__rating">
						{Array(rating)
							.fill()
							.map((_, i) => {
								return <p>&#11088;</p>;
							})}
					</div>
					{!hideButton && (
						<button
							onClick={() => {
								removeFromBasket();
							}}
						>
							Remove from cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default CheckoutProduct;
