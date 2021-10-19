import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'styles/styles.css';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import AuthLayout from 'layouts/AuthLayout';
import Admin from 'pages/admin/Index';
import Registro from 'pages/auth/Registro';
import Login from 'pages/auth/Login';
import Index from 'pages/Index';
import Ropa from 'pages/admin/Ropa';


function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route path= {['/admin','/admin/ropa','/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/ropa'>
                <Ropa />
              </Route>
              <Route path='/admin/clientes'>
                <Clientes />
              </Route>
              <Route path= '/admin'>
                <Admin />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login','/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route  path='/registro'>
                <Registro />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
           <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
