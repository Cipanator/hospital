import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header.js';
import {Main} from './components/Main/Main.js';
import {Footer} from './components/Footer/Footer.js';
function App() {
  return (
   <div> 
     <Header />
     <Main />
     <Footer/>
   </div>
  );
}


export default App;
