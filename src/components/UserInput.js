import './UserInput.css';
import {useState} from 'react';
import Button from "./UI/Button";

const UserInput = () => {

  const [enteredUserName, setUserName] = useState('');
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    console.log(enteredUserName)
  };
  const [enteredUserAge, setUserAge] = useState('');
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
    console.log(enteredUserAge)
  };

  return (
    <div className='input_form'>
      <label>Username</label>
      <input type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
      <label>Age(Years)</label>
      <input type="text" value={enteredUserAge} onChange={userAgeChangeHandler}/>
      <Button type="submit">Add User</Button>
    </div>
  )
};

export default UserInput;
