import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import PersonalDetails from './components/PersonalDetails'
import Links from "./components/Links";
import TechnicialSkills from "./components/TechnicialSkills";
import WorkExperience from './components/WorkExperience';
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificate from './components/Certificates';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/links" element={<Links />} />
        <Route path="/technicial_skills" element={<TechnicialSkills />} />
        <Route path="/work_experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes> 
    </>
  )
}

export default App
