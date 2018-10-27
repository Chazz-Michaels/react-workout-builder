import React, { Component } from 'react';

class SelectMainExercises extends Component {

  handleClickedMainExercise = (e) => {
    e.preventDefault();
    let name = e.target.name;
    //console.log("id: " + id + ". selected: " + selected);
    console.log("main exercise clicked: " + name);
    this.props.onClickedMainExercise(name);
  };

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
                     onClick={this.handleClickedMainExercise}
                     className="exercise-select-button exercise-title-on-button"
                     key={exercise.id}
                     name={exercise.name}>{exercise.name}
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
