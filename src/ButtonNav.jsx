import "./btn-nav.css";
import { NavLink } from "react-router-dom";
import Home from "./assets/Home.png"

function ButtonNav() {
    return (
        <section className="section-btn">
            <NavLink
                to="/projet"
                className="a-btn"
            >
                <div className="btn">
                    <p>projet</p>
                    <img
                        src="/images/icons-fleche-bas.png"
                        alt=""
                        className="btn-img-1"
                    />
                </div>
            </NavLink>
            <NavLink to="/" className="">
    <img src={Home} className="logo-home" alt="Accueil" />
</NavLink>

        
            <NavLink
                to="/about"
                className="a-btn"
            >
                <div className="btn">
                    <p>tout sur moi</p>
                    <img
                        src="/images/icons-fleche-bas.png"
                        alt=""
                        className="btn-img-2"
                    />
                </div>
            </NavLink>
                    <NavLink
                        to="/contact"
                    >
                        <div className="btn">
                            <p>Contact</p>

                        </div>
                    </NavLink>
        </section>
    );
}

export default ButtonNav;