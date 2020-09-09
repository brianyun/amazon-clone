import React from "react";
import "./BasketItem.css";
import { useStateValue } from "../reducers/StateProvider";

const BasketItem = () => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = (index) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			index: index,
		});
	};

	return (
		<div className="basketItem">
			{basket.map((b, index) => {
				return (
					<>
						<div className="basketItem__container">
							<img src={b.image} alt="" />

							<div className="basketItem__info">
								<p>{b.title}</p>

								<div className="basketItem__price">
									<small>$</small>
									<strong>{b.price}</strong>
								</div>

								<div className="basketItem__rating">
									{Array(b.rating)
										.fill()
										.map((_, i) => {
											return <p>&#11088;</p>;
										})}
								</div>

								<button
									onClick={() => {
										removeFromBasket(index);
									}}
								>
									Remove from cart
								</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default BasketItem;
