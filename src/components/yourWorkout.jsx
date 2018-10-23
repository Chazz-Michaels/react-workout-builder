import React, { Component } from 'react';

class YourWorkout extends Component {

  calculateStuff = () => {
    console.log("fuck");
  }


  render() {
    return (
      <div className="center-me your-workout-wrapper">
        <h2>Your Workout</h2>
        <div>Your goal: {this.props.displayGoal}</div>
        <hr />
        <div>Your workout type: {this.props.displayWorkoutType}</div>
        <hr />
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
          <tr>
            <td>Ya goal is: {this.props.displayGoal}</td>
            <td>{this.props.displaySetsMain}</td>
            <td>{this.props.displayRepsMain}</td>

          </tr>
        </tbody>
        </table>
      </div>
    );
  }

}

export default YourWorkout;
