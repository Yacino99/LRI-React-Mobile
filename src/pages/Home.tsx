import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonAlert, IonButton, IonItem, IonImg, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';
import MyAccordion from '../components/MyAccordion';




function json2array(json:any){
  var result:any = [];
  var keys = Object.keys(json);
  keys.forEach(function(key){
      result.push(json[key]);
  });
  return result;
}

const Home: React.FC = () => {

  
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
         * 
         */

         //typeof variable !== 'undefined' ? 'oui' : 'non'
    }

    {
      //<MyAccordion transporteur={"titi"} delai={"4"} />
    }


  </IonContent>
    </IonPage>
  );
};

export default Home;
