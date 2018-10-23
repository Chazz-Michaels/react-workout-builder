import React, { Component } from 'react';

class YourWorkout extends Component {

  calculateStuff = () => {
    console.log("fuck");
  }


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
