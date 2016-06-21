const React = require('react');
const { Link } = require('react-router');
const AuthorStore = require('../../stores/authorStore');
const AuthorList = require('./authorList');

class AuthorsPage extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state
    this.state = { authors: AuthorStore.getAllAuthors() };
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    AuthorStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ author: AuthorStore.getAllAuthors() });
  }
  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="/author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
}

module.exports = AuthorsPage;
