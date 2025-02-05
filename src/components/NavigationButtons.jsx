// h-[20%] rounded-full aspect-square flex items-center justify-center bg-white

const NavigationNext = ({ passedRef }) => {
	return (
		<div
			ref={passedRef}
			className="left-[100%] translate-x-[-100%] top-0 h-[100%] w-1/8  absolute   transition-all duration-300 hover:bg-black/10 bg-black/0 z-10"
		>
			<div className="left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]  transition-all duration-100 absolute bg-white/50 hover:bg-white  hover:shadow-black w-[50%] aspect-square rounded-full flex items-center justify-center">
				{">"}
			</div>
		</div>
	);
};

const NavigationPrev = ({ passedRef }) => {
	return (
		<buttom
			ref={passedRef}
			className="top-0 left-0 w-1/8 h-[100%] absolute   transition-all duration-300 hover:bg-black/10 bg-black/0 z-10"
		>
			<div className="left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]  transition-all duration-100 absolute bg-white/50 hover:bg-white  hover:shadow-black w-[50%] aspect-square rounded-full flex items-center justify-center">
				{"<"}
			</div>
		</buttom>
	);
};

export { NavigationNext, NavigationPrev };
