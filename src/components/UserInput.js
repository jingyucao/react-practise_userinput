import './UserInput.css';
import {useState} from 'react';
import Button from "./UI/Button";

const UserInput = (props) => {

  const [enteredUserName, setUserName] = useState('');
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const [enteredUserAge, setUserAge] = useState('');
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };


  const submitHandler=(event)=>{

    event.preventDefault();
    const enteredUserData={
      name:enteredUserName,
      age:enteredUserAge,
    };
    props.userDataHandler(enteredUserData);

    setUserName('');
    setUserAge('');
  }

  return (
    <form className='input_form' onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
      <label>Age(Years)</label>
      <input type="text" value={enteredUserAge} onChange={userAgeChangeHandler}/>
      <Button type="submit">Add User</Button>
    </form>
  )
};

export default UserInput;
