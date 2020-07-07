import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubcontext = useContext(GithubContext);

  const { loading, users } = githubcontext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
export default Users;

// rce
