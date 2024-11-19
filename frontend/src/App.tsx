import { useEffect, useState } from 'react'
import './App.css'
import Questionnaire from './component/questionCard'

function App() {
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    const response = await fetch ("http://localhost:5001/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
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
