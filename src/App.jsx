import "./App.css";
import { Routes, Route } from "react-router-dom";
import OurCoffee from "./pages/our-coffee-page/our-coffee";
import MainPage from "./pages/main-page/main-page";
import Menu from "./components/menu/menu";
import { Component } from "react";
import firstCard from "./img/card-coffee1.svg";
import secondCard from "./img/card-coffee2.svg";
import thridCard from "./img/card-coffee3.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Solimo Coffee Beans 2 kg",
          price: 10.73,
          img: firstCard,
        },
        {
          id: 2,
          name: "Presto Coffee Beans 1 kg",
          price: 15.99,
          img: secondCard,
        },
        {
          id: 3,
          name: "AROMISTICO Coffee 1 kg",
          price: 6.99,
          img: thridCard,
        },
      ],
      coffee: [
        {
          id: 10,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Brazil",
          price: 6.99,
          img: thridCard,
        },
        {
          id: 11,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Kenya",
          price: 6.99,
          img: thridCard,
        },
        {
          id: 12,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Brazil",
          price: 6.99,
          img: thridCard,
        },
        {
          id: 13,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Columbia",
          price: 6.99,
          img: thridCard,
        },
        {
          id: 14,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Brazil",
          price: 6.99,
          img: thridCard,
        },
        {
          id: 15,
          name: "AROMISTICO Coffee 1 kg",
          sort: "Brazil",
          price: 6.99,
          img: thridCard,
        },
      ],
      filter: "",
    };
  }

  filterCoffee = (items, name) => {
    switch (name) {
      case "Brazil":
        return items.filter((item) => item.sort === "Brazil");
      case "Kenya":
        return items.filter((item) => item.sort === "Kenya");
      case "Columbia":
        return items.filter((item) => item.sort === "Columbia");
      default:
        return items;
    }
  };
  onSelectFilter = (sort) => {
    console.log(sort);
    this.setState({
      filter: sort,
    });
  };
  render() {
    const { data, coffee, filter } = this.state;

    console.log(filter);
    const visiableCoffee = this.filterCoffee(coffee, filter);

    return (
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage data={data} />} />
          <Route
            path="/our-coffee"
            element={
              <OurCoffee
                onSelectFilter={this.onSelectFilter}
                visiableCoffee={visiableCoffee}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
