import React, { Component } from 'react';

class SelectWorkoutType extends Component {

  handleWorkoutType = (e) => {
    let value = e.target.value;
    this.props.onWorkoutTypeChange(value);
  }

  render() {
    return (
      <div className="center-me">
        <h5>Your workout for today:</h5>
        <select
          onChange={this.handleWorkoutType}>
          <option
            type="select"
            value="fieldName"
            disabled="disabled"
            selected > Select Workout Type
          </option>
          <option
            type="select"
            value="back"> Back
          </option>
          <option
            type="select"
            value="legs"> Legs
          </option>
          <option
            type="select"
            value="chest"> Chest
          </option>
          <option
            type="select"
            value="shoulders"> Shoulders
          </option>
          <option
            type="select"
            value="totalBody"> Total Body
          </option>
        </select>
      </div>
    );
  }

}

export default SelectWorkoutType;
