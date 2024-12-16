import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './routes/SignUp'
import SignIn from './routes/SignIn'
import Home from './routes/Home'
import Design from "./routes/Design"



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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Design" element={<Design />} />
        {/* <Route path="/MovieDetail/:id" element={<MovieDetail />} /> */}
      </Routes>
    </Router>
  )
}

export default App
