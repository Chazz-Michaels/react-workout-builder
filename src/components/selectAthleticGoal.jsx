import React, { Component } from 'react';

class SelectAthleticGoal extends Component {

  handleAthleticGoal = (e) => {
    let value = e.target.value;
    this.props.onAthleticGoalChange(value);
  }

  render() {
    return (
      <div className="center-me">
        <h5>Your athletic goal:</h5>
        <select
          onChange={this.handleAthleticGoal}>
          <option
            type="select"
            disabled="disabled"
            selected> Select Athletic Goal
          </option>
          <option
            type="select"
            name="strength"
            value="strength"> Strength/ Powerlifting
          </option>
          <option
            type="select"
            name="bodybuilding"
            value="bodybuilding"> Muscle Building/ Bodybuilding
          </option>
          <option
            type="select"
            name="chisel"
            value="chisel"> Chisel/ Cut
          </option>
        </select>
      </div>
    );
  }

}

export default SelectAthleticGoal;
