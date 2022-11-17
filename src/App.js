
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Ticket from './pages/Tickets'
import { AddTicket } from './pages/AddTicket';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets" element={<Ticket />} />
            <Route path="/add-ticket" element={<AddTicket />} />
          </Routes>
        </>
      ) : (
        <>
        <NavBar setUser={setUser} />
        <AuthPage  setUser={setUser} />
        </>
      )}
    </main>
  );
}

export default App;
