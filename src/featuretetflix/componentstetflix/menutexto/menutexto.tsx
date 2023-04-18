import "./menutexto.css";

export function MenuTexto() {
  return (
    <nav className="menutext">
      <div className="menutexto__div_textmenu">
        <div>
          <img
            src="./assetstetflix/logopequeniotetlixjpg.jpg"
            alt="Logo de Tetflix, color rojo sobre fondo negro"
          />
        </div>
        <ul className="menutexto__ul_textmenu">
          <li className="menutexto__li">Inicio</li>
          <li className="menutexto__li">Series TV</li>
          <li className="menutexto__li">Películas</li>
          <li className="menutexto__li">Novedades más vistas</li>
          <li className="menutexto__li">Mi lista</li>
          <li className="menutexto__li">Explorar por idiomas</li>
        </ul>
      </div>
      <div className="menutexto__div_findermenu">
        <div>
          <img src="./assetstetflix/lens.png" alt="imagen de una lupa" />
        </div>

        <div>
          <img
            src="./assetstetflix/bell.png"
            alt="campana para ver Novedades"
          />
        </div>

        <div>
          <img
            src="./assetstetflix/avatar.png"
            alt="cara sonriente color mostaza. Botón para cambiar de usuario"
          />
        </div>
      </div>
    </nav>
  );
}
