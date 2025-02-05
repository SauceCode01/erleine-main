import React, { Children } from "react";

const Card = ({ style, className, children, width }) => {
	const styles = Object.assign({}, style, { width: `${width}%` });

	return (
		<div style={styles} className={ " shrink-0 "}>
			<div className={`${className} w-full aspect-3/4 rounded-2xl`}>
				Card
				{children}
        children count:
        {Children.count(children)}
			</div>
		</div>
	);
};

export default Card;
