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
