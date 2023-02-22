import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	//your component here
	return (
		/*string interpolation in order to dynamically set the class 
		name of the div element based on the color prop passed to 
		the component.
		The alert class is always present, while the 
		alert-${props.color} is dynamically set using the value 
		of props.color. So if props.color is set to "red", 
		for example, then the class name of the div element 
		would be set to alert alert-red.

        This is a very common pattern in React, where we want 
		to dynamically set the class name of an element based on 
		some props or state values. It allows us to keep our code DRY
		 (Don't Repeat Yourself), since we don't need to hard-code 
		 different class names for each variation of the component.
		*/
		<div className={`alert alert-${props.color}`} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="danger" />
		<Alert text="Well, it is not that bad after all!" color="warning" />
	</div>,
	document.querySelector("#myDiv")
);
