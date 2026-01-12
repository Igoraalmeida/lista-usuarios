import { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;