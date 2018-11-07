import React, { Component } from 'react';

class SelectWorkoutType extends Component {

  handleWorkoutType = (e) => {
    let value = e.target.value;
    this.props.onWorkoutTypeChange(value);
  }

  render() {
    return (
      <div className="center-me">
        <div className="select-box-title">Your workout for today:</div>
        <select
          className="select-box-content"
          onChange={this.handleWorkoutType}>
          <option
            type="select"
            value="fieldName"
            disabled="disabled"
            selected > Select Workout Type
          </option>
          <option
            type="select"
            value="Back"> Back
          </option>
          <option
            type="select"
            value="Legs"> Legs
          </option>
          <option
            type="select"
            value="Chest"> Chest
          </option>
          <option
            type="select"
            value="Shoulders"> Shoulders
          </option>
          <option
            type="select"
            value="Total Body"> Total Body
          </option>
        </select>
      </div>
    );
  }

}

export default SelectWorkoutType;
