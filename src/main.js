const React = require('react');
const ReactDOM = require('react-dom');
// https://github.com/ReactJSTraining/history/blob/master/docs/HashHistoryCaveats.md
const { hashHistory, Router } = require('react-router');
// const { browserHistory, Router } = require('react-router');

const routes = require('./routes');

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app'));
