import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const ButtonBlock = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const UserCardBlock = styled.div`
    border: 2px solid black;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-around;
    width: 48%; 
    margin: 10px 2px 15px 2px;
`;

const CardRow = styled.div`
    margin-left: 10px;
    font-size: 15px;
    font-weight: bold;
`;
const User = ({id, firstName, lastName, age, handleDeleteUser}) => {
    const navigator = useNavigate();

    return (
        <UserCardBlock>
            <div className="user-info">
                <CardRow>ID: {id}</CardRow>
                <CardRow>Name: {firstName}</CardRow>
                <CardRow>LastName: {lastName}</CardRow>
                <CardRow>Age: {age}</CardRow>
            </div>
            <ButtonBlock>
                <Button variant="info" onClick={() => navigator(`/edit/${id}`)}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeleteUser(id)}>
                    Delete        
                </Button>     
            </ButtonBlock>
        </UserCardBlock>
    )
};


export default User;