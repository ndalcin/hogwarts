import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greased: false,
      sort: "all"
    };
  }

  //
  // filterHogs = () => {
  //   let filteredHogs = hogs;
  //   if (!this.state.greased && !this.state.sort) {
  //     return filteredHogs;
  //   }
  //   if (this.state.greased) {
  //     filteredHogs = filteredHogs.filter(hog => hog.greased);
  //   }
  //   if (this.state.sort === "name") {
  //     filteredHogs = filteredHogs.sort((a, b) => {
  //       return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  //     });
  //   } else if (this.state.sort === "weight") {
  //     filteredHogs = filteredHogs.sort((a, b) => {
  //       return (
  //         b[
  //           "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  //         ] -
  //         a[
  //           "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  //         ]
  //       );
  //     });
  //   }
  //   return filteredHogs;
  // };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter />
        <HogList />
      </div>
    );
  }
}

export default App;
