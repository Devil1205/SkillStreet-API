import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import AddPlayer from './components/AddPlayer/AddPlayer.jsx';
import AllPlayers from './components/AllPlayers/AllPlayers.jsx';
import UpdatePlayer from './components/UpdatePlayer/UpdatePlayer.jsx';
import SearchRank from './components/SearchRank/SearchRank.jsx';

function App() {

  // const base_URL = "http://localhost:5000";
  const base_URL = "  https://psms-z35j.onrender.com";
  const [message, setMessage] = useState("");

  const updateMessage = (type, message) => {
    setMessage({ type, message });
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <Router>
      <Navbar base_URL={base_URL} message={message} updateMessage={updateMessage} />
      <Routes>
        <Route exact path='/' element={<Home base_URL={base_URL} />} />
        <Route exact path='/players/add' element={<AddPlayer base_URL={base_URL} updateMessage={updateMessage} />} />
        <Route exact path='/players' element={<AllPlayers base_URL={base_URL} updateMessage={updateMessage} />} />
        <Route exact path='/players/update' element={<UpdatePlayer base_URL={base_URL} updateMessage={updateMessage} />} />
        <Route exact path='/players/rank' element={<SearchRank base_URL={base_URL} updateMessage={updateMessage} />} />
      </Routes>
    </Router>
  )
}

export default App
