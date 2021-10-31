import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './GraphQL/config'
import Couter from './Counter/Couter';
import CouterWithoutButtons from './CounterWithoutButtons/CouterWithoutButtons';
import NewCounterPage from './NewCounterPage/NewCounterPage'
import Todos from './Todos/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./app.css"
import RandomNumber from './RandomNumber';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="main">
          <div className='sidebar'>
            <Link to="/counter"><li>Counter</li></Link>
            <Link to="/counterpage"><li>NewCounterPage</li></Link>
          </div>

          <div className='content'>
            <Switch>
              <Route path="/counter">
                <Couter />
                <CouterWithoutButtons />
              </Route>
              <Route path="/counterpage">
                <NewCounterPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
