import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Users from './pages/Users';
import { Menu } from './components/Menu';
import { Login } from './components/Login';
import Dashboard from './pages/Dashboard';
import CurrentScans from './pages/CurrentScans';



const App: React.FC = (props) => (


  
  <IonApp>
    
    <IonReactRouter>
     { window.location.pathname != '/login' ? <Menu/> : console.log(window.location.pathname )  }
      <IonRouterOutlet  id="main" >
        <Route path="/home" component={Home} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/users" component={Users} exact={true} />
        <Route path="/current-scans" component={CurrentScans} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  
);

export default App;
