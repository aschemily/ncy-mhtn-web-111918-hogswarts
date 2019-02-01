import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import sillyHogsData from "../porkers_data";
import HogsContainer from "./HogsContainer";

console.log("Hogs data :", sillyHogsData);

const makeHogsDataLessSilly = hogsData => {
  return hogsData.map((h, i) => {
    // const name = h.name
    // const specialty = h.specialty
    const {
      name,
      specialty,
      greased,
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": weight,
      "highest medal achieved": medal
    } = h;
    //console.log("What do I have now", name, specialty, greased);
    return {
      id: i,
      name,
      specialty,
      greased,
      weight,
      medal,
      showDetails: false
    };
  });
};

const hogsData = makeHogsDataLessSilly(sillyHogsData);

class App extends Component {
  state = {
    hogs: hogsData,
    greasedFilter: "all"
  };

  toggleHogDetails = hogId => {
    console.log(hogId);
    //bad... very bad. very!
    // const hog = this.state.hogs.find(h => h.id === hogId);
    // hog.showDetails = !hog.showDetails;
    // this.setState({ hogs: this.state.hogs });
    // good!
    console.log("Old date :", this.state);
    const hogs = this.state.hogs.map(h => {
      if (h.id === hogId) {
        return { ...h, showDetails: !h.showDetails };
      } else {
        return h;
      }
    });
    this.setState({ hogs });
  };

  toggleGreased = e => {
    console.log("Toggle greased :", e.target.value);
    this.setState({ greasedFilter: e.target.value });
  };

  applyGreasedFilter = () => {
    if (this.state.greasedFilter === "all") {
      return this.state.hogs;
    } else if (this.state.greasedFilter === "greased") {
      return this.state.hogs.filter(h => h.greased);
    } else {
      return [];
    }
  };

  render() {
    return (
      <div className="App">
        <Nav
          toggleGreased={this.toggleGreased}
          greasedFilter={this.state.greasedFilter}
        />
        <HogsContainer
          toggleHogDetails={this.toggleHogDetails}
          hogs={this.applyGreasedFilter()}
        />
      </div>
    );
  }
}

export default App;
