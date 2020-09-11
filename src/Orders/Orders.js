import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../firebase/firebase";
import { useStateValue } from "../reducers/StateProvider";
import Order from "./Order";

const Orders = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			console.log("useEffect in process...");

			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			console.log("useEffect >>> if(user) is false");
			setOrders([]);
		}
	}, [user]);

	return (
		// firebase real-time db (firestore)
		<div className="orders">
			<h1>Your Orders</h1>

			<div className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
};

export default Orders;
