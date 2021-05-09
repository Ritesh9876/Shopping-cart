import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Itemdetails from './components/Itemdetails'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Router>
    <Navbar/>
         <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Shop' exact component={Shop} />
          <Route path='/Cart' component={Cart} />
          <Route path='/Shop/:id' component={Itemdetails} />
         </Switch>
       </Router>
       </div>
  );
}

export default App;
