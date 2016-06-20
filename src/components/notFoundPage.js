const React = require('react');
const { Link } = require('react-router');

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Whoops! Sorry, there is nothing to see here.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  );
}

module.exports = NotFoundPage;
