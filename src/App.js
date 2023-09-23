// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './routes';
import './App.css';
import CustomNavbar from './components/navbar/CustomNavbar';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Layout>
          <Switch>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            ))}
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
