import { Component } from "react";
import "./main-cards-list-item.css";

class MainCardsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, price, img } = this.props;

    return (
      <li className="cards-item">
        <div className="cards-item__content">
          <img src={img} />

          <div className="cards-item__name">
            <a href="#">{name}</a>
          </div>
          <div className="cards-item__price">{price + "$"}</div>
        </div>
      </li>
    );
  }
}

export default MainCardsListItem;
