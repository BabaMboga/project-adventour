import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AccommodationList from "./components/AccommodationList";
import AccommodationDetails from "./components/AccommodationDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AccommodationList} />
            <Route path="/details/:id" component={AccommodationDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
