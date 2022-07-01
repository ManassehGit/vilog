import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import HostLogin from './components/auths/hostLogin';
import VisitorLogin from './components/auths/visitorLogin';
import HostPage from './components/host/hostPage';
import Dash from './components/dashboard/dash/dash';
import HostSignup from './components/auths/hostSignup';

import Welcome from './components/welcomePage/welcome';
import VisitorMain from './components/visitorMain/visitorMain';
import VisitorQRLogin from './components/visitorSigning/visitorQRSigning';
import VisitorEmailLogin from './components/visitorSigning/visitorEmailLogin';
import VisitorGuest from './components/visitorSigning/visitorGuest';
import VisitorLogout from './components/visitorLogout/visitorLogout';
import VisitorDashboard from './components/visitorDashboard/visitorDashboard';
import EmployeeList from './components/dashboard/employeeList/employeeList';
import DashProfile from './components/dashboard/dashprofile/dashprofile';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="visitormain" element={<VisitorMain />}/>
      <Route path="scanqr" element={<VisitorQRLogin />}/>
      <Route path="visitorlogin" element={<VisitorEmailLogin />}/>
      <Route path="visitorguest" element={<VisitorGuest />}/>
      <Route path="visitorlogout" element={<VisitorLogout />}/>
      
      <Route path="start" element={<Home />}/>
      <Route path="login" element={<HostLogin />} />
      <Route path="signup" element={<HostSignup />} />
      <Route path="loginSignup" element={<VisitorLogin />} />
      <Route path="host" element={<HostPage />} />
      <Route path="dashboard" element={<Dash />} />
      <Route path="visitordashboard" element={<VisitorDashboard />} />
      <Route path="employeelist" element={<EmployeeList />} />
      <Route path="dashprofile" element={<DashProfile />} />
      <Route path="welcome" element={<Welcome />} />
      
      
    </Routes>
  </Router>
  );
}

export default App;
