import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList, SetUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
     SetUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
