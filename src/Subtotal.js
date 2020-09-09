import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
	const [{ basket }] = useStateValue();
	const [price, setPrice] = useState(0);

	useEffect(() => {
		setPrice(0);
		basket.forEach((v) => {
			setPrice((price) => price + v.price);
		});
	}, [basket]);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items) &nbsp;
							<strong>{price}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
