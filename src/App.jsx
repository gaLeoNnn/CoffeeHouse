import "./App.css";
import { Routes, Route } from "react-router-dom";
import OurCoffee from "./pages/our-coffee-page/our-coffee";
import MainPage from "./pages/main-page/main-page";
import Menu from "./components/menu/menu";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Solimo Coffee Beans 2 kg",
          price: 10.73,
        },
        {
          name: "Presto Coffee Beans 1 kg",
          price: 15.99,
        },
        {
          name: "AROMISTICO Coffee 1 kg",
          price: 6.99,
        },
      ],
    };
  }

  render() {
    const data = this.state;
    return (
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage data={data} />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
        </Routes>
      </>
    );
  }
}

export default App;
