import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameDetails from "./pages/GameDetails.jsx";
import GameSearch from "./pages/GameSearch.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GameSearch />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
