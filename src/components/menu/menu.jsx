import "./menu.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
          <ul className="menu__items">
            <li className="menu__item">
              {" "}
              <Link to="/" className="menu__link">
                Coffee house
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/our-coffee" className="menu__link">
                Our coffee
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/pleasure" className="menu__link">
                For your pleasure
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Menu;
