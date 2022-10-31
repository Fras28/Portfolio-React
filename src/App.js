
import './App.css';
import Header from "./components/header/header"
import { Footer } from './components/Footer/footer';
import { Nav } from './components/Nav/nav';
import { AbourMe } from './components/AboutMe/aboutMe';
import { Certificates } from './components/Certifcado/credentials';
import { Project } from './components/Proj/projects';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AbourMe/>
      <Project/>
      <Certificates/>
      <Footer/>
    </div>
  );
}

export default App;
