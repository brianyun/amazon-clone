import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div>
				<img src="/amazon-logo-transparent.png" alt="Amazon" />
			</div>
			<div>
				<input />
			</div>
			<div>
				<button>Sign In</button>
			</div>
			<div>
				<button>& Orders</button>
			</div>
			<div>
				<button>Prime</button>
			</div>
			<div>
				<button>Basket</button>
			</div>
		</div>
	);
};

export default Header;
