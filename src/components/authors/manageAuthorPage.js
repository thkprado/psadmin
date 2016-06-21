const React = require('react');
const { withRouter } = require('react-router');
const AuthorForm = require('./authorForm');
const AuthorActions = require('../../actions/authorActions');
const AuthorStore = require('../../stores/authorStore');
const toastr = require('toastr');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state
    this.state = {
      author: { id: '', firstName: '', lastName: '' },
      errors: {},
      dirty: false,
    };

    this.setAuthorState = this.setAuthorState.bind(this);
    // this.authorFormIsValid = this.authorFormIsValid.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentWillMount() {
    const authorId = this.props.params.id; // from the path '/author/:id'
    if (authorId) {
      this.setState({ author: AuthorStore.getAuthorById(authorId) });
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  setAuthorState(event) {
    this.setState({ dirty: true });
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  }

  routerWillLeave() {
    return this.state.dirty ? 'Leave without saving?' : null;
  }

  authorFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear any previous errors.

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });
    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
    this.setState({ dirty: false }, () => {
      toastr.success('Author saved.');
      this.props.router.push('authors');
    });
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}
      />
    );
  }
}

ManageAuthorPage.propTypes = {
  params: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

module.exports = withRouter(ManageAuthorPage);
