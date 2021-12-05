import './UserList.css';

const UserList = (props) => {

  if (props.items.length === 0) {
    return (
<div style={{display:'none'}}></div>
    )
  }

  return (
    <ul className='input_list'>
      {props.items.map((users) => (
        <li key={users.key}>
          {users.name} ({users.age} years Old)
        </li>))}
    </ul>
  )
};

export default UserList;
