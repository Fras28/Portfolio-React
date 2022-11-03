
import './App.css';
import Header from "./components/header/header"
import { Nav } from './components/Nav/nav';
import { AbourMe } from './components/AboutMe/aboutMe';
import { Certificates } from './components/Certifcado/credentials';
import { Project } from './components/Proj/projects';
import { ToTop } from "./components/Footer/backToTop";


function App() {
  return (
    <div className="App">
      <Nav/>
      <ToTop/>
      <Header/>
      <AbourMe/>
      <Project/>
      <Certificates/>
    </div>
  );
}

export default App;
