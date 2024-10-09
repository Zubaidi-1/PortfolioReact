import ProjectItem from "./ProjectItem";
import PortfolioImg from "./images/Portfolio.png";
import commingSoon from "./images/commingsoon.jpg";
import football from "./images/football.jpg";
import calc from "./images/calc.jpg";
import bookImg from "./images/book.png";
import classes from "./Projects.module.css";
import { forwardRef } from "react";
const Projects = forwardRef(function (props, ref) {
  return (
    <div ref={ref} className={classes.projectContainer}>
      <ProjectItem
        description={"Portfolio"}
        image={PortfolioImg}
        codeLink={"https://github.com/Zubaidi-1/PortfolioReact.git"}
        liveLink={"https://zubaidi-1.github.io/PortfolioReact/"}
      />
      <ProjectItem
        description={"Library"}
        image={bookImg}
        codeLink={"https://github.com/Zubaidi-1/library.git"}
        liveLink={"https://zubaidi-1.github.io/library/"}
      />
      <ProjectItem
        description={"Football"}
        image={football}
        codeLink={"https://github.com/Zubaidi-1/football.git"}
        liveLink={"https://zubaidi-1.github.io/football/"}
      />
      <ProjectItem
        description={"Price Match"}
        codeLink={"https://github.com/Zubaidi-1/PriceMatch.git"}
        liveLink={"https://zubaidi-1.github.io/PriceMatch/"}
        image={calc}
      />
    </div>
  );
});

export default Projects;
