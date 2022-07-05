import Login from './components/Login';
import { Route, Routes, Router } from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom';


function App() {
  return (

      <div className='app'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </div>

  );
}

export default App;
