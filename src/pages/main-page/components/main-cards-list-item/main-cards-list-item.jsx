import { Component } from "react";
import "./main-cards-list-item.css";
import firstCard from "../../../../img/card-coffee1.svg";

class MainCardsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="cards-item">
        <div className="cards-item__content">
          <img src={firstCard} alt="" />

          <div className="cards-item__name">
            <a href="#">Solimo Coffee Beans 2 kg</a>
          </div>
          <div className="cards-item__price">10$</div>
        </div>
      </li>
    );
  }
}

export default MainCardsListItem;
