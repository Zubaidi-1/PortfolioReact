import ProjectItem from "./ProjectItem";
import PortfolioImg from "./images/Portfolio.png";
import commingSoon from "./images/commingsoon.jpg";

import classes from "./Projects.module.css";
import { forwardRef } from "react";
const Projects = forwardRef(function (props, ref) {
  return (
    <div ref={ref} className={classes.projectContainer}>
      <ProjectItem description={"Portfolio"} image={PortfolioImg} />
      <ProjectItem description={"Coming soon"} image={commingSoon} />
      <ProjectItem description={"Coming soon"} image={commingSoon} />
      <ProjectItem description={"Coming soon"} image={commingSoon} />
    </div>
  );
});

export default Projects;
