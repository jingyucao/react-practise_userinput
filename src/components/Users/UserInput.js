import styles from './UserInput.module.css';
import {useState, useRef} from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const UserInput = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null)
  }

  const submitHandler = (event) => {

    event.preventDefault();

    console.log(ageInputRef);
    console.log(ageInputRef.current);
    console.log(ageInputRef.current.value);

    const enteredName=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(
        {title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)'}
      )
      return;
    }
    if (+enteredAge < 1) {
      setError(
        {title: 'Invalid age', message: 'Please enter a valid age (>0)'}
      )
      return;
    } else {
      const enteredUserData = {
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      };

      props.userDataHandler(enteredUserData);

      nameInputRef.current.value='';
      ageInputRef.current.value='';
      // this is something that we normally should NOT do, because we dont want to change DOM,
      // but in this small project, we want to see how Ref works, we do this...

    }

  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input_form}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text"
                 id="username"
                 ref={nameInputRef}
          />
          <label htmlFor="userage">Age(Years)</label>
          <input type="number"
                 id="userage"
                 ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>

  )
};

export default UserInput;
