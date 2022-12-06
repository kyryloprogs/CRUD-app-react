import React from "react";
import { useContext } from "react";
import User from '../user-full-info';
import UserContext from "../../context/user-context";
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color: red;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 10px;
`;

const ContentBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const UserList = () => {
    const { users, setUsers } = useContext(UserContext);

    const handleDeleteUser = (id) => {
        setUsers(users.filter((usr) => usr.id !== id));
        alert("Done!");
    };

    return (
        <React.Fragment>
            <ContentBlock>
                {users ? (
                users.map((usr) => (
                    // <ContentBlock>
                        <User key={usr.id} {...usr} handleDeleteUser={handleDeleteUser} />
                    // </ContentBlock>
                ))) : (
                <ErrorMessage>No users available.</ErrorMessage>
                )}
            </ContentBlock>
        </React.Fragment>
    );
};

export default UserList;