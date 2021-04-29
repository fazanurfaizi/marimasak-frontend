import { Router, Switch } from 'react-router';
import AppRoute from './AppRoute'
import { routes } from './routes'
import { history } from './utils/history'

function App() {
  
  const routeComponents = routes.map(({ path, component, layout, authentication }, key) => 
    <AppRoute 
      exact
      path={path} 
      component={component} 
      layout={layout} 
      authentication={authentication} 
      key={key} 
    />
  );

  return (
    <Router history={history}>
      <Switch>
        {routeComponents}        
      </Switch>
    </Router>
  );
}

export default App;
