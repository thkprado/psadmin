const React = require('react');

const Header = require('./common/header');
$ = jQuery = require('jquery');

function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        {children}
      </div>
    </div>
  );
}

App.propTypes = { children: React.PropTypes.element.isRequired };

module.exports = App;
