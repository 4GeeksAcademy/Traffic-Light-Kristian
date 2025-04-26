import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
			<div className="container cable"></div>
			<div className="card width-10 d-flex flex-column bg-secondary align-items-center">
				<button onClick={() => setColor("red")} className={`btn btn-${color === "red" ? 'danger' : 'dark'} rounded-circle p-0 m-2`} style={{width: "50px", height: "50px"}}></button>
				<button onClick={() => setColor("yellow")} className={`btn btn-${color === "yellow" ? 'warning' : 'dark'} rounded-circle p-0 m-2`} style={{width: "50px", height: "50px"}}></button>
				<button onClick={() => setColor("green")} className={`btn btn-${color === "green" ? 'success' : 'dark'} rounded-circle p-0 m-2`} style={{width: "50px", height: "50px"}}></button>
			</div>
			<button onClick={() => setColor(color == "red" ? "yellow" : color == "yellow" ? "green" : color == "green" ? "red" : "red")} className="btn btn-danger m-2">Click Me</button>
		</div>
	);
};
export default TrafficLight;