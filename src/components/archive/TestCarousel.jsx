import React, { Children, useEffect, useRef, useState } from "react";

const useResizeWatcher = (callback, ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(() => callback(ref.current));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, ref]);
};

const TestCarousel = ({
  children,
  breakpoints,
  centerMode = false,
  rewindAtEnd = true,
  debug = false,
  className = "",
  style = {},
}) => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const childArray = Children.toArray(children);
  const itemCount = childArray.length;

  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [gapPercent, setGapPercent] = useState(0);
  const [jumpSize, setJumpSize] = useState(0);

  useResizeWatcher((elem) => setContainerWidth(elem.offsetWidth), containerRef);

  useEffect(() => {
    if (!breakpoints || Object.keys(breakpoints).length === 0) return;

    let breakpoint = Object.values(breakpoints).reduce(
      (acc, curr) =>
        containerWidth < curr.maxWidth && curr.maxWidth < acc.maxWidth
          ? curr
          : acc,
      Object.values(breakpoints)[0]
    );

    let newGap = breakpoint.gap || 0;
    let capacity = centerMode ? (breakpoint.capacity || 1) + 0.5 : breakpoint.capacity || 1;
    let newGapPercent = (newGap / containerWidth) * 100;
    let availableWidth = 100 - newGapPercent * (capacity - 1);
    let newItemWidth = availableWidth / capacity;

    setGapPercent(newGapPercent);
    setItemWidth(newItemWidth);
    setJumpSize(breakpoint.jumpSize);
  }, [containerWidth, breakpoints, centerMode]);

  useEffect(() => {
    let stepSize = itemWidth + gapPercent;
    let newTranslation = stepSize * index;

    if (centerMode) {
      let centeredWidth = stepSize * Math.floor(breakpoints.capacity) - gapPercent;
      newTranslation -= (100 - centeredWidth) / 2;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${Math.max(newTranslation, 0)}%)`;
      trackRef.current.style.gap = `${gapPercent}%`;
    }
  }, [index, itemWidth, gapPercent, breakpoints, centerMode]);

  const resetAutoScroll = () => {
    console.log("autoscroll aye")
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      console.log("slafjasdlkfjasoifhaposdfjasofdjopi")
      setIndex((prevIndex) => (prevIndex + jumpSize) % itemCount);
    }, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [index]);

  const moveTrack = (direction) => () => {
    resetAutoScroll();
    setIndex((prevIndex) => {
      let newIndex = prevIndex + direction * jumpSize;
      return newIndex < 0 ? 0 : newIndex >= itemCount ? 0 : newIndex;
    });
  };

  return (
    <div className={`${className} w-full overflow-hidden relative`} style={style}>
      {debug && (
        <div>
          <div>Index: {index}</div>
          <div>Container Width: {containerWidth}px</div>
          <div>Item Width: {itemWidth}%</div>
          <div>Translation: {index * (itemWidth + gapPercent)}%</div>
        </div>
      )}
      <div ref={containerRef} className="w-full">
        <div ref={trackRef} className="flex transition-all duration-1000">
          {childArray.map((child, i) => (
            <div key={i} style={{ width: `${itemWidth}%` }} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
      {index > 0 && (
        <div className="top-0 left-0 w-1/8 h-full absolute transition-all duration-300 hover:bg-black/10" onClick={moveTrack(-1)}>
          <div className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 absolute bg-white/50 hover:bg-white w-20 aspect-square rounded-full flex items-center justify-center">
            {"<"}
          </div>
        </div>
      )}
      <div className="left-full transform -translate-x-full top-0 h-full w-1/8 absolute transition-all duration-300 hover:bg-black/10" onClick={moveTrack(1)}>
        <div className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 absolute bg-white/50 hover:bg-white w-20 aspect-square rounded-full flex items-center justify-center">
          {">"}
        </div>
      </div>
    </div>
  );
};

export default TestCarousel;
