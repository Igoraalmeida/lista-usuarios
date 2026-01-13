import { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(search.toLowerCase())
)

  useEffect(() => {
    async function fetchUsers(){
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        setUsers(data);
        setLoading(false);

      } catch (error) {

        console.error('Erro ao buscar usuários:', error);

      }
      
    }
    
    fetchUsers();
      
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }
  if (error) {
    return <p>Erro ao carregar usuários.</p>;
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