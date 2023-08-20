import { Component } from "react";
import "./main-cards-list.css";
import MainCardsListItem from "../main-cards-list-item/main-cards-list-item";

class MainCardsList extends Component {
  render() {
    const { data } = this.props;

    const mainCards = data.map((item) => {
      return <MainCardsListItem />;
    });

    return (
      <div className="main-cards">
        <div className="container">
          <h1 className="title title_cards">Our best</h1>
          <ul className="main-cards__items">{mainCards}</ul>
        </div>
      </div>
    );
  }
}

export default MainCardsList;
