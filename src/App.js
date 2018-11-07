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
      {id: 1, type: "compound", mg: "Legs", name: "BB Back Squat", selected: false},
      {id: 2, type: "compound", mg: "Legs", name: "Leg Press", selected: false},
      {id: 3, type: "compound", mg: "Legs", name: "Goblet Squat", selected: false},
      {id: 4, type: "compound", mg: "Back", name: "BB Deadlift", selected: false},
      {id: 5, type: "compound", mg: "Back", name: "Landmine Row", selected: false},
      {id: 6, type: "compound", mg: "Back", name: "Bent Over Row", selected: false},
      {id: 7, type: "compound", mg: "Chest", name: "Bench Press", selected: false},
      {id: 8, type: "compound", mg: "Chest", name: "Incline Bench Press", selected: false},
      {id: 9, type: "compound", mg: "Chest", name: "Chest Press Machine", selected: false},
      {id: 10, type: "compound", mg: "Shoulders", name: "Standing Overhead Press", selected: false},
      {id: 11, type: "compound", mg: "Shoulders", name: "Seated Overhead Press", selected: false}
    ],
    assistanceExerciseList: [
      {id: 1, type: "assistance", mg: "Legs", name: "Alternating Lunges (in place)", selected: false},
      {id: 2, type: "assistance", mg: "Legs", name: "Alternating Reverse Lunges", selected: false},
      {id: 3, type: "assistance", mg: "Legs", name: "Split Squat", selected: false},
      {id: 4, type: "assistance", mg: "Legs", name: "Leg Extension Machine", selected: false},
      {id: 5, type: "assistance", mg: "Legs", name: "Hamstring Curl Machine", selected: false},
      {id: 6, type: "assistance", mg: "Legs", name: "Hip Thruster", selected: false},
      {id: 7, type: "assistance", mg: "Legs", name: "Glute Bridge", selected: false},
      {id: 8, type: "assistance", mg: "Chest", name: "Cable Chest Fly", selected: false},
      {id: 9, type: "assistance", mg: "Chest", name: "DB Alternating Front Delt Raise", selected: false},
      {id: 10, type: "assistance", mg: "Chest", name: "Floor Press", selected: false},
      {id: 11, type: "assistance", mg: "Chest", name: "Svend Press", selected: false},
      {id: 12, type: "assistance", mg: "Chest", name: "Chest Fly Machine", selected: false},
      {id: 13, type: "assistance", mg: "Chest", name: "Tricep Pushdown", selected: false},
      {id: 14, type: "assistance", mg: "Chest", name: "Overhead Tricep Extension", selected: false},
      {id: 15, type: "assistance", mg: "Chest", name: "French Press", selected: false},
      {id: 16, type: "assistance", mg: "Chest", name: "Tricep Kickback", selected: false},
      {id: 17, type: "assistance", mg: "Back", name: "Lat Pulldown", selected: false},
      {id: 18, type: "assistance", mg: "Back", name: "DB Bent Over Row (single arm)", selected: false},
      {id: 19, type: "assistance", mg: "Back", name: "Face Pull", selected: false},
      {id: 20, type: "assistance", mg: "Back", name: "Farmer's Carry", selected: false},
      {id: 21, type: "assistance", mg: "Back", name: "DB Rear Delt Fly", selected: false},
      {id: 22, type: "assistance", mg: "Back", name: "Seated Cable Row", selected: false},
      {id: 23, type: "assistance", mg: "Back", name: "Cable Pulldown", selected: false},
      {id: 24, type: "assistance", mg: "Back", name: "DB/BB/Cable Bicep Curl", selected: false},
      {id: 25, type: "assistance", mg: "Back", name: "DB Concentration Curl", selected: false},
      {id: 26, type: "assistance", mg: "Back", name: "Hammer Curl", selected: false},
      {id: 27, type: "assistance", mg: "Shoulders", name: "DB Alternating Front Delt Raise", selected: false},
      {id: 28, type: "assistance", mg: "Shoulders", name: "Lateral Raise", selected: false},
      {id: 29, type: "assistance", mg: "Shoulders", name: "DB Rear Delt Fly", selected: false},
      {id: 30, type: "assistance", mg: "Shoulders", name: "Face Pull", selected: false},
      {id: 31, type: "assistance", mg: "Shoulders", name: "Overhead Press (single arm)", selected: false},
      {id: 32, type: "assistance", mg: "Shoulders", name: "Floor Press (single arm)", selected: false},
      {id: 33, type: "assistance", mg: "Shoulders", name: "Hand Walkouts", selected: false},
      {id: 34, type: "assistance", mg: "Shoulders", name: "DB Renegade Row", selected: false}
    ],
    athleticGoal: [],
    workoutType: [],
    selectedMainExercises: [],
    selectedAssistanceExercises: [],
    mainSets: [],
    mainReps: [],
    assistanceSets: [],
    assistanceReps: []
  }

  handleGoalChange = (e) => {
      this.setState({
        athleticGoal: e
      });
      console.log(this.state.athleticGoal);
    };

  handleWorkoutTypeChange = (e) => {
      this.setState({
        workoutType: e
      });
  };

  handleClickedMainExercise = (e) => {
    console.log(e + " should be added");
    if(e === undefined){return}
    this.setState({
      selectedMainExercises: [ ...this.state.selectedMainExercises, e ]
    });
  };

  handleClickedAssistanceExercise = (e) => {
    console.log(e + " should be added");
    if(e === undefined){return}
    this.setState({
      selectedAssistanceExercises: [ ...this.state.selectedAssistanceExercises, e ]
    });
  };

  figureMainSets = (e) => {
    let x;
    if(e === 'Strength/ Powerlifting' || e === 'Muscle Building/ Bodybuilding'){x = 4}
    else if(e === 'Chisel/ Cut'){x = 3}
    this.setState({
      mainSets: x
    });
  };

  figureMainReps = (e) => {
    let x;
    if(e === 'Strength/ Powerlifting'){x = 5}
    else if(e === 'Muscle Building/ Bodybuilding'){x = 8}
    else if(e === 'Chisel/ Cut'){x = 10}
    this.setState({
      mainReps: x
    });
  };

  figureAssistanceSets = (e) => {
    let x;
    if(e === 'Strength/ Powerlifting'){x = 3}
    else if(e === 'Muscle Building/ Bodybuilding'){x = 4}
    else if(e === 'Chisel/ Cut'){x = 3}
    this.setState({
      assistanceSets: x
    });
  };

  figureAssistanceReps = (e) => {
    let x;
    if(e === 'Strength/ Powerlifting'){x = 10}
    else if(e === 'Muscle Building/ Bodybuilding'){x = 12}
    else if(e === 'Chisel/ Cut'){x = 15}
    this.setState({
      assistanceReps: x
    });
  };


  render() {
    return (
        <div id="outer-container">
          <NavMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
          <main id="page-wrap" className="main-content-wrapper">
          <div className="center-me">
            <Brand />
            <div className="selector-wrapper">
              <SelectAthleticGoal
                onAthleticGoalChange={this.handleGoalChange}
                toGetMainSets={this.figureMainSets}
                toGetMainReps={this.figureMainReps}
                toGetAssistanceSets={this.figureAssistanceSets}
                toGetAssistanceReps={this.figureAssistanceReps} />
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
              getMuscleGroupsFromState={this.state.assistanceExerciseList.mg}
              onClickedAssistanceExercise={this.handleClickedAssistanceExercise} />
            <YourWorkout
              displayClickedMainExercises={this.state.selectedMainExercises}
              displayClickedAssistanceExercises={this.state.selectedAssistanceExercises}
              displayGoal={this.state.athleticGoal}
              displayWorkoutType={this.state.workoutType}
              displaySetsMain={this.state.mainSets}
              displayRepsMain={this.state.mainReps}
              displaySetsAssistance={this.state.assistanceSets}
              displayRepsAssistance={this.state.assistanceReps} />
          </div>

          </main>
        </div>
    );
  }
}

export default App;
