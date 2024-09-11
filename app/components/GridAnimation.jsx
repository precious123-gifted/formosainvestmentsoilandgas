import React, { useState, useEffect, useRef } from 'react';
import styles from './GridAnimation.module.css'; // Import custom CSS module

function GridAnimation() {
  const [gridElements, setGridElements] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const elementCount = Math.floor(window.innerHeight / 10); // Adjust based on desired number of elements

    const elements = Array.from({ length: elementCount }, (_, index) => (
      <div
        key={index}
        className={`${styles.gridItem} bg-gradient-to-r from-[#080e0f] to-[#0d1618] hover:opacity-70`}
      />
    ));

    setGridElements(elements);
  }, []);

  useEffect(() => {
    const animateElement = () => {
      const randomIndex = Math.floor(Math.random() * gridElements.length);
      const element = gridRef.current.children[randomIndex];

      element.classList.add(styles.fadein);

      setTimeout(() => {
        element.classList.remove(styles.fadein);
      }, 2000); // Adjust fadeout duration
    };

    const intervalId = setInterval(animateElement, 50);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [gridElements]);

  return (
    <div ref={gridRef} className={styles.gridContainer}>
      {gridElements}
    </div>
  );
}

export default GridAnimation;