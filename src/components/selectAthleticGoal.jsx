import React, { Component } from 'react';

class SelectAthleticGoal extends Component {

  handleAthleticGoal = (e) => {
    let value = e.target.value;
    this.props.onAthleticGoalChange(value);
    this.props.toGetMainSets(value);
    this.props.toGetMainReps(value);
    this.props.toGetAssistanceSets(value);
    this.props.toGetAssistanceReps(value);
  }

  render() {
    return (
      <div className="center-me">
        <div className="select-box-title">Your athletic goal:</div>
        <select
          className="select-box-content"
          onChange={this.handleAthleticGoal}>
          <option
            type="select"
            disabled="disabled"
            selected> Select Athletic Goal
          </option>
          <option
            type="select"
            name="strength"
            value="Strength/ Powerlifting"> Strength/ Powerlifting
          </option>
          <option
            type="select"
            name="bodybuilding"
            value="Muscle Building/ Bodybuilding"> Muscle Building/ Bodybuilding
          </option>
          <option
            type="select"
            name="chisel"
            value="Chisel/ Cut"> Chisel/ Cut
          </option>
        </select>
      </div>
    );
  }

}

export default SelectAthleticGoal;
