import React from "react";

const LiftedContainer = ({ children }) => {
	return (
		<div className="w-full p-5 rounded-2xl bg-white shadow-xl shadow-gray-500">
			{children}
		</div>
	);
};

export default LiftedContainer;
