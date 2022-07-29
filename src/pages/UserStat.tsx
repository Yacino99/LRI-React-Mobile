import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { NavButtons } from "../components/NavButtons";
import UsersStatActivities from "./UsersStats/UsersStatActivities";
import UsersStatScans from "./UsersStats/UsersStatScans";
import UserTotal from "./UsersStats/UserTotal";

import exportedCustomerValue from "../components/DropdownMenuCustomers";
import {customerStatScan} from '../components/data'
import {CustomerStatActivites} from '../components/data'
import DropdownMenuCustomers from "../components/DropdownMenuCustomers";



const UserStat: React.FC = () => {
 
    const [selected, setSelected] = useState<string>("1");

    /* data that will be fetched */
    const [userStats , setUserStats] = useState([]);
    const [userActivities , setsetUserActivities] = useState([]);  

    var dateFrom: any , dateTo: any;
    function setDateFrom(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateFrom = formatedDate;
    }
    function setDateTo(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateTo = formatedDate;
    }


    useEffect( () => {

    } , [])

   

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>Statistiques Utilisateurs</IonTitle>
            <IonButtons slot="end">
              <NavButtons/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >

        <DropdownMenuCustomers />

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonDatetime  placeholder='FROM' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateFrom(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonDatetime  placeholder='TO' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateTo(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonButton onClick={() => /*getFetchedData()*/ console.log('a implementer')}>Search</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
           
            <IonItem>
              <IonLabel>SCANS</IonLabel>
              <IonRadio slot="start" value="1" />
            </IonItem>

            <IonItem>
              <IonLabel>ACTIVITES</IonLabel>
              <IonRadio slot="start" value="2" />
            </IonItem>

            <IonItem>
              <IonLabel>TOTAL</IonLabel>
              <IonRadio slot="start" value="3" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      

        {
            selected == "1" ? <UsersStatScans data={''} /> : selected == "2" ? <UsersStatActivities data={"test"} /> : selected == "3" ? <UserTotal scans={customerStatScan} activities={CustomerStatActivites} /> : "" 
        }

        </IonContent>
        </IonPage>

        
    )
}

export default UserStat;