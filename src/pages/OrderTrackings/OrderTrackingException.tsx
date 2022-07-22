import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons} from '@ionic/react';
import React, { useState } from 'react';




const OrdersTrackingException: React.FC = () => {

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>Exception</IonTitle>
          <IonButtons slot="end">
          
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
    }


    

      </IonContent>
    </IonPage>
  );
};

export default OrdersTrackingException;
