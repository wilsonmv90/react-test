export default function Aside() {
  return (
    <>
        <aside>
          <div className="aside__busqueda">
            <form className="form" id="form">
              <input type="text" aria-label="Search" />
            </form>
            <button className="botton">Buscar</button>
          </div>

          <div className="aside__wrapper">
            <h3>Lo Ultimo</h3>
          </div>

          <div className="aside__wrapper">
            <h3>Noticias Destacadas</h3>
          </div>
        </aside>
    </>
  )
}

