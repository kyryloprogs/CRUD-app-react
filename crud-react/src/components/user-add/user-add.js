import React, { useContext } from 'react';
import UserForm from '../user-form';
import UserContext from '../../context/user-context';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/user-slice';
const FormWrapper = styled.div`
    background-color: antiquewhite;
`;

const AddUser = () => {

  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const handleOnSubmit = (user) => {
    // setUsers([user, ...users]);
    // alert("Done");
    // navigator('/');
    dispatcher(addUser({id: user.id, firstName: user.firstName, lastName: user.lastName, age: user.age}));
    console.log(user);
    navigator('/');
  };

  return (
    <React.Fragment>
        <FormWrapper>
            <UserForm handleOnSubmit={handleOnSubmit} />
        </FormWrapper>
    </React.Fragment>
  );
};

export default AddUser;