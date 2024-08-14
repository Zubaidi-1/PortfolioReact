import Button from "./Button";
import clasess from "./ProjectItem.module.css";
export default function ProjectItem({ image, description }) {
  return (
    <div className={clasess.projectItem}>
      <div className={clasess.imgCont}>
        <img src={image} />
        <p className={clasess.overlay}>{description}</p>
        <div className={clasess.center}>
          <Button text={"code"} name={clasess.button} />
          <a href="https://github.com/Zubaidi-1/Portfolio">
            <Button text={"Live"} name={clasess.button}></Button>
          </a>
        </div>
      </div>
    </div>
  );
}
