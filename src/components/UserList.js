import styles from './UserList.module.css';
import Card from "./UI/Card";

const UserList = (props) => {

  if (props.items.length === 0) {
    return (
<div style={{display:'none'}} />
    )
  }

  return (
    <Card className={styles.input_list}>
      <ul>
        {props.items.map((users) => (
          <li key={users.id}>
            {users.name} ({users.age} years Old)
          </li>))}
      </ul>
    </Card>

  )
};

export default UserList;
