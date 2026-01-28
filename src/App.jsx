import { useState } from 'react'
import UserList from '../components/UserList.jsx'
import Search from '../components/Search.jsx'
import Footer from '../components/Footer.jsx'
import './App.css'


function App() {

  const [search, setSearch] = useState('');

  return (
     <div className='container'>
      <h1>Users List</h1>
      
      <Search search={search} setSearch={setSearch} />
      
      <UserList search={search} />

      <Footer/>
    </div>
  )
}

export default App;
