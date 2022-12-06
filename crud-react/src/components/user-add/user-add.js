import React, { useContext } from 'react';
import UserForm from '../user-form';
import UserContext from '../../context/user-context';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
    background-color: antiquewhite;
`;

const AddUser = () => {

  const navigator = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const handleOnSubmit = (user) => {
    setUsers([user, ...users]);
    alert("Done");
    navigator('/');
    console.log(user);
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