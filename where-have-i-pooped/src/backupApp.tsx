import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapView from './components/MapView';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Where Have I Pooped</h1>
        <Switch>
          <Route path="/" exact component={MapView} />
          <Route path="/profile" component={Profile} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;