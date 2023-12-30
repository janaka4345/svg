import { useEffect, useRef, useState } from "react";

export default function Canvas(props) {
  const svgRef = useRef();

  useEffect(() => {
    console.log(svgRef);

    return () => {};
  }, []);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
}
