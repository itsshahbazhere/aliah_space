import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Team from './components/Team'
import LearnSpace from './components/LearnSpace'
import ExamSpace from './components/ExamSpace'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="min-h-[100dvh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/examspace" element={<ExamSpace />} />
          <Route path="/learnspace" element={<LearnSpace />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          
          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;