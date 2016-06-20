const React = require('react');
const { Link } = require('react-router');

function Home() {
  return (
    <div className="jumbotron">
      <h1>Administration</h1>
      <p>React, React Router, and Flux for ultra-responsive web apps.</p>
      <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
  );
}

module.exports = Home;
