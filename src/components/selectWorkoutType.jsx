import React, { Component } from 'react';

class SelectWorkoutType extends Component {

  render() {
    return (
      <div className="center-me">
        <select
          onClick={''}>
          <option disabled
            type="select"
            value="fieldName"
            disable selected> Select Workout Type
          </option>
          <option
            type="select"
            name="workoutType"
            value="back"> Back
          </option>
          <option
          type="select"
          name="workoutType"
          value="legs"> Legs
          </option>
          <option
          type="select"
          name="workoutType"
          value="chest"> Chest
          </option>
          <option
          type="select"
          name="workoutType"
          value="shoulders"> Shoulders
          </option>
          <option
          type="select"
          name="workoutType"
          value="totalBody"> Total Body
          </option>
        </select>
      </div>
    );
  }

}

export default SelectWorkoutType;