import React, { Component } from 'react';

class YourWorkout extends Component {

  render() {
    return (
      <div className="center-me">
        <h2>Your Workout</h2>
        <table id="your-workout-table" className="center-me">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Repetitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>map out</td>
            <td>exercises</td>
            <td>and stuff here</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }

}

export default YourWorkout;
