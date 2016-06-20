// https://github.com/reactjs/react-router/tree/master/upgrade-guides
const React = require('react');
// https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.4.0.md
const { withRouter } = require('react-router');

class About extends React.Component {
  constructor(props) {
    super(props);
    // Functions must be bound manually with ES6 classes
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentDidMount() {
    // const { route } = this.props;
    // const { router } = this.context;
    // https://github.com/reactjs/react-router/blob/master/docs/guides/ConfirmingNavigation.md
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  routerWillLeave(nextLocation) {
    console.log('About.routerWillLeave', nextLocation);
    return 'Are you sure you want to read a page that\'s this boring?';
  }

  // ES7
  // routerWillLeave = (nextLocation) => {
  //   console.log('About.routerWillLeave', nextLocation);
  //   return 'Are you sure you want to read a page that\'s this boring?';
  // }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses the following technologies:</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }

  // ES7
  // static propTypes = { route: React.PropTypes.object.isRequired };
}

About.propTypes = {
  route: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};
// About.contextTypes = { router: React.PropTypes.object.isRequired };

About.onEnter = (location, replaceWith) => {
  console.log('About.onEnter');
  console.log('location', location);
  console.log('replaceWith', replaceWith);
};
About.onLeave = () => { console.log('About.onLeave'); };

module.exports = withRouter(About);
