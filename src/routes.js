const React = require('react');
const { IndexRoute, Route, Redirect } = require('react-router');

const App = require('./components/app');
const HomePage = require('./components/homePage');
const AuthorPage = require('./components/authors/authorPage');
const ManageAuthorPage = require('./components/authors/manageAuthorPage');
const AboutPage = require('./components/about/aboutPage');
const NotFoundPage = require('./components/notFoundPage');

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="authors" component={AuthorPage} />
    <Route path="author" component={ManageAuthorPage} />
    <Route path="author/:id" component={ManageAuthorPage} />
    <Route
      path="about" component={AboutPage}
      onEnter={AboutPage.onEnter} onLeave={AboutPage.onLeave}
    />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

module.exports = routes;
