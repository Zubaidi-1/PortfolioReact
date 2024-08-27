import ProjectItem from "./ProjectItem";
import PortfolioImg from "./images/Portfolio.png";
import commingSoon from "./images/commingsoon.jpg";
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
      <ProjectItem description={"Coming soon"} image={commingSoon} />
      <ProjectItem description={"Coming soon"} image={commingSoon} />
    </div>
  );
});

export default Projects;
