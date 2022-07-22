//import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonButtons } from '@ionic/react';

import React, { useEffect, useState } from "react";
import { NavButtons } from '../components/NavButtons';


import OrderTrackingAverage from './OrderTrackings/OrderTrackingAverage';
import OrdersTrackingException from './OrderTrackings/OrderTrackingException';
import OrderTrackingByDay from './OrderTrackings/OrderTrackingByDay';



const OrdersTracking: React.FC = () => {

    
    const [selected, setSelected] = useState<string>("1");
    const [orderTrackingAverageData , setOrderTrackingAverageData] = useState([]);
    const [orderTrackingByDayData , setOrderTrackingByDayData] = useState([]);


    useEffect( ()=>{
      //loadOrderTrackingAverageData();
      //loadOrderTrackingByDayData();
  } , [])



    const loadOrderTrackingAverageData = async () => {
      await fetch('http://127.0.0.1:8000/api/order_tracking_average')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingAverageData(recievedData));
    }

    const loadOrderTrackingByDayData = async () => {
      await fetch('http://127.0.0.1:8000/api/order_tracking_by_day')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingByDayData(recievedData));
    }

    
    return (

        <IonPage>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>Statistiques Suivi de Commandes</IonTitle>
            <IonButtons slot="end">
              <NavButtons/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
       
  
        
  
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Category</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>DELAI MOYEN DE LIVRAISON</IonLabel>
              <IonRadio slot="start" value="1" />
            </IonItem>

            <IonItem>
              <IonLabel>STAT. JOURNALIERES</IonLabel>
              <IonRadio slot="start" value="2" />
            </IonItem>

            <IonItem>
              <IonLabel>EXCEPTION</IonLabel>
              <IonRadio slot="start" value="3" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      

        {selected == "1" ? <OrderTrackingAverage data={orderTrackingAverageData} /> : selected == "2" ? <OrderTrackingByDay data={[orderTrackingByDayData]} /> : selected == "3" ? <OrdersTrackingException /> : ''}
  
        </IonContent>
      </IonPage>
    );
};

export default OrdersTracking;