import styles from './UserInput.module.css';
import {useState} from 'react';
import Button from "./UI/Button";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";

const UserInput = (props) => {

  const [enteredUserName, setUserName] = useState('');
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const [enteredUserAge, setUserAge] = useState('');
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const [error, setError] = useState();

  const errorHandler =()=>{
    setError(null)
  }

  const submitHandler = (event) => {

    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError(
        {title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)'}
      )
      return;
    }
    if (+enteredUserAge < 1) {
      setError(
        {title: 'Invalid age', message: 'Please enter a valid age (>0)'}
      )
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
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input_form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUserName} onChange={userNameChangeHandler}/>
          <label htmlFor="userage">Age(Years)</label>
          <input type="number" id="userage" value={enteredUserAge} onChange={userAgeChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>

  )
};

export default UserInput;
