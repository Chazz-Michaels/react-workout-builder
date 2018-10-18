import React, { Component } from 'react';

class SelectAthleticGoal extends Component {

  render() {
    return (
      <div className="center-me">
        <select
          onClick={''}>
          <option disabled
            type="select"
            value="fieldName"
            disable selected> Select Athletic Goal
          </option>
          <option
            type="select"
            name="athleticGoal"
            value="strength"> Strength/ Powerlifting
          </option>
          <option
          type="select"
          name="athleticGoal"
          value="bodybuild"> Muscle Building/ Bodybuilding
          </option>
          <option
          type="select"
          name="athleticGoal"
          value="chisel"> Chisel/ Cut
          </option>
        </select>
      </div>
    );
  }

}

export default SelectAthleticGoal;
