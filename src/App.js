import { BrowserRouter, Switch } from 'react-router-dom'
import AppRoute from './AppRoute'
import { routes } from './routes'

function App() {
  
  const routeComponents = routes.map(({ path, component, layout }, key) => 
    <AppRoute exact path={path} component={component} layout={layout} key={key} />
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
