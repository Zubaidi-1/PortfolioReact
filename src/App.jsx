import "./App.css";
import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";

function App() {
  const skillsRef = useRef();
  const projectsRef = useRef();
  const formRef = useRef();
  const aboutRef = useRef();
  function scrollIntoSkills() {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("clicked");
  }

  function scrollIntoProjects() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollIntoForm() {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollIntoAbout() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header
        skills={scrollIntoSkills}
        projects={scrollIntoProjects}
        Form={scrollIntoForm}
        about={scrollIntoAbout}
      />
      <Hero ref={aboutRef} scrollTo={scrollIntoSkills} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Form ref={formRef} />
    </>
  );
}

export default App;
