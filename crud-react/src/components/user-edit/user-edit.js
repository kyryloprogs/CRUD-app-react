import React, { useContext, useState } from 'react';
import AddUserForm from '../user-form';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/user-context';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/user-slice';

const EditUser = () => {

  const navigator = useNavigate();
  // const { users, setUsers } = useContext(UserContext);
  const users = useSelector((state) => state.users.items);
  const dispatcher = useDispatch();
  const { id } = useParams();

  const user = users.find((searchUser) => searchUser.id === id);

  const handleOnSubmit = (user) => {
    dispatcher(updateUser({id: id, firstName: user.firstName, lastName: user.lastName, age: user.age}));
    navigator('/');
  };

  return (
    <div>
      <AddUserForm user={user} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;