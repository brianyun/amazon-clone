import axios from "axios";

const instance = axios.create({
	//the API (cloud function) URL
	// baseURL: "http://localhost:5001/clone-690bc/us-central1/api/",
	baseURL: "https://us-central1-clone-690bc.cloudfunctions.net/api",
});

export default instance;
