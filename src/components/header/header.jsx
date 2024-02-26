import logoIcon from "../../assets/logoheader.svg";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <div className="header__logo">
                            <img src={logoIcon} alt="" />
                        </div>
                        <nav className="header__nav">
                            <Link className="header__nav__link">Афиша</Link>
                            <Link className="header__nav__link">Медиа</Link>
                            <Link className="header__nav__link">Фильмы</Link>
                            <Link className="header__nav__link">Актеры</Link>
                            <Link className="header__nav__link">Новости</Link>
                            <Link className="header__nav__link">Подборки</Link>
                            <Link className="header__nav__link">Категории</Link>
                            <button className="header__btn">Войти</button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
