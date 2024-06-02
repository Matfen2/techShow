import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlockBuster from './components/BlockBuster';
import Indies from './components/Indies';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/blockbuster" element={<BlockBuster />} />
        <Route path="/indies" element={<Indies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

