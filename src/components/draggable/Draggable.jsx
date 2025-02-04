import React, { useRef, useEffect, useState } from "react";

import img from "../assets/img1.png"

const Journal = () => {
  const journalRef = useRef(null);
  return (
  <>
    <div className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll">
      <div className="flex flex-col w-60">
        <h1 className="title">Title</h1>
        <p>Text</p>
      </div>
      <Draggable innerRef={journalRef} rootClass={"drag"}>
        <div className="flex flex-row overflow-hidden w-full" ref={journalRef}>
          <div className=" shrink-0">
            <div className="w-60 aspect-square bg-amber-400 rounded-2xl">
              yo
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60 aspect-square bg-amber-400 rounded-2xl">
              yo
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60 aspect-square bg-amber-400 rounded-2xl">
              yo
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60 aspect-square bg-amber-400 rounded-2xl">
              yo
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60 aspect-square bg-amber-400 rounded-2xl">
              yo
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  </>
)};

const Draggable = ({ innerRef, rootClass = "", children }) => {
  const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });
  const [isScrolling, setIsScrolling] = useState(false);
    const handleDragStart = (e) => {
        if (!ourRef.current) return
      const slider = ourRef.current.children[0];
        const startX = e.pageX - slider.offsetLeft;
        const startY = e.pageY - slider.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
        document.body.style.cursor = "grabbing"
    }
    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!ourRef.current) return
        document.body.style.cursor = "default"
    }
    const handleDrag = (e) => {
        if (!isMouseDown || ! ourRef.current) return;
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        const walkY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
        slider.scrollTop = mouseCoords.current.scrollTop - walkY;
        console.log(walkX, walkY)
    }

  return (
    <div ref={ourRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag} className={rootClass + "flex overflow-hidden"}>
      {children}
    </div>
  );
};


export default Journal