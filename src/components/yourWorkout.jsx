import React, { Component } from 'react';

class YourWorkout extends Component {

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
          <React.Fragment>
            {this.props.displayClickedMainExercises.map(exercise => {
              return <tr key={Math.random()}>
                        <td>{exercise}</td>
                        <td>{this.props.displaySetsMain}</td>
                        <td>{this.props.displayRepsMain}</td>
                    </tr>;
            })}
          </React.Fragment>
          <tr>
            <td><hr /></td>
            <td><hr /></td>
            <td><hr /></td>
          </tr>
          <React.Fragment>
            {this.props.displayClickedAssistanceExercises.map(exercise => {
              return <tr key={Math.random()}>
                        <td>{exercise}</td>
                        <td>{this.props.displaySetsAssistance}</td>
                        <td>{this.props.displayRepsAssistance}</td>
                    </tr>;
            })}
          </React.Fragment>
        </tbody>
        </table>
      </div>
    );
  }

}

export default YourWorkout;
