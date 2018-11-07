import React, { Component } from 'react';

class SelectMainExercises extends Component {

  handleClickedMainExercise = (e) => {
    e.preventDefault();
    let name = e.target.name;
    //console.log("main exercise clicked: " + name);
    this.props.onClickedMainExercise(name);
  };

  render() {
    return (
      <div className="main-exercises-wrapper">
        <h2>Choose Main Exercises</h2>
        <h5>Recommendation: choose 1-2 main exercises from this list.</h5>
        <hr />
        <ul>
          {this.props.displayMainExercises.filter(exList => exList.mg === this.props.selectedWorkoutType || this.props.selectedWorkoutType === 'Total Body').map(exercise =>{
            return <React.Fragment key={Math.random()}>
                   <div className="exercise-button-wrapper">
                     <button
                       onClick={this.handleClickedMainExercise}
                       className="exercise-select-button exercise-title-on-button"
                       key={exercise.id}
                       name={exercise.name}>{exercise.name}
                     </button>
                     <hr className="button-hr"/>
                     <span className="label-on-button">muscle group: </span><span className="muscle-group-on-button">{exercise.mg}</span>
                   </div>
                   </React.Fragment>;
          })}
        </ul>
      </div>
    );
  }

}

export default SelectMainExercises;
