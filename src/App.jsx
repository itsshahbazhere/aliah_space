import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Team from './components/Team'
import LearnSpace from './components/LearnSpace'
import ExamSpace from './components/ExamSpace'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/examspace" element={<ExamSpace />} />
        <Route path="/learnspace" element={<LearnSpace />} />
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;