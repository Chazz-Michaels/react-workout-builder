import React, { Component } from 'react';
import NavMenu from './components/navMenu';
import Brand from './components/brand';
import SelectAthleticGoal from './components/selectAthleticGoal';
import SelectWorkoutType from './components/selectWorkoutType';
import SelectMainExercises from './components/selectMainExercises';
import SelectAssistanceExercises from './components/selectAssistanceExercises';
import YourWorkout from './components/yourWorkout';
import './App.css';

class App extends Component {
  state = {
    exerciseList: [
      {id: 1, type: "compound", mg: "legs", name: "BB Squat"},
      {id: 2, type: "compound", mg: "legs", name: "Leg Press"},
      {id: 3, type: "compound", mg: "back", name: "BB Deadlift"},
      {id: 4, type: "compound", mg: "back", name: "Seated Cable Row"},
      {id: 5, type: "compound", mg: "chest", name: "BB Bench Press"},
      {id: 6, type: "compound", mg: "chest", name: "DB Chest Fly"},
      {id: 7, type: "compound", mg: "shoulders", name: "BB Overhead Press"},
      {id: 8, type: "compound", mg: "shoulders", name: "DB Lateral Raise"},
      {id: 9, type: "assistance", mg: "chest", name: "Tricep Pushdown"},
      {id: 10, type: "assistance", mg: "back", name: "DB Bicep Curl"}
    ],
    athleticGoal: [
      {choice: "nothin", setsMain: 0, setsAssistance: 0, repsMain: 0, repsAssistance: 0}
    ],
    workoutType: [
      {choice: "nothin"}
    ],
    exercisesSelected: [
      {id: 1, type: "compound", name: "name"}
    ]
  }
  render() {
    return (
      <React.Fragment>
        <div id="outer-container">
          <NavMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
          <main id="page-wrap" className="main-content-wrapper">
          <div className="center-me">
            <Brand />
            <SelectAthleticGoal />
            <SelectWorkoutType />
            <SelectMainExercises />
            <SelectAssistanceExercises />
            <YourWorkout />
          </div>

          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
