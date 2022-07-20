import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonAlert, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';

import classes from './tables.module.css';
import { Menu } from '../components/Menu';



function json2array(json:any){
  var result:any = [];
  var keys = Object.keys(json);
  keys.forEach(function(key){
      result.push(json[key]);
  });
  return result;
}

const Home: React.FC = () => {


    const [showAlert, setShowAlert] = useState(true);

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>HOME</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
     

    {
        /**
         * TODO Next :
         * statistiques transporteurs
         * statistiques preparations de commandes
         */
    }


    

      </IonContent>
    </IonPage>
  );
};

export default Home;
