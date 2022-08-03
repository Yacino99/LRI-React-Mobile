import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonAlert, IonButton, IonItem, IonImg, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';


import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const data = {
  labels: ['Janvier' , 'fevrier' , 'mars' , 'avril' , 'mai','juin','juillet','aout'],
  datasets : [
    {
      label: 'My first Data Set',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1 ,
      hoverBackgroundColor : 'rgba(255,99,132,0.4)',
      hoverBorderColor : 'rgba(255,99,132,1)',
      data: [65,59,80,81,56,55,41,10]
    }
  ]
};

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



      <div>
        <h2>Bar Example ( custom size )</h2>
        <Bar
          data={data}
          width={80}
          height={100}
          options={{maintainAspectRatio:true}} 
          /> 

        <Bar
          data={data}
          width={80}
          height={100}
          options={{maintainAspectRatio:true}} 
          /> 
      </div>

    </IonContent>
  </IonPage>
   
  );
};

export default Home;

