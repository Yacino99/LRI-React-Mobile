import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonAlert, IonButton, IonItem, IonImg, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';




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


      <h1>this is a home page</h1>
   
     
    </IonContent>
  </IonPage>
   
  );
};

export default Home;

