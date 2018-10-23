import React, { Component } from 'react';

class SelectMainExercises extends Component {

  render() {
    return (
      <div className="">
        <h2>Choose Main Exercises</h2>
        <h5>Recommendation: choose 1-3 main exercises from this list.</h5>
        <div>
          Since you chose a {this.props.selectedWorkoutType} workout, you may
          choose from these exercises:
        </div>
        <hr />

        Map Array of Exercises as checkbox options to choose from here.
        <ul>
          {this.props.displayMainExercises.filter(exList => exList.mg === this.props.selectedWorkoutType || this.props.selectedWorkoutType === 'totalBody').map(exercise =>{
            return <React.Fragment key={Math.random()}>
                   <li key={exercise.id}>
                      muscle group: {exercise.mg}
                      <br />
                      exercise: {exercise.name}
                   </li>
                   <hr />
                   </React.Fragment>;
          })}
        </ul>
      </div>
    );
  }

}

export default SelectMainExercises;
