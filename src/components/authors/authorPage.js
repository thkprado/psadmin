const React = require('react');

const { Link } = require('react-router');

const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');

class AuthorsPage extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state
    this.state = {
      authors: [],
    };
  }
  componentWillMount() {
    // this.onMount(() => this.setState({ authors: AuthorApi.getAllAuthors() }));
    this.setState({ authors: AuthorApi.getAllAuthors() });
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
