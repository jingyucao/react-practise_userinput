import UserInput from "./components/Users/UserInput";
import UserList from "./components/Users/UserList";
import { useState } from 'react';
import {Fragment} from "react";

function App() {

  const [userData, setUserData] = useState([]);

  const addUserDataHandler = (enteredUserData) => {
    setUserData((prevData) => {
      return (
        [enteredUserData, ...prevData]
      )
    })
  };

  return (
    // <>
    //   <UserInput userDataHandler={addUserDataHandler}/>
    //   <UserList items={userData}/>
    // </>
    // this syntax is depending on if the project set up

    <Fragment>
      <UserInput userDataHandler={addUserDataHandler}/>
      <UserList items={userData}/>
    </Fragment>

  );
}

export default App;
