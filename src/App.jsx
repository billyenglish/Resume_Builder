import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>   
    </>
  )
}

export default App
