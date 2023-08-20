import { Component } from "react";
import "./our-coffee.css";
import Coffee from "../../img/our-coffee.png";
import Cup from "../../img/Cup.png";
import Zerno from "../../img/zerno.svg";

class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Brazil", price: 6.99 },
        { name: "Kenya", price: 8.99 },
        { name: "Columbia", price: 10.99 },
      ],
    };
  }

  render() {
    return (
      <div className="our-coffee">
        <img src={Coffee} alt="coffee" />
        <div className="our-coffee__box">
          <div className="our-coffee__img">
            <img src={Cup} alt="Cup" />
            <div className="our-coffee__text">
              <h3 className="our-coffee__title">About our beans</h3>
              <img src={Zerno} alt="zerno" />
              <div className="our-coffee__text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurCoffee;
