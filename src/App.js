import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);

  const addUserDataHandler = (enteredUserData) => {
    setUserData((prevData) => {
      return (
        [enteredUserData, ...prevData]
      )
    })
  };

  console.log(userData);

  return (
    <div>
      <UserInput userDataHandler={addUserDataHandler}/>
      <UserList items={userData}/>
    </div>
  );
}

export default App;
