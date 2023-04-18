import { Route, Routes } from "react-router-dom";
import { Linkbox } from "../core/linkbox/linkbox";
import { NavMenu } from "../core/navmenu/navmenu";
import { TetflixContainer } from "../featuretetflix/componentstetflix/tetflixcontainer/tetflixcontainer";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NavMenu />}></Route>
      <Route
        path="/contact"
        element={<Linkbox linkName="Contact" theLinkGoTo="contac" />}
      ></Route>
      <Route
        path="/technologies"
        element={<Linkbox linkName="Technologies" theLinkGoTo="technologies" />}
      ></Route>
      <Route
        path="/technologies"
        element={<Linkbox linkName="Language" theLinkGoTo="language" />}
      ></Route>{" "}
      <Route
        path="/technologies"
        element={
          <Linkbox linkName="WorkExperience" theLinkGoTo="workimgexperience" />
        }
      ></Route>
      <Route
        path="/education"
        element={<Linkbox linkName="Education" theLinkGoTo="education" />}
      ></Route>
      <Route
        path="/project"
        element={<Linkbox linkName="Project" theLinkGoTo="project" />}
      ></Route>
      <Route path="/tetflix" element={<TetflixContainer />}></Route>
    </Routes>
  );
}
export default AppRouter;
