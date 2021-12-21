
  import './App.css';
  import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Nav from './Components/Nav';
import BlogsPage from './pages/BlogsPage';
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
   
      <Router>

<Switch>
 
   <Route path="/projects" component={ProjectPage}/>
     
      <Route exact path="/" component={Home}/>

   
  
  <Route exact path="/blogs" component={BlogsPage}/>
   
</Switch>
</Router>
      </div>
  );
}

export default App;

