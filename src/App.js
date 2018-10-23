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
    mainExerciseList: [
      {id: 1, type: "compound", mg: "legs", name: "BB Back Squat"},
      {id: 2, type: "compound", mg: "legs", name: "Leg Press"},
      {id: 3, type: "compound", mg: "legs", name: "Goblet Squat"},
      {id: 4, type: "compound", mg: "back", name: "BB Deadlift"},
      {id: 5, type: "compound", mg: "back", name: "Landmine Row"},
      {id: 6, type: "compound", mg: "back", name: "Bent Over Row"},
      {id: 7, type: "compound", mg: "chest", name: "Bench Press"},
      {id: 8, type: "compound", mg: "chest", name: "Incline Bench Press"},
      {id: 9, type: "compound", mg: "chest", name: "Chest Press Machine"},
      {id: 10, type: "compound", mg: "shoulders", name: "Standing Overhead Press"},
      {id: 11, type: "compound", mg: "shoulders", name: "Seated Overhead Press"}
    ],
    assistanceExerciseList: [
      {id: 1, type: "assistance", mg: "legs", name: "Alternating Lunges (in place)"},
      {id: 2, type: "assistance", mg: "legs", name: "Alternating Reverse Lunges"},
      {id: 3, type: "assistance", mg: "legs", name: "Split Squat"},
      {id: 4, type: "assistance", mg: "legs", name: "Leg Extension Machine"},
      {id: 5, type: "assistance", mg: "legs", name: "Hamstring Curl Machine"},
      {id: 6, type: "assistance", mg: "legs", name: "Hip Thruster"},
      {id: 7, type: "assistance", mg: "legs", name: "Glute Bridge"},
      {id: 8, type: "assistance", mg: "chest", name: "Cable Chest Fly"},
      {id: 9, type: "assistance", mg: "chest", name: "DB Alternating Front Delt Raise"},
      {id: 10, type: "assistance", mg: "chest", name: "Floor Press"},
      {id: 11, type: "assistance", mg: "chest", name: "Svend Press"},
      {id: 12, type: "assistance", mg: "chest", name: "Chest Fly Machine"},
      {id: 13, type: "assistance", mg: "chest", name: "Tricep Pushdown"},
      {id: 14, type: "assistance", mg: "chest", name: "Overhead Tricep Extension"},
      {id: 15, type: "assistance", mg: "chest", name: "French Press"},
      {id: 16, type: "assistance", mg: "chest", name: "Tricep Kickback"},
      {id: 17, type: "assistance", mg: "back", name: "Lat Pulldown"},
      {id: 18, type: "assistance", mg: "back", name: "DB Bent Over Row (single arm)"},
      {id: 19, type: "assistance", mg: "back", name: "Face Pull"},
      {id: 20, type: "assistance", mg: "back", name: "Farmer's Carry"},
      {id: 21, type: "assistance", mg: "back", name: "DB Rear Delt Fly"},
      {id: 22, type: "assistance", mg: "back", name: "Seated Cable Row"},
      {id: 23, type: "assistance", mg: "back", name: "Cable Pulldown"},
      {id: 24, type: "assistance", mg: "back", name: "DB/BB/Cable Bicep Curl"},
      {id: 25, type: "assistance", mg: "back", name: "DB Concentration Curl"},
      {id: 26, type: "assistance", mg: "back", name: "Hammer Curl"},
      {id: 27, type: "assistance", mg: "shoulders", name: "DB Alternating Front Delt Raise"},
      {id: 28, type: "assistance", mg: "shoulders", name: "Lateral Raise"},
      {id: 29, type: "assistance", mg: "shoulders", name: "DB Rear Delt Fly"},
      {id: 30, type: "assistance", mg: "shoulders", name: "Face Pull"},
      {id: 31, type: "assistance", mg: "shoulders", name: "Overhead Press (single arm)"},
      {id: 32, type: "assistance", mg: "shoulders", name: "Floor Press (single arm)"},
      {id: 33, type: "assistance", mg: "shoulders", name: "Hand Walkouts"},
      {id: 34, type: "assistance", mg: "shoulders", name: "DB Renegade Row"}
    ],
    athleticGoal: [],
    workoutType: []
  }

  handleGoalChange = (e) => {
      this.setState({
        athleticGoal: e
      });
  };

  handleWorkoutTypeChange = (e) => {
      this.setState({
        workoutType: e
      });
  };

  render() {
    const {goalIsStrength} = {goal: "strength", setsMain: 4, setsAssistance: 3, repsMain: 5, repsAssistance: 10};
    const {goalIsBodybuilding} = {goal: "bodybuilding", setsMain: 4, setsAssistance: 4, repsMain: 8, repsAssistance: 12};
    const {goalIsChisel} = {goal: "chisel", setsMain: 4, setsAssistance: 3, repsMain: 10, repsAssistance: 15};

    return (
        <div id="outer-container">
          <NavMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
          <main id="page-wrap" className="main-content-wrapper">
          <div className="center-me">
            <Brand />
            <SelectAthleticGoal
              onAthleticGoalChange={this.handleGoalChange} />
            <SelectWorkoutType
              onWorkoutTypeChange={this.handleWorkoutTypeChange} />
            <SelectMainExercises
              selectedWorkoutType={this.state.workoutType}
              displayMainExercises={this.state.mainExerciseList}
              getMuscleGroupsFromState={this.state.mainExerciseList.mg} />
            <SelectAssistanceExercises />
            <YourWorkout
              displaySetsMain={4}
              displayRepsMain={10}
              displayGoal={this.state.athleticGoal}
              displayWorkoutType={this.state.workoutType} />
          </div>

          </main>
        </div>
    );
  }
}

export default App;
