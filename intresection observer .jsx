import React, { useRef, useEffect } from 'react'

function MainProvider({ children }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);

        if (entry.isIntersecting) {
          //do your actions here
          console.log('It works!')
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <main>
     <div className="Section-item" id="firstItem"></div>
     <div className="Section-item" ref={ref} id="secondItem"></div>
     <div className="Section-item" id="thirdItem"></div>
    </main>
  );
}
