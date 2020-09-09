import React from "react";
import "./Adview.css";

const Adview = () => {
	const closeAdview = () => {
		console.log("closeAdview >>>");

		document.querySelector(".adview").style.display = "none";
	};
	return (
		<div className="adview">
			<div className="adview__black"></div>
			<div className="adview__content">
				<img
					src="https://www.bmconsulting.in/blog/wp-content/uploads/2018/07/drive-sales-to-amazon.jpg"
					alt=""
				/>
				<div className="adview__close">
					<button
						onClick={() => {
							closeAdview();
						}}
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

export default Adview;
