import { Component } from "react";
import CoffeeListItem from "../coffee-list-item/coffee-list-item";
import "./coffee-list.css";

class CoffeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visiableCoffee } = this.props;

    const elements = visiableCoffee.map((item) => {
      const { id, ...itemList } = item;
      return <CoffeeListItem key={id} {...itemList} />;
    });

    return (
      <div className="container">
        <ul className="coffee-list">{elements}</ul>
      </div>
    );
  }
}

export default CoffeeList;
