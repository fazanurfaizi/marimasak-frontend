import { BrowserRouter, Switch } from 'react-router-dom'
import AppRoute from './AppRoute'
import { routes } from './routes'

function App() {
  
  const routeComponents = routes.map(({ path, component, layout, authentication }, key) => 
    <AppRoute exact path={path} component={component} layout={layout} authentication={authentication} key={key} />
  );

  return (
    <BrowserRouter>
      <Switch>
        {routeComponents}        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
