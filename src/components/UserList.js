import './UserList.css';

const UserList = (props) => {
  return (
    <ul className='input_list'>
      {props.items.map((users) => (
        <li>
          {users.name}+"("+{users.age}+"years Old)"
        </li>))}
    </ul>
  )
};

export default UserList;
