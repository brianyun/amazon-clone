import React from "react";
import "./Footer.css";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import { useStateValue } from "../reducers/StateProvider";

const Footer = () => {
	const [{ isDark }, dispatch] = useStateValue();

	const toggleBtn = () => {
		dispatch({
			type: "TOGGLE_LIGHT",
		});
	};

	return (
		<div className="footer" onClick={() => toggleBtn()}>
			<NightsStayRoundedIcon />
		</div>
	);
};

export default Footer;
