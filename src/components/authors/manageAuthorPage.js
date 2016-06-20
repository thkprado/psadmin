const React = require('react');
const { withRouter } = require('react-router');
const AuthorForm = require('./authorForm');
const AuthorApi = require('../../api/authorApi');
const toastr = require('toastr');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state
    this.state = {
      author: { id: '', firstName: '', lastName: '' },
    };

    this.setAuthorState = this.setAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  setAuthorState(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  }

  saveAuthor(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.');
    this.props.router.push('authors');
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
      />
    );
  }
}

ManageAuthorPage.propTypes = {
  router: React.PropTypes.object.isRequired,
};

module.exports = withRouter(ManageAuthorPage);
