
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { getUser } from './utilities/users-service';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { AddTicket } from './pages/AddTicket';
import { TicketLists } from './pages/TicketLists';
import { Ticket } from './pages/Tickets'
// import OrderHistoryPage from './pages/OrderHistoryPage';
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
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketLists />} />
            <Route path="/ticket/:tId" element={<Ticket />} />
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
