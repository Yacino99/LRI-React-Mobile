import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonAlert, NavContext } from '@ionic/react';

import React, { useCallback, useContext, useState } from 'react';
import { Redirect, Route, useHistory } from "react-router-dom";
import { allowedNodeEnvironmentFlags } from 'process';


import './Login.css';
import Home from '../pages/Home';

export const Login: React.FC = (props) => {

  const [login, setLogin] = useState<string>();
  const [passwd, setPasswd] = useState<string>();
  const [showAlert, setShowAlert] = useState(false);
  const [isConnectionSuccessful, setIsConnectionSuccessful] = useState(false);

  const [isAuthed , setIsAuthed] = useState(false);

  let message = "Bienvenue "+login;
  //let history = useHistory();


  const {navigate} = useContext(NavContext);

  // Call this function when required to redirect with the back animation
  const redirect = useCallback(
    () => navigate('/home'),
    [navigate]
  );

  function accessWebsite(data:any){
    sessionStorage.setItem('api_token', data.api_token);
    sessionStorage.setItem('refresh_token', data.refresh_token);

    setIsConnectionSuccessful(true);

    setIsAuthed(true);

   
    redirect();
    window.location.reload();
    alert('reloaded')

  }


  function handleError(err:any){
    setShowAlert(true);
  }

  function handleSubmit(e:any){

      e.preventDefault();
      //e.stopPropagation();
    // alert('prevent default')

      fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
    // mode : 'no-cors',
      headers: {
          'Content-Type': 'application/json' ,
      },
        body: JSON.stringify({
            'login': login,
            'password': passwd
        }),
      })


      .then((res) => res.json() )
      .then((data) => accessWebsite(data))
      .catch((err) => handleError(err)  /*alert('in error i guess') */);

  }
  var image =  "https://www.luxroutage.lu/wp-content/uploads/2022/06/Logo-LuxRoutage-new-entete-1.png";
  var localImage = "./img/logo_LRI.png";
  var imageLri = "https://new.lri.systems/web/img/logo-LRI.png";

  
  

  return (
    /*<IonPage>

      <IonContent >

       <div className='boddy'>
          <IonItem>
            <img src="../../img/logo-LRI.png" title="" className="logo" />
          </IonItem>

          <form className="ion-padding" action='/'>


              <IonItem>
                <IonLabel position="floating">Login</IonLabel>
                <IonInput required value={login} placeholder="Enter login" onIonChange={e => setLogin(e.detail.value!)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput required value={passwd} placeholder="Enter password" onIonChange={e => setPasswd(e.detail.value!)} type="password"></IonInput>
              </IonItem>

            <IonItem lines="none">
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block" onClick={e => handleSubmit(e)}>
              Login
            </IonButton>

          </form>
      </div>
      </IonContent>
    </IonPage>*/

    <IonPage>
        <IonContent color="medium">

        <div className="bodyy">

        <img src={imageLri} title="logo" className="logo" />

          <div className="box-form">

                  <form method="post" action="/" id="loginForm" name="loginForm" className="form-container">

                        <div className="lesInput">
                          <label htmlFor="login" className="form-label">Login (*)</label>
                          <input type="text" className="form-control" name="login" id="login" required onChange={e => setLogin(e.target.value!)} />
                        </div>

                        <div className="lesInput">
                          <label htmlFor="password" className="form-label">Password (*)</label>
                          <input type="password" className="form-control" name="password" id="password" required onChange={e => setPasswd(e.target.value!)} />
                        </div>


                      <p className="action text-center">
                        <button type="submit" className="button" name="submit_login" onClick={e => handleSubmit(e)}><span>Login</span></button>
                      </p>

                </form>

          </div>

        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Erreur de connexion"
          subHeader="L'Authentification a echoué
          Login ou Mot de passe incorrect"
          message="Ou verifirez que vous etes bien connecté a internet"
          buttons={['OK']}
        />  

        <IonAlert
          isOpen={isConnectionSuccessful}
          onDidDismiss={() => setIsConnectionSuccessful(false)}
          header="Connextion Reussi !"
          message={message}
          buttons={['OK']}
        />  


      </IonContent>

    </IonPage>
  );
};
