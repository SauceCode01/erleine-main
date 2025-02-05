import React from "react";


const LoadMoreCard = ({ handleOnCLick=()=>{} }) => {

	return (
		<div className="w-full" onClick={handleOnCLick()}>
			<div className="aspect-3/5  flex-col  bg-gray-300 shadow-md hover:shadow-lg shadow-gray-400 overflow-clip cursor-pointer transition-all duration-200 flex items-center justify-center">
				
        See More...
			</div>
		</div>
	);
};

export default LoadMoreCard;
