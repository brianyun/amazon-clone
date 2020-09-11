import React, { useState, useEffect } from "react";
import "./Payment.css";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../reducers/StateProvider";
import { getBasketTotal } from "../reducers/reducer";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Axios from "../axios";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		//generate the stripe secret that allows us to charge customer
		const getClientSecret = async () => {
			const response = await Axios({
				method: "post",
				//stripe expects the total in a currencies subunits (=100.00 dollars => 10,000 cents / 2dollars => 200 cents. therefore *100)
				url: `payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("SECRET is >>> ", clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();

		//blocks the 'enter' button on 'Buy Now'
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//destructure paymentIntent from response
				//paymentIntent = payment confirmation.

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				//reason why history.replace, not history.push? ==> cause we don't want people to come back to the payment page.
				history.replace("/orders");
			});
	};

	const handleChange = (event) => {
		//listen for changes in the CardEl
		//display any errors while typing
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>
					)
				</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, California</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{/* products */}
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								image={item.image}
								title={item.title}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button
									disabled={
										processing || disabled || succeeded
									}
								>
									<span>
										{processing ? (
											<p>Processing</p>
										) : (
											"Buy Now"
										)}
									</span>
								</button>
							</div>

							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
