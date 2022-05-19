import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AuthForm />}/>
      <Route path="loginSignup" element={<AuthForm />} />
      <Route path="host" element={<AuthForm />} />
      <Route path="dashbord" element={<AuthForm />} />
      <Route path="login" element={<AuthForm />} />
      
    </Routes>
  </Router>
  );
}

export default App;
