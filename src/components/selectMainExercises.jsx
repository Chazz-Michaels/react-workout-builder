import React, { Component } from 'react';

class SelectMainExercises extends Component {

  render() {
    return (
      <div className="main-exercises-wrapper">
        <h2>Choose Main Exercises</h2>
        <h5>Recommendation: choose 1-2 main exercises from this list.</h5>
        <hr />
        <ul>
          {this.props.displayMainExercises.filter(exList => exList.mg === this.props.selectedWorkoutType || this.props.selectedWorkoutType === 'totalBody').map(exercise =>{
            return <React.Fragment key={Math.random()}>
                   <button
                     className="exercise-select-button"
                     key={exercise.id} >
                       <span className="exercise-title-on-button">{exercise.name}</span>
                       <hr className="button-hr"/>
                       <span className="label-on-button">muscle group: </span><span className="muscle-group-on-button">{exercise.mg}</span>
                   </button>
                   </React.Fragment>;
          })}
        </ul>
      </div>
    );
  }

}

export default SelectMainExercises;
