import React from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              Preview
              <ul>
                <li>
                  <NavLink to="/preview/10">Initiate</NavLink>
                </li>
                <li>
                  <NavLink to="/preview/response/10">Response</NavLink>
                </li>
                <li>
                  <NavLink to="/preview/finish">Finish</NavLink>
                </li>
              </ul>
            </li>
            <li>
              Submission
              <ul>
                <li>
                  <NavLink to="/submission/10">Initiate</NavLink>
                </li>
                <li>
                  <NavLink to="/submission/response/10">Response</NavLink>
                </li>
                <li>
                  <NavLink to="/submission/finish">Finish</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/10231/member">Member</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={() => "Home"} />
          <Route path="/preview" component={Preview} />
          <Route path="/submission" component={Submission} />
          <Route path="/:id/member" component={Member} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export function Member(props) {
  return (
    <h1>
      I am your memeber id {props.match.params.id} componenet. write your code
      here
    </h1>
  );
}

export function Preview(props) {
  return (
    <Switch>
      <Route path={`${props.match.url}/finish`} component={PreviewFinish} />
      <Route path={`${props.match.url}/response/:id`} component={PreviewById} />
      <Route path={`${props.match.url}/:id`} component={PreviewInitiate} />
    </Switch>
  );
}

export function Submission(props) {
  return (
    <Switch>
      <Route path={`${props.match.url}/finish`} component={SubmissionFinish} />
      <Route
        path={`${props.match.url}/response/:id`}
        component={SubmissionById}
      />
      <Route path={`${props.match.url}/:id`} component={SubmissionInitiate} />
    </Switch>
  );
}

export function PreviewById(props) {
  console.log(props.match.params);
  return "Hi I am preview by ID";
}

export function PreviewInitiate(props) {
  console.log(props.match.params);
  return "Hi I am preview Initiate";
}

export function PreviewFinish(props) {
  console.log(props.match.params);
  return "Hi I am preview Finish";
}

export function SubmissionById(props) {
  console.log(props.match.params);
  return "Hi I am Submission by ID";
}

export function SubmissionInitiate(props) {
  console.log(props.match.params);
  return "Hi I am Submission Initiate";
}

export function SubmissionFinish(props) {
  console.log(props.match.params);
  return "Hi I am Submission Finish";
}
