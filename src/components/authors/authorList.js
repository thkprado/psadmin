const React = require('react');
const { Link } = require('react-router');
const AuthorActions = require('../../actions/authorActions');
const toastr = require('toastr');

function deleteAuthor(id, event) {
  event.preventDefault();
  AuthorActions.deleteAuthor(id);
  toastr.success('Author Deleted');
}

function createAuthorRow(author) {
  return (
    <tr key={author.id}>
      <td><a href="#" onClick={(event) => deleteAuthor(author.id, event)}>Delete</a></td>
      <td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
      <td>{author.firstName} {author.lastName}</td>
    </tr>
  );
}

function AuthorList({ authors }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    </div>
  );
}

AuthorList.propTypes = { authors: React.PropTypes.array.isRequired };

module.exports = AuthorList;
