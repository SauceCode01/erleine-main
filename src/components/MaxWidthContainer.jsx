import React from "react";

import { widthBreakpoints } from "../config";

const MaxWidthContainer = ({ children, className }) => {
	return (
		<div className={`${widthBreakpoints} ${className} m-auto`}>{children}</div>
	);
};

export default MaxWidthContainer;
