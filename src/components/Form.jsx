import Button from "./Button";
import classes from "./Form.module.css";
import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";
import { logoLinkedin } from "ionicons/icons";
import { forwardRef } from "react";

const Form = forwardRef(function (props, ref) {
  return (
    <div ref={ref} className={classes.formCont}>
      <form action="https://formspree.io/f/xanwjpkl" method="POST">
        <input placeholder="E-mail" type="Email" name="email" required />
        <input
          className={classes.title}
          placeholder="Title"
          name="title"
          required
        />
        <textarea placeholder="Message" type="Email" name="message" required />

        <Button text={"Send Email"} name={classes.cta} />
      </form>
      <div className={classes.logos}>
        <a
          href="https://www.linkedin.com/in/abdalla-zubaidi-8960b023a/"
          target="_blank"
        >
          <IonIcon icon={logoLinkedin} className={classes.logo} />
        </a>
        <a href="https://github.com/Zubaidi-1" target="_blank">
          <IonIcon icon={logoGithub} className={classes.logo} />
        </a>
      </div>
    </div>
  );
});

export default Form;
