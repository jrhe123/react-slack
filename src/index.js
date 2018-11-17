import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Semantic-ui
import 'semantic-ui-css/semantic.min.css';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
