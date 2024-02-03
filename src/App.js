import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
