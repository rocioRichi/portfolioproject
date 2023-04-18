import { BackgroundPic } from "../backgroundpic/backgroundpic";
import { MenuTexto } from "../menutexto/menutexto";
import "./tetflixcontainer.css";

export function TetflixContainer() {
  return (
    <section className="tetflixcontainer">
      <MenuTexto />
      <BackgroundPic />
    </section>
  );
}
