import './App.css';
import logo from './logo.svg';
import Count from './demoState';
import TodoFeature from './features/Todo';
import DataFetching from './features/DataFetching';
import Users from './components/User/index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{background:'linear-gradient(180deg, #2D9CDB 0%, #1B4088 100%)',width:'100vw', height:'100vh'}}>
      <Switch>
          <Route path="/todo-list" component={TodoFeature} exact />
          <Route path="/users" component={Users}/>
      </Switch>
    </div>
  );
}

// Xem them huong dan cach fix: blocked by CORS policy o day: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

export default App;
