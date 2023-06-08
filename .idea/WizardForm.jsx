import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

createStore({
  data: {}
});

const WizardForm = () => {
  return (
    <StateMachineProvider>
      <h2>Page Form Wizard</h2>

      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );

};

export default WizardForm;
