import { Component } from "react";
import "./our-coffee.css";
import Coffee from "../../img/our-coffee.png";
import Cup from "../../img/Cup.png";
import Zerno from "../../img/zerno.svg";
import FormFilter from "../../components/form-filter/form-filter";
import CoffeeList from "../../components/coffee-list/coffee-list";

class OurCoffee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visiableCoffee, coffee, onSelectFilter } = this.props;
    console.log(onSelectFilter);
    return (
      <>
        <div className="our-coffee">
          <h1 className="title title_our">Our Coffee</h1>
        </div>
        <div className="about-coffee">
          <div className="container">
            <div className="about-coffee__inner">
              <img src={Cup} alt="Cup" />{" "}
              <div className="about-coffee__box">
                <h3 className="title title_about">About our beans</h3>
                <img src={Zerno} alt="zerno" />
                <div className="about-coffee__text">
                  <span>
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                  </span>
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention so questions. As greatly removed
                  calling pleased improve an. Last ask him cold feel met spot
                  shy want. Children me laughing we prospect answered followed.
                  At it went is song that held help face.
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormFilter coffee={coffee} onSelectFilter={onSelectFilter} />
        <CoffeeList visiableCoffee={visiableCoffee} />
      </>
    );
  }
}

export default OurCoffee;
