import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import School from "./components/School";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
       <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <School/>
      <Contact/>
      
      <Footer/>
     </div>
  );
}

export default App;
