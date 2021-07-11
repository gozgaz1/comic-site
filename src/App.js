import React from 'react';
import './App.css';
import Sidebar from './componentz/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import DEV from './pageComponentz/DEV/DEV';

function App() {
  return (
    <div className='mainPage'>
      <Router>
        <Sidebar />
        <Switch>
          {routes.map((item,index) => {
            return (
              <Route key={item.key} path={item.path} exact component={item.comp} />
            )
          })}
          <Route key='devMenu' path='/devMenu' component={DEV}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
