import { Linkbox } from "../linkbox/linkbox";
import "./navmenu.css";

export function NavMenu() {
  return (
    <>
      <ul className="navmenu__ul">
        <Linkbox linkName="Hobbies" theLinkGoTo="hobbies" />
        <Linkbox linkName="Contact" theLinkGoTo="contact" />
        <Linkbox linkName="Work Experience" theLinkGoTo="workexperience" />
        <Linkbox linkName="Language" theLinkGoTo="language" />
        <Linkbox linkName="Education" theLinkGoTo="education" />
        <Linkbox linkName="Technologies" theLinkGoTo="technologies" />
        <Linkbox linkName="Projects" theLinkGoTo="tetflix" />
        <Linkbox linkName="Soft Skills" theLinkGoTo="softskills" />
      </ul>
    </>
  );
}
