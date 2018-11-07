import React, { Component } from 'react';

class SelectAssistanceExercises extends Component {

  handleClickedAssistanceExercise = (e) => {
    e.preventDefault();
    let name = e.target.name;
    //console.log("main exercise clicked: " + name);
    this.props.onClickedAssistanceExercise(name);
  };

  render() {
    return (
      <div className="assistance-exercises-wrapper">
        <h2>Choose Assistance Exercises</h2>
        <h5>Recommendation: choose 3-5 assistance exercises from this list.</h5>
        <hr />
        <ul>
          {this.props.displayAssistanceExercises.filter(exList => exList.mg === this.props.selectedWorkoutType || this.props.selectedWorkoutType === 'Total Body').map(exercise =>{
             return <React.Fragment key={Math.random()}>
                     <div className="exercise-button-wrapper">
                       <button
                         onClick={this.handleClickedAssistanceExercise}
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

export default SelectAssistanceExercises;
