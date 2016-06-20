const React = require('react');
const { Link } = require('react-router');

function createAuthorRow(author) {
  return (
    <tr key={author.id}>
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
