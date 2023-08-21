import { Component } from "react";
import "./coffee-list-item.css";

class CoffeeListItem extends Component {
  render() {
    const { name, sort, price, img } = this.props;

    return (
      <li className="cards-item">
        <div className="cards-item__content">
          <img src={img} />

          <div className="cards-item__name">
            <a href="#">{name}</a>
          </div>
          <div className="cards-item__sort">
            <a href="#">{sort}</a>
          </div>
          <div className="cards-item__price">{price + "$"}</div>
        </div>
      </li>
    );
  }
}
export default CoffeeListItem;
