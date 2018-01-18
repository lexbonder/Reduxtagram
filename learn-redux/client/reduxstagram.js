import React from 'react';

import {render} from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import Raven from 'raven-js';
// import { sentry_url, logException } from './data/config';

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'asdfasdf',
//     userLevel: 'editor'
//   }
// }).install();

// Raven.captureMessage('Something bad happened');
// Raven.showReportDialog();

// logException(new Error('download failed!'), {
//   email: 'lexbonder@gmail.com'
// });

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} >
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

