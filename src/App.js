//import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from'./Components/Section/Section';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    
     <Navbar/>
      <Section/> 
     
     {/* <Routes>
        <Route path='/Home' exact component={Home} />
        <Route path='/Attornys' component={Attornys} />
        <Route path='/PracticeAreas' component={PracticeAreas} />
        <Route path='/ContactUs' component={ContactUs} />
      </Routes>
     */}

     </>
  );
}

export default App;
