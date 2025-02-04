import React, {
	Children,
	useEffect,
	useRef,
	useState,
	cloneElement,
} from "react";

// useResizeWatcher((element)=>{//do something with element}, elementreference)
import { useResizeWatcher } from "../../tools/ElementHooks";

const getDefaultNavigationButtons = () => ({
	prevNavigation: (
		<div className="top-0 left-0 w-1/8 h-[100%] absolute   transition-all duration-300 hover:bg-black/10 bg-black/0">
			<div className="left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]  transition-all duration-100 absolute bg-white/50 hover:bg-white  hover:shadow-black w-[50%] aspect-square rounded-full flex items-center justify-center">
				{"<"}
			</div>
		</div>
	),
	nextNavigation: (
		<div className="left-[100%] translate-x-[-100%] top-0 h-[100%] w-1/8  absolute   transition-all duration-300 hover:bg-black/10 bg-black/0">
			<div className="left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]  transition-all duration-100 absolute bg-white/50 hover:bg-white  hover:shadow-black w-[50%] aspect-square rounded-full flex items-center justify-center">
				{">"}
			</div>
		</div>
	),
});

// drag to scroll feature for mobile
// optimize center mode
// add pagination (element that accepts {index} as a prop)

// IMPLEMENT function goToIndex(index) 

const Carousel = ({
	children,
	breakpoints = [
		{
			minWidth: 500,
			capacity: 3,
			jumpSize: 3,
			gap: 20,
		},
	],
	centerMode = true,
	rewindAtEnd = true,
	className = "",
	itemsClassName = "",
	style = {},
	navigation = getDefaultNavigationButtons(),
	pagination = false,
	rewindOnInsufficientItem = true,
	prevOnFirstWillJumpToLast = false,
	autoplay = {
		direction:1, 
		stepSize:1,
		duration:5000
	},
	flinchOnHover = false, // NOT YET IMPLEMENTED
}) => {
	// navigation.nextNavigation.addEventListener("click", () => {console.log("next navigation is clicked lol")})

	// references
	let trackRef = useRef();
	let containerRef = useRef();

	// items
	const childArray = Children.toArray(children);
	let itemCount = Children.count(children);

	// states
	const [index, setIndex] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);
	const [itemWidth, setItemWidth] = useState(0);
	const [gapPercent, setGapPercent] = useState(0);
	const [jumpSize, setJumpSize] = useState(0);
	const [itemContainerCapacity, setItemContainerCapacity] = useState(0);

	const timeoutRef = useRef();

	// initialize from parameter
	const CalculateFromBreakpoint = () => {
		// determine breakpoint
		if (!breakpoints || Object.keys(breakpoints).length === 0) return;

		let breakpoint = Object.values(breakpoints).reduce((acc, curr) => {
			if (containerWidth > curr.minWidth && curr.minWidth > acc.minWidth)
				return curr;
			else return acc;
		}, Object.values(breakpoints)[0]);

		let newGap = breakpoint.gap || 0;
		let capacity = centerMode
			? (breakpoint.capacity || 1) + 0.5
			: breakpoint.capacity || 1;
		let newGapPercent = (newGap / containerWidth) * 100;
		let availableWidth = 100 - newGapPercent * (capacity - 1);
		let newItemWidth = availableWidth / capacity;

		setGapPercent(newGapPercent);
		setItemWidth(newItemWidth);
		setJumpSize(breakpoint.jumpSize);

		setItemContainerCapacity(capacity);
	};

	// monitor the size of CONTAINER
	useResizeWatcher((elem) => setContainerWidth(elem.offsetWidth), containerRef);

	// calculate values after SIZE CHANGE
	useEffect(() => {
		CalculateFromBreakpoint();
	}, [containerWidth]);

	// calculate TRANSLATION
	useEffect(() => {
		// console.log("step 3 calculate translation");
		let stepSize = itemWidth + gapPercent;
		let newTranslation = stepSize * index;

		if (centerMode) {
			let centeredWidth =
				stepSize * Math.floor(itemContainerCapacity) - gapPercent;
			newTranslation -= (100 - centeredWidth) / 2;
		}

		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(-${Math.max(
				newTranslation,
				0
			)}%)`;
			trackRef.current.style.gap = `${gapPercent}%`;
		}
	}, [index, itemWidth, gapPercent]);

	// listen to buttons
	const moveTrack =
		(direction = 1, step = jumpSize) =>
		() => {
			let newIndex = index + direction * step;

			if (newIndex < 0)
				if (prevOnFirstWillJumpToLast) newIndex = itemCount + newIndex;
				else newIndex = 0;

			if (rewindAtEnd) {
				if (newIndex >= itemCount) newIndex = 0;

				if (rewindOnInsufficientItem) {
					// if insufficient cards, rewind to first card
					if (itemCount - index <= itemContainerCapacity) newIndex = 0;
				}
			}

			setIndex(newIndex);
		};

	useEffect(() => {
		if (autoplay) {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				moveTrack(autoplay.direction, autoplay.stepSize)();
			}, autoplay.duration);
		}
	}, [index, containerWidth, autoplay]);

	return (
		<>
			{/* wrapper  */}
			<div
				id="wrapper"
				className={`${className} w-full overflow-x-clip relative`}
				style={style}
			>
				{/* container  */}
				<div
					id="container"
					ref={containerRef}
					className="w-full border-amber-300"
				>
					{/* track */}
					<div
						id="track"
						ref={trackRef}
						className={`flex transition-all duration-1000 ease-out`}
					>
						{childArray.map((child, index) => {
							return (
								<div style={{ width: `${itemWidth}%` }} className="shrink-0">
									{cloneElement(child, {
										className: `${itemsClassName} ${child.props.className}`,
									})}
									{/* {child} */}
								</div>
							);
						})}
					</div>
				</div>
				{/* controls */}
				{navigation ? (
					<>
						{cloneElement(navigation.prevNavigation, {
							onClick: moveTrack(-1),
						})}
						{cloneElement(navigation.nextNavigation, { onClick: moveTrack(1) })}
					</>
				) : (
					""
				)}

				{/* pagination  */}
				{pagination ? <div className="w-30 bg-orange-300">{index}</div> : ""}
			</div>
		</>
	);
};

export default Carousel;
