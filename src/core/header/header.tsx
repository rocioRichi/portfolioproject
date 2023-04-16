import "./header.css";

export function Header() {
  const gitHubLogoSource = "assets/githublogo.svg";
  const myAvatarSource = "/assets/myavatar.png";

  return (
    <header className="header">
      <div className=" header__myname">
        <h1>Rocío Ricciardiello</h1>
        <div className="header__avatar">
          <img
            src={myAvatarSource}
            alt="Avatar chica rizosa sonriente con computer"
            className="header__avatarsize"
          />
        </div>
        <img
          src={gitHubLogoSource}
          alt="Logo de GitHub"
          className="header__logogit"
        ></img>
      </div>
    </header>
  );
}
