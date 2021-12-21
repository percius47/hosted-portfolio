
  import './App.css';
  import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Nav from './Components/Nav';
import BlogsPage from './pages/BlogsPage';
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home';

function App() {

  return (
    <>
      <h1>Prashant Test</h1>
      <Router>
        <Switch>
          <h1>Inside switch</h1>
          {/* <Route exact path="/" component={Home} />

          <Route path="/projects" component={ProjectPage} />

          <Route exact path="/blogs" component={BlogsPage} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;

