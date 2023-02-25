import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Contact from './Admin/Contact';
import Courses from './Admin/Courses';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
