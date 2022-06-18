import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routers from "./Routes.js";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ToastContainer />
		<Routers />
	</React.StrictMode>
);
