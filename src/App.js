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
      {id: 1, type: "compound", mg: "legs", name: "BB Back Squat", selected: false},
      {id: 2, type: "compound", mg: "legs", name: "Leg Press", selected: false},
      {id: 3, type: "compound", mg: "legs", name: "Goblet Squat", selected: false},
      {id: 4, type: "compound", mg: "back", name: "BB Deadlift", selected: false},
      {id: 5, type: "compound", mg: "back", name: "Landmine Row", selected: false},
      {id: 6, type: "compound", mg: "back", name: "Bent Over Row", selected: false},
      {id: 7, type: "compound", mg: "chest", name: "Bench Press", selected: false},
      {id: 8, type: "compound", mg: "chest", name: "Incline Bench Press", selected: false},
      {id: 9, type: "compound", mg: "chest", name: "Chest Press Machine", selected: false},
      {id: 10, type: "compound", mg: "shoulders", name: "Standing Overhead Press", selected: false},
      {id: 11, type: "compound", mg: "shoulders", name: "Seated Overhead Press", selected: false}
    ],
    assistanceExerciseList: [
      {id: 1, type: "assistance", mg: "legs", name: "Alternating Lunges (in place)", selected: false},
      {id: 2, type: "assistance", mg: "legs", name: "Alternating Reverse Lunges", selected: false},
      {id: 3, type: "assistance", mg: "legs", name: "Split Squat", selected: false},
      {id: 4, type: "assistance", mg: "legs", name: "Leg Extension Machine", selected: false},
      {id: 5, type: "assistance", mg: "legs", name: "Hamstring Curl Machine", selected: false},
      {id: 6, type: "assistance", mg: "legs", name: "Hip Thruster", selected: false},
      {id: 7, type: "assistance", mg: "legs", name: "Glute Bridge", selected: false},
      {id: 8, type: "assistance", mg: "chest", name: "Cable Chest Fly", selected: false},
      {id: 9, type: "assistance", mg: "chest", name: "DB Alternating Front Delt Raise", selected: false},
      {id: 10, type: "assistance", mg: "chest", name: "Floor Press", selected: false},
      {id: 11, type: "assistance", mg: "chest", name: "Svend Press", selected: false},
      {id: 12, type: "assistance", mg: "chest", name: "Chest Fly Machine", selected: false},
      {id: 13, type: "assistance", mg: "chest", name: "Tricep Pushdown", selected: false},
      {id: 14, type: "assistance", mg: "chest", name: "Overhead Tricep Extension", selected: false},
      {id: 15, type: "assistance", mg: "chest", name: "French Press", selected: false},
      {id: 16, type: "assistance", mg: "chest", name: "Tricep Kickback", selected: false},
      {id: 17, type: "assistance", mg: "back", name: "Lat Pulldown", selected: false},
      {id: 18, type: "assistance", mg: "back", name: "DB Bent Over Row (single arm)", selected: false},
      {id: 19, type: "assistance", mg: "back", name: "Face Pull", selected: false},
      {id: 20, type: "assistance", mg: "back", name: "Farmer's Carry", selected: false},
      {id: 21, type: "assistance", mg: "back", name: "DB Rear Delt Fly", selected: false},
      {id: 22, type: "assistance", mg: "back", name: "Seated Cable Row", selected: false},
      {id: 23, type: "assistance", mg: "back", name: "Cable Pulldown", selected: false},
      {id: 24, type: "assistance", mg: "back", name: "DB/BB/Cable Bicep Curl", selected: false},
      {id: 25, type: "assistance", mg: "back", name: "DB Concentration Curl", selected: false},
      {id: 26, type: "assistance", mg: "back", name: "Hammer Curl", selected: false},
      {id: 27, type: "assistance", mg: "shoulders", name: "DB Alternating Front Delt Raise", selected: false},
      {id: 28, type: "assistance", mg: "shoulders", name: "Lateral Raise", selected: false},
      {id: 29, type: "assistance", mg: "shoulders", name: "DB Rear Delt Fly", selected: false},
      {id: 30, type: "assistance", mg: "shoulders", name: "Face Pull", selected: false},
      {id: 31, type: "assistance", mg: "shoulders", name: "Overhead Press (single arm)", selected: false},
      {id: 32, type: "assistance", mg: "shoulders", name: "Floor Press (single arm)", selected: false},
      {id: 33, type: "assistance", mg: "shoulders", name: "Hand Walkouts", selected: false},
      {id: 34, type: "assistance", mg: "shoulders", name: "DB Renegade Row", selected: false}
    ],
    athleticGoal: [],
    workoutType: [],
    selectedMainExercises: []
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

  handleClickedMainExercise = (e) => {
    console.log(e + " should be added");
    this.setState({
      selectedMainExercises: [ ...this.state.selectedMainExercises, e ]
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
            <div className="selector-wrapper">
              <SelectAthleticGoal
                onAthleticGoalChange={this.handleGoalChange} />
              <SelectWorkoutType
                onWorkoutTypeChange={this.handleWorkoutTypeChange} />
            </div>
            <SelectMainExercises
              selectedWorkoutType={this.state.workoutType}
              displayMainExercises={this.state.mainExerciseList}
              getMuscleGroupsFromState={this.state.mainExerciseList.mg}
              onClickedMainExercise={this.handleClickedMainExercise} />
            <SelectAssistanceExercises
              selectedWorkoutType={this.state.workoutType}
              displayAssistanceExercises={this.state.assistanceExerciseList}
              getMuscleGroupsFromState={this.state.assistanceExerciseList.mg} />
            <YourWorkout
              displaySetsMain={4}
              displayRepsMain={10}
              displayGoal={this.state.athleticGoal}
              displayWorkoutType={this.state.workoutType}
              displayClickedMainExercises={this.state.selectedMainExercises} />
          </div>

          </main>
        </div>
    );
  }
}

export default App;
