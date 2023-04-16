import "./header.css";

export function Header() {
  const gitHubLogoSource = "assets/githublogo.svg";
  return (
    <header className="header">
      <p className=" header__myname">Rocío Ricciardiello</p>
      <img
        src={gitHubLogoSource}
        alt="Logo de GitHub"
        className="header__img"
      ></img>
    </header>
  );
}
