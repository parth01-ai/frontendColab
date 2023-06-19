import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Bus from './Components/Buses/Bus';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element = { <HomePage/> } />
        <Route  path = "/busbooking" element = { <Bus/> } />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

