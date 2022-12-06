import React, { useContext } from 'react';
import AddUserForm from '../user-form';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user-context';
import { useNavigate } from 'react-router-dom';

const EditUser = ({ history }) => {

  const navigator = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const { id } = useParams();
  const user = users.find((book) => book.id === id);

  const handleOnSubmit = (user) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([user, ...filteredUsers]);
    alert("Done");
    navigator('/');
  };

  return (
    <div>
      <AddUserForm user={user} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;