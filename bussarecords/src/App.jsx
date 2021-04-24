import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/inicio">
              Estas en Inicio
            </Route>

            <Route path="/">
                Estas en la Base
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
