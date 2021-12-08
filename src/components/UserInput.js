import styles from './UserInput.module.css';
import {useState} from 'react';
import Button from "./UI/Button";
import Card from "./UI/Card";

const UserInput = (props) => {

  const [enteredUserName, setUserName] = useState('');
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const [enteredUserAge, setUserAge] = useState('');
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {

    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    } else {
      const enteredUserData = {
        name: enteredUserName,
        age: enteredUserAge,
        id: Math.random().toString(),
      };

      props.userDataHandler(enteredUserData);

      setUserName('');
      setUserAge('');
    }

  }

  return (
    <Card className={styles.input_form}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="userage">Age(Years)</label>
        <input type="number" id="userage" value={enteredUserAge} onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
};

export default UserInput;
