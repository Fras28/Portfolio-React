
import './App.css';
import Header from "./components/header/header"
import Blog from './components/Blog/blog';
import { Credentials } from './components/Credentials/credentials';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Blog/>
      <Credentials/>

      <Footer/>
    </div>
  );
}

export default App;
