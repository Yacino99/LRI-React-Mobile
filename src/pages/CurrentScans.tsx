import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonItem, IonIcon, IonLabel, IonButton, IonInput, IonDatetime, IonGrid, IonRow, IonCol, IonList } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';
import { calendarOutline, pin, walk, warning, wifi, wine } from 'ionicons/icons';


const CurrentScans: React.FC = () => {  

  const token:string = sessionStorage.getItem('api_token')+''; 
  var today = new Date(),
 
  date = today.getFullYear() + '-'  + (today.getMonth() + 1) + '-' + today.getDate()   ;
  const [inputDate , setInputDate] = useState(date);
  const [data , setData]:any = useState([]);

  var formatedDate ; 

  function setDate(a:any){
    
    formatedDate = a.slice(0,a.indexOf('T')) ;

    loadData(formatedDate)
  }

  useEffect( ()=>{
    
    loadData(date);

} , [])


const loadData = async (getdate:any) => {
 

  var link = 'http://127.0.0.1:8000/api/LRIgetcurrentscan/'+getdate;
  await fetch(link, {
     method: "GET",
     headers: {"Content-type": "application/json;charset=UTF-8" , 'x-api-token' : token}
     })
     .then(response => response.json())
     .then(recievedData => setData(recievedData));

}

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>CURRENT SCANS</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <br /><br />
          <IonCard> 
              <IonCardHeader>
                <IonCardTitle>Date Selection For Current Scan</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <br />

            <IonCard>
              <IonItem className="ion-activated">
              <IonIcon icon={calendarOutline} />
             
                <IonLabel>  Select A Date For Your Scan </IonLabel>
              </IonItem>
 
            
              <IonDatetime  placeholder='CHOISIR UNE DATE' displayFormat=" YYYY-MM-DD" onIonChange={(a) => setDate(a.detail.value)}>
                <span slot="title">Select a Reservation Date</span>
              </IonDatetime>
          </IonCard>


      
        <IonList>
        {
           <>
                <IonItem  color='success'>
                    <IonLabel>
                        <h1>{Object.keys(data)[0]}</h1>
                    </IonLabel>
                   
                </IonItem>
                

                <IonItem  >
             
                <IonLabel>
                    <h1>{Object.values(data)}</h1>
                </IonLabel>
            </IonItem>
            </>
            
           
        }
        
        </IonList>

           
      </IonContent>
    </IonPage>
  );
};

export default CurrentScans;
