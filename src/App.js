import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element = { <HomePage/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

