import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SingleShow from "../../containers/SingleShow";

const Main = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Series} />
      <Route path="/series/:id" component={SingleShow} />
    </Switch>
  );
};

export default Main;
