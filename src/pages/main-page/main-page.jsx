import { Component } from "react";
import "./main-page.css";
import Beans from "../../img/beans-white.svg";
import BeansBlack from "../../img/beans-black.svg";
import MainCardsList from "./components/main-cards-list/main-cards-list";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <div className="promo">
          <div className="container">
            <div className="promo__love">
              <h1 className="promo__title">Everything You Love About Coffee</h1>
              <img src={Beans} alt="beans" />
              <div className="promo__text">
                We makes every day full of energy and taste <br />
                Want to try our beans?
              </div>
              <a className="promo__link" href="#">
                More
              </a>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="about__inner">
              <h1 className="title">About Us</h1>
              <img src={BeansBlack} alt="beans" />
              <div className="about__text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
                <span>
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </span>
              </div>
            </div>
          </div>
        </div>
        <MainCardsList data={data} />
      </>
    );
  }
}

export default MainPage;
