import { Link } from "react-router-dom";
import "./linkbox.css";

export type LinkBoxProps = {
  linkName: string;
  theLinkGoTo: string;
};

export function Linkbox(linkBoxProps: LinkBoxProps) {
  const slash = "/";
  const goTo = slash + linkBoxProps.theLinkGoTo;

  return (
    <>
      <Link to={goTo}>
        <li className="linkbox">{linkBoxProps.linkName}</li>
      </Link>
    </>
  );
}
