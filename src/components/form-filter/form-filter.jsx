import { Component } from "react";
import "./form-filter.css";

class FormFilter extends Component {
  render() {
    const buttonsData = [
      { name: "Brazil" },
      { name: "Kenya" },
      { name: "Columbia" },
    ];
    const buttons = buttonsData.map(({ name }) => {
      return (
        <button key={name} onClick={() => this.props.onSelectFilter(name)}>
          {name}
        </button>
      );
    });

    return (
      <div className="container">
        <div className="filter-inner">
          <div className="filter-look">
            <label className="filter-look__title" htmlFor="#">
              Lookiing for
            </label>
            <input
              className="filter-look__input"
              type="text"
              placeholder="start typing here..."
            />
          </div>
          <div className="filter-buttons">
            <label className="filter-buttons__title" htmlFor="#">
              Or filter
            </label>
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}
export default FormFilter;
