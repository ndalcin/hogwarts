import React from "react";
const hog = require("../cherub.png");

class HogTile extends React.Component {
  render() {
    const { name, specialty } = this.props.hog;
    const weight = this.props.hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
    const medal = this.props.hog["highest medal achieved"];

    return (
      <div className="ui card eight wide column">
        <div className="image">
          <img src={hog} />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div className="meta">
            {/* display meta div on click?*/}
            <p>Specialty: {specialty}</p>
            <p>Highest medal achived: {medal}</p>
            <p>
              weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
              Refrigerator with Thru-the-Door Ice and Water:
              {weight}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HogTile;
