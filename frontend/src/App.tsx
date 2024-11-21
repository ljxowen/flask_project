import { useEffect, useState } from 'react'
import './App.css'
import Questionnaire from './component/questionCard'

function App() {
  const [users, setUsers] = useState([])

  const fetchContacts = async () => {
    const response = await fetch ("http://localhost:5001/users")
    const data = await response.json()
    setUsers(data.users)
    console.log(data.users)
  }

  useEffect(() => {
    fetchContacts();
  }, [])

  return (
    <>
      < Questionnaire />
    </>
  )
}

export default App
