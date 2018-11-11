import React, { Component } from 'react';

class YourWorkout extends Component {

  handleClickToRemoveExercise = (e) => {
    let me = e.target.parentElement;
    //console.log(me.parentNode.id);
    let removeThisExercise = me.parentNode.id;
    this.props.onClickToRemoveExercise(removeThisExercise);
  }

  render() {
    return (
      <div className="center-me your-workout-wrapper">
        <h1>Your Workout</h1>
        <div className="short-hr-divider"></div>
        <br />
        <div className="your-workout-subheader-wrapper">
          <div>Your goal: <span className="heavy">{this.props.displayGoal}</span></div>
          <div className="shorter-hr-divider p-2"></div>
          <br />
          <div>Your workout type: <span className="heavy">{this.props.displayWorkoutType}</span></div>
          <div className="shorter-hr-divider p-2"></div>
          <br />
        </div>
        <br />
        <table id="your-workout-table" className="center-me">
        <thead>
          <tr>
            <th className="adj-center-for-remove-button">Exercise</th>
            <th>Sets</th>
            <th>Repetitions</th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {this.props.displayClickedMainExercises.map(exercise => {
              return <tr id={exercise} key={Math.random()}>
                        <td>
                          <span onClick={this.handleClickToRemoveExercise} className="remove-exercise-button">X</span>
                          <span className="each-execise-name">
                            {exercise}
                          </span>
                        </td>
                        <td>{this.props.displaySetsMain}</td>
                        <td>{this.props.displayRepsMain}</td>
                    </tr>;
            })}
          </React.Fragment>
          <tr>
            <td className="your-workout-divider"></td>
            <td className="your-workout-divider"></td>
            <td className="your-workout-divider"></td>
          </tr>
          <React.Fragment>
            {this.props.displayClickedAssistanceExercises.map(exercise => {
              return <tr id={exercise} key={Math.random()}>
                        <td>
                          <span onClick={this.handleClickToRemoveExercise} className="remove-exercise-button">X</span>
                          <span className="each-execise-name">
                            {exercise}
                          </span>
                        </td>
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
