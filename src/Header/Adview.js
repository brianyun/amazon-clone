import React from "react";
import "./Adview.css";

const Adview = () => {
	return (
		<div className="adview">
			<div className="adview__main">
				<img
					src="https://cdn.mos.cms.futurecdn.net/6901c52336044e10ac950f50b246ce77.jpg"
					alt=""
				/>
			</div>
			<div className="adview__close">
				<button>X</button>
			</div>
		</div>
	);
};

export default Adview;
