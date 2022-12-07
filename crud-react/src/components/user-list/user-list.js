import React from "react";
import { useContext, useState } from "react";
import User from '../user-full-info';
import UserContext from "../../context/user-context";
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import { deleteUser } from '../../redux/user-slice';

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
    const dispatcher = useDispatch();
    //const { users, setUsers } = useContext(UserContext);

    const users = useSelector((state) => state.users.items);
    //console.log(users);
    const handleDeleteUser = (id) => {
        //setUsers(users.filter((usr) => usr.id !== id));
        dispatcher(deleteUser({id: id}));
        alert("Done!");
    };

    return (
        <React.Fragment>
            <ContentBlock>
                {/* {users ? (
                users.map((usr) => (
                    // <ContentBlock>
                        <User key={usr.id} {...usr} handleDeleteUser={handleDeleteUser} />
                    // </ContentBlock> */}
                {users.length > 0 ? users.map((usr) => (
                        <User key={usr.id} {...usr} handleDeleteUser={handleDeleteUser}/> // 
                
                )) : <ErrorMessage>No users available.</ErrorMessage>
                }
            </ContentBlock>
        </React.Fragment>
    );
};

export default UserList;