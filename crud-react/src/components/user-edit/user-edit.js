import React, { useContext, useState } from 'react';
import AddUserForm from '../user-form';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user-context';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/user-slice';

const EditUser = ({ history }) => {

  const navigator = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  const dispatcher = useDispatch();
  // const [edit, isEdited] = useState(false);
  const { id } = useParams();
  const user = users.find((book) => book.id === id);

  const handleOnSubmit = (user) => {
    // const filteredUsers = users.filter((user) => user.id !== id);
    // setUsers([user, ...filteredUsers]);
    // alert("Done");
    dispatcher(updateUser({id: user.id, firstName: user.firstName, lastName: user.lastName, age: user.age}));
    navigator('/');
  };

  return (
    <div>
      <AddUserForm user={user} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;