import { useEffect, useState, createRef, useRef, useLayoutEffect } from 'react'


export default function Home() {
  const [ref, setRef] = useState(useRef())

  useLayoutEffect(() => {
    const observer = new ResizeObserver(()=> {
      if(!ref.current) {
        console.log("not ready yet")
        return;
      }
      console.log("resize yay");
    })
    observer.observe(ref.current)
    return () => observer.disconnect();
  }, [])



  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div
        ref={ref}
        style={{
          margin: '50px',
          width: '70%',
          height: '70%',
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       hello world
      </div>

      <div>
      </div>
    </div>
  )
}
