import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import HostLogin from './components/auths/hostLogin';
import VisitorLogin from './components/auths/visitorLogin';
import HostPage from './components/host/hostPage';
import Dashboard from './components/dashboard/dashboard';
import HostSignup from './components/auths/hostSignup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="login" element={<HostLogin />} />
      <Route path="signup" element={<HostSignup />} />
      <Route path="loginSignup" element={<VisitorLogin />} />
      <Route path="host" element={<HostPage />} />
      <Route path="dashbord" element={<Dashboard />} />
      
    </Routes>
  </Router>
  );
}

export default App;
