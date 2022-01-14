import React, { useEffect } from "react";
import * as d3 from "d3";

function LineChart({ data, dimensions }) {
  const svgRed = React.useRef(null);
  const { width, height, margin } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  useEffect(() => {
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data[0].items, (d) => d.date))
      .range([0, width]);
  });
  return <svg />;
}

export default LineChart;
