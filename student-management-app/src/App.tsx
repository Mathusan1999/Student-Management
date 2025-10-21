import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/Students/StudentList';
import StudentDetail from './pages/Students/StudentDetail';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/students" exact component={StudentList} />
        <Route path="/students/:id" component={StudentDetail} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;