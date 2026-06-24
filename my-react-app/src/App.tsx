import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BecomeAHost from './pages/BecomeAHost'
import HostLandingPage from './pages/HostLandingPage'
import HostPortalPage from './pages/HostPortalPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/become-a-host" element={<BecomeAHost />} />
        <Route path="/host" element={<HostLandingPage />} />
        <Route path="/host/portal" element={<HostPortalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
