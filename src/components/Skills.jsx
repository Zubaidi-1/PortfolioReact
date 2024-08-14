import Progress from "./Progress";
import classes from "./Skills.module.css";
import { forwardRef } from "react";
import { useEffect, useState } from "react";
const Skills = forwardRef(function (props, ref) {
  const [circleWidth, setCircleWidth] = useState(199);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900 && window.innerWidth > 600) {
        setCircleWidth(150); // Adjust the width for smaller screens
      } else if (window.innerWidth < 600) {
        setCircleWidth(200);
      } else {
        setCircleWidth(140); // Default width
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function initially to set the correct circle width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <div ref={ref} className={classes.containers}>
      <div>
        <p className={classes.des}>
          I'm skilled in front-end web development, with expertise in HTML, CSS,
          JavaScript, and React. I create well-structured, responsive, and
          interactive web pages, and build smooth, high-performing user
          interfaces using React.
        </p>
      </div>
      <div className={classes.flexCont}>
        <Progress percentage={90} circleWidth={circleWidth} text={"HTML"} />
        <Progress percentage={75} circleWidth={circleWidth} text={"CSS"} />
        <Progress percentage={80} circleWidth={circleWidth} text={"JS"} />
        <Progress percentage={80} circleWidth={circleWidth} text={"React"} />
      </div>
    </div>
  );
});

export default Skills;
