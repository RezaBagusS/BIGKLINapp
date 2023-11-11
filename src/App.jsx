import LandingPage from "./pages/LandingPage"
import ServiceMachine from "./pages/ServiceMachine"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service/:beratCucian" element={<ServiceMachine />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
