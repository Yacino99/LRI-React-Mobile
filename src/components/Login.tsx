import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { allowedNodeEnvironmentFlags } from 'process';


import './Login.css';

export const Login: React.FC = (props) => {

  const [login, setLogin] = useState<string>();
  const [passwd, setPasswd] = useState<string>();

  let history = useHistory();

  function accessWebsite(data:any){
    sessionStorage.setItem('api_token', data.api_token);
    sessionStorage.setItem('refresh_token', data.refresh_token);

    history.push("/users");

    alert('connected');

  }


  function handleError(err:any){
    alert("Identifiants inccorects");
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
  var localImage = "./logo_LRI.png";
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
        <IonContent color="warning">

        <div className="bodyy">

        <img src={image} title="logo" className="logo" />

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

      </IonContent>

    </IonPage>
  );
};
