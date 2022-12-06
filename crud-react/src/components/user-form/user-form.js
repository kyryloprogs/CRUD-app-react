import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const FormWrapper = styled.div`
    margin-top: 15px;
    margin-left: 15px;
`;

const ErrorMessage = styled.div`
    color: red;
    size: 30px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 15px;
`;

const AddUserForm = (props) => {
  const [user, setUser] = useState({
    firstName: props.user ? props.user.firstName : '',
    lastName: props.user ? props.user.lastName : '',
    age: props.user ? props.user.age : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { firstName, lastName, age } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstName, lastName, age];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        id: uuidv4(),
        firstName,
        lastName,
        age
      };
      props.handleOnSubmit(user);
    } else {
      errorMsg = 'You skipped the field!';
    }
    setErrorMsg(errorMsg);
  };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'age') {
            if (!value || parseInt(value) === +value) {
                setUser((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }
        else {
            setUser((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
  };

  return (
    <div className="main-form">
      <ErrorMessage>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      </ErrorMessage>
      
      <Form onSubmit={handleOnSubmit}>
        <FormWrapper>
            <Form.Group controlId="firstName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Enter user name:"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="lastName">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Enter user's lastname:"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
                className="input-control"
                type="number"
                name="age"
                value={age}
                placeholder="Enter age"
                onChange={handleInputChange}
            />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="submit-btn">
            Submit
            </Button>
        </FormWrapper>
      </Form>
    </div>
  );
};

export default AddUserForm;