import React, { useRef, useState } from "react";

const DragScrollContainer = ({ children, className = "", style = {} }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevents text selection
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevents unwanted text selection
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust speed factor
    containerRef.current.scrollLeft = scrollLeft - walk;
    console.log(scrollLeft - walk)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ ...style, scrollBehavior: "smooth" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default DragScrollContainer;
