import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState(null);

	function activeYellow() {
		setColor("yellow")
	};
	function activeRed() {
		setColor("red")
	}
	function activeGreen() {
		setColor("green")
	}

	return ();
};

export default TrafficLight;