import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonSpinner, IonLoading, IonList, IonItem, IonLabel, IonGrid, IonCol, IonRow} from '@ionic/react';
import React, { CSSProperties } from 'react';
import RingLoader from 'react-spinners/RingLoader';
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


var localDetails = [
  {
      "delivery_country_iso": "AT",
      "carrier_name": "AustrianPost",
      "averageDelivery": "1.7051"
  },
  {
      "delivery_country_iso": "BE",
      "carrier_name": "UPS",
      "averageDelivery": "0.7398"
  },
  {
      "delivery_country_iso": "BG",
      "carrier_name": "UPS",
      "averageDelivery": "5.8621"
  },
  {
      "delivery_country_iso": "CH",
      "carrier_name": "Colissimo Europe (sans signature)",
      "averageDelivery": "4.1657"
  },
  {
      "delivery_country_iso": "CY",
      "carrier_name": "Colissimo Europe (avec signature)",
      "averageDelivery": "4.6667"
  },
  {
      "delivery_country_iso": "CZ",
      "carrier_name": "UPS",
      "averageDelivery": "4.8235"
  },
  {
      "delivery_country_iso": "DE",
      "carrier_name": "DHL",
      "averageDelivery": "0.5224"
  },
  {
      "delivery_country_iso": "DK",
      "carrier_name": "UPS",
      "averageDelivery": "1.8627"
  },
  {
      "delivery_country_iso": "EE",
      "carrier_name": "Colissimo Europe (avec signature)",
      "averageDelivery": "15.4000"
  },
  {
      "delivery_country_iso": "ES",
      "carrier_name": "UPS",
      "averageDelivery": "2.9704"
  },
  {
      "delivery_country_iso": "FI",
      "carrier_name": "UPS",
      "averageDelivery": "4.0882"
  },
  {
      "delivery_country_iso": "FR",
      "carrier_name": "Colissimo Expert F",
      "averageDelivery": "2.0552"
  },
  {
      "delivery_country_iso": "GB",
      "carrier_name": "UPS",
      "averageDelivery": "2.2950"
  },
  {
      "delivery_country_iso": "GP",
      "carrier_name": "Colissimo Expert DOM",
      "averageDelivery": "7.0000"
  },
  {
      "delivery_country_iso": "GR",
      "carrier_name": "UPS",
      "averageDelivery": "7.2727"
  },
  {
      "delivery_country_iso": "HR",
      "carrier_name": "Colissimo Inter",
      "averageDelivery": "4.7542"
  },
  {
      "delivery_country_iso": "HU",
      "carrier_name": "UPS",
      "averageDelivery": "2.4110"
  },
  {
      "delivery_country_iso": "IC",
      "carrier_name": "UPS Saver",
      "averageDelivery": "45.5000"
  },
  {
      "delivery_country_iso": "IE",
      "carrier_name": "UPS",
      "averageDelivery": "4.8804"
  },
  {
      "delivery_country_iso": "IT",
      "carrier_name": "UPS",
      "averageDelivery": "2.6053"
  },
  {
      "delivery_country_iso": "JE",
      "carrier_name": "UPS Saver",
      "averageDelivery": "6.0000"
  },
  {
      "delivery_country_iso": "LI",
      "carrier_name": "Colissimo Inter",
      "averageDelivery": "5.4419"
  },
  {
      "delivery_country_iso": "LT",
      "carrier_name": "Colissimo Europe (avec signature)",
      "averageDelivery": "7.0000"
  },
  {
      "delivery_country_iso": "LV",
      "carrier_name": "Colissimo Inter",
      "averageDelivery": "9.5926"
  },
  {
      "delivery_country_iso": "MC",
      "carrier_name": "UPS",
      "averageDelivery": "2.2000"
  },
  {
      "delivery_country_iso": "MT",
      "carrier_name": "Colissimo Europe (avec signature)",
      "averageDelivery": "17.5000"
  },
  {
      "delivery_country_iso": "NL",
      "carrier_name": "UPS",
      "averageDelivery": "1.0000"
  },
  {
      "delivery_country_iso": "NO",
      "carrier_name": "Colissimo Inter",
      "averageDelivery": "20.3333"
  },
  {
      "delivery_country_iso": "PL",
      "carrier_name": "UPS",
      "averageDelivery": "1.6618"
  },
  {
      "delivery_country_iso": "PT",
      "carrier_name": "UPS",
      "averageDelivery": "3.9256"
  },
  {
      "delivery_country_iso": "RO",
      "carrier_name": "UPS",
      "averageDelivery": "3.9259"
  },
  {
      "delivery_country_iso": "SE",
      "carrier_name": "UPS",
      "averageDelivery": "2.4198"
  },
  {
      "delivery_country_iso": "SI",
      "carrier_name": "UPS",
      "averageDelivery": "2.1444"
  },
  {
      "delivery_country_iso": "SK",
      "carrier_name": "UPS",
      "averageDelivery": "3.0494"
  },
  {
      "delivery_country_iso": "US",
      "carrier_name": "UPS Saver",
      "averageDelivery": "1.0000"
  }
];



interface Props{
  data:any;
  details:any;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  


const OrderTrackingAverage: React.FC<Props> = ({data,details})  => {

 
  return (
    
    <div>
      
        {
        // data.length == 0 ? <IonLoading isOpen={true} ></IonLoading> : <pre> ok {console.log(data[0])} </pre> 
        }

        <IonGrid>

          <IonRow color='warning' className={classes.separationColonnes}>
            <IonCol className="ion-align-self-start"> <div> Transporteurs </div></IonCol>
            <IonCol className="ion-align-self-end"><div>Delai moyen en (jours)</div></IonCol>
          </IonRow>

          
          {
           
           localData.length !=0 ? // change to data
           localData.map( (item:any , key:any) => {
              return(
              <>
                <MyAccordion key={key} transporteur={item.carrier_name} delai={item.averageDelivery} details={/*details*/localDetails} />
              </>
              )
            } ) : <RingLoader color="#C3975A" loading={true} cssOverride={override} size={150} /> 
          }
         

        </IonGrid>


  </div>
  );
};

export default OrderTrackingAverage;
