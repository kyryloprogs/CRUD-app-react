import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppHeader from '../components/app-header';
import AddBook from '../components/user-add';
import UserList from '../components/user-list';
import useLocalStorage from '../hooks/local-storage';
import EditUser from '../components/user-edit';
import UserContext from '../context/user-context';

const AppRouter = () => {

  const [users, setUsers] = useLocalStorage('users', '');

  return (
    <BrowserRouter>
      <div>
      <AppHeader />
        <div className="main-content">
          <UserContext.Provider value={{ users, setUsers }}>

            <Routes>     
              <Route element={<UserList/>} path="/" exact={true}/>
               <Route element={<AddBook/>} path="/add" />
               <Route element={<EditUser/>} path="/edit/:id" />
              <Route component={() => <Navigate to="/" />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;