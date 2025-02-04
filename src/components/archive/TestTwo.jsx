import React, { useEffect } from "react";
import { useRef } from "react";

const TestTwo = () => {
  let myref = useRef(null);

  useEffect(() => {
    if (!myref.current) return;

    console.log("this is test two", myref.current.scrollWidth)

  }, [])


	return (
		<>
			<div id="element" className="bg-amber-300 h-20 w-100">
				<div 
        ref={myref}
        id="innerElement" className="bg-sky-200 flex">
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
          <div className="w-30 h-30 border-1   shrink-0 mr-1">
            content
          </div>
				</div>
			</div>
		</>
	);
};

export default TestTwo;
