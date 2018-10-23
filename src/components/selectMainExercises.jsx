import React, { Component } from 'react';

class SelectMainExercises extends Component {

  render() {
    let selwortyp = this.props.selectWorkoutType;
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
          {this.props.displayGivenMainExercises.filter(d => this.props.selectedWorkoutType === d.mg).map(function(x){
            return <React.Fragment key={Math.random()}>
                   <li key={x.id}>
                      muscle group: {x.mg}
                      <br />
                      exercise: {x.name}
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
