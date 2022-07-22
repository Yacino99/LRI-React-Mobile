import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonSpinner, IonLoading, IonList, IonItem, IonLabel, IonGrid, IonCol, IonRow} from '@ionic/react';
import React from 'react';
import MyAccordion from '../../components/MyAccordion';
import classes from './../tables.module.css';

var localData = [
  {
      "carrier_name": "AustrianPost",
      "carrier_id": "29",
      "averageDelivery": 0
  },
  {
      "carrier_name": "Colissimo Europe (avec signature)",
      "carrier_id": "51",
      "averageDelivery": 7
  },
  {
      "carrier_name": "Colissimo Europe (sans signature)",
      "carrier_id": "50",
      "averageDelivery": 4
  },
  {
      "carrier_name": "Colissimo Expert DOM",
      "carrier_id": "8",
      "averageDelivery": 8
  },
  {
      "carrier_name": "Colissimo Expert F",
      "carrier_id": "6",
      "averageDelivery": 2
  },
  {
      "carrier_name": "Colissimo Inter",
      "carrier_id": "9",
      "averageDelivery": 22
  },
  {
      "carrier_name": "DHL",
      "carrier_id": "2",
      "averageDelivery": 0
  },
  {
      "carrier_name": "DHL EXPRESS",
      "carrier_id": "56",
      "averageDelivery": 0
  },
  {
      "carrier_name": "DPD",
      "carrier_id": "11",
      "averageDelivery": 1
  },
  {
      "carrier_name": "Sur place",
      "carrier_id": "27",
      "averageDelivery": 0
  },
  {
      "carrier_name": "UPS",
      "carrier_id": "5",
      "averageDelivery": 2
  },
  {
      "carrier_name": "UPS COD",
      "carrier_id": "37",
      "averageDelivery": 3
  },
  {
      "carrier_name": "UPS Saver",
      "carrier_id": "46",
      "averageDelivery": 2
  }
];



interface Props{
  data:any;
}




const OrderTrackingAverage: React.FC<Props> = ({data})  => {

 
  return (
    
    <div>
      
        {
        // data.length == 0 ? <IonLoading isOpen={true} ></IonLoading> : <pre> ok {console.log(data[0])} </pre> 
        }

        <IonGrid>

          <IonRow color='warning' className={classes.separationColonnes}>
            <IonCol className="ion-align-self-start"> <div> ion-col start </div></IonCol>
            <IonCol className="ion-align-self-end"><div>ion-col end</div></IonCol>
          </IonRow>

          
          {
            localData.map( (item:any , key:any) => {
              return(
              <>
                <MyAccordion key={key} transporteur={item.carrier_name} delai={item.averageDelivery} />
              </>
              )
            } )
          }
        

        </IonGrid>


  </div>
  );
};

export default OrderTrackingAverage;
