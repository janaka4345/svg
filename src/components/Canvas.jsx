import { useMemo, useEffect, useRef, useState } from "react";
let requestAnimationFrameId;
let x = 50;
let y = 50;
let svgRef;
let particleArray = [];
export default function Canvas(props) {
  svgRef = useRef(null);
  useMemo(() => {
    for (let i = 0; i < 30; i++) {
      let x = Math.random() * 400;
      let y = Math.random() * 400;
      let speedX = 5;
      let speedY = 2;

      particleArray.push(
        <circle
          key={i}
          // ref={svgRef}
          cx={`${x}`}
          cy={`${y}`}
          r="20"
          fill={`rgb(${Math.random() * 255},${Math.random() * 255},${
            Math.random() * 255
          })`}
        />
      );
    }
  }, []);

  useEffect(() => {
    console.log(particleArray);
    // Start the animation when the component mounts
    requestAnimationFrameId = requestAnimationFrame(animate);

    // Clean up the animation
    return () => cancelAnimationFrame(requestAnimationFrameId);
  }, []);

  return (
    <div>
      <svg width="400" height="400" style={{ border: "2px solid red" }}>
        {/* <circle
          ref={svgRef}
          cx={`${x}`}
          cy={`${y}`}
          r="40"
          stroke="green"
          strokeWidth="4"
          fill="yellow"
        /> */}
        {[...particleArray]}
      </svg>
    </div>
  );
}

function animate() {
  particleArray.forEach((particle) => {
    // particle.props.cx += 5;
    // particle.props.cy += 3;
    console.log(particle);
  });
  // requestAnimationFrameId = requestAnimationFrame(animate);
}
