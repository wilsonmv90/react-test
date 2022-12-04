import Navbar from "./Navbar";
import logo from "../assets/logo-super.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="logo-super" />
          </div>
        </div>
        <Navbar/>
      </header>
    </>
  );
}
