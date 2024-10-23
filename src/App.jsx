import "./App.css"
import Home from './pages/Home';
import Country from './pages/Country';
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      <h1><Home/></h1>
      <h1><Country/></h1>
      <h1><About/></h1>
      <h1><Contact/></h1>
    </div>
  )
}

export default App