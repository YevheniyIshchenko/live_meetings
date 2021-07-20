import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// pageNumber
// usersCount-
//

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const users = this.props.users;

    const userPerPage = 3;
    const { currentPage } = this.state;
    // input userPerPage
    // output: users[]

    const startIndex = (currentPage - 1) * userPerPage; // 0 3 6 9 12
    const endIndex = startIndex + userPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
