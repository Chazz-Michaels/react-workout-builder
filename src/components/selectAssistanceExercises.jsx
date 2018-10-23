import React, { Component } from 'react';

class SelectAssistanceExercises extends Component {

  render() {
    return (
      <div className="">
        <h2>Choose Assistance Exercises</h2>
        <h5>Recommendation: choose 2-5 assistance exercises from this list.</h5>
        <div>
          Since you chose a {this.props.selectedWorkoutType} workout, you may
          choose from these exercises:
        </div>
        <hr />

        Map Array of Exercises as checkbox options to choose from here.
        <ul>
          {this.props.displayAssistanceExercises.filter(exList => exList.mg === this.props.selectedWorkoutType || this.props.selectedWorkoutType === 'totalBody').map(exercise =>{
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

export default SelectAssistanceExercises;
