import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <>
      
      <h1>Users Management</h1>
      
      <h3>Numbers Of Users: {users.length}</h3>
      {
        users.map(user => user.name)
      }
    </>
  )
}

export default App
