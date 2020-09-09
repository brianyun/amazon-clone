import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";

import { useStateValue } from "./reducers/StateProvider";

function App() {
	const [{ isDark }] = useStateValue();

	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
