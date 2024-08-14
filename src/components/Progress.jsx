import classes from "./Progress.module.css";
import { useState, useEffect } from "react";
export default function Progress({ percentage, circleWidth, text }) {
  const [radius, setRadius] = useState(60);
  const [strokeWidth, setStrokeWidth] = useState("10px");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900 && window.innerWidth > 600) {
        setRadius(40); // Adjust the width for smaller screens
        setStrokeWidth("7px");
      } else if (window.innerWidth < 600) {
        setRadius(50);
        setStrokeWidth("5px");
      } else {
        setRadius(60); // Default radius
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function initially to set the correct circle width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth} `}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#0d274a", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#010a18", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className={classes.circleBackground}
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className={classes.progress}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text x={"50%"} y={"50%"} dy={"0.3em"} textAnchor="middle">
          {text}
        </text>
      </svg>
    </div>
  );
}
