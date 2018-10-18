import React, { Component } from 'react';

class YourWorkout extends Component {

  render() {
    return (
      <div>
        <h2>Your Workout</h2>
        <table id="your-workout-table">
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Repetitions</th>
        </tr>
        <tr>
          <td>map out</td>
          <td>exercises</td>
          <td>and stuff here</td>
        </tr>
        </table>
      </div>
    );
  }

}

export default YourWorkout;
