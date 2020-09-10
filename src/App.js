import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
