import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { NavButtons } from "../components/NavButtons";
import CustomerStatActivities from "./CustomersStats/CustomerStatActivities";
import CustomerStatScans from "./CustomersStats/CustomerStatScans";
import CustomerTotal from "./CustomersStats/CustomerTotal";

import {exportedCustomerValue} from "../components/DropdownMenuCustomers";
import {customerStatScan} from '../components/data'
import {CustomerStatActivites} from '../components/data'

import DropdownMenuCustomers from "../components/DropdownMenuCustomers";
import { DropdownMenuActivities, exportedActivitiesValue } from "../components/DropdownMenuActivities";



const CustomerStat: React.FC = () => {

    const token:any= sessionStorage.getItem('x-api-token');


    const [selected, setSelected] = useState<string>("1");
    

    /* data that will be fetched */
    const [customerStatsData , setCustomerStatsData] = useState([]);
    const [customerActivitiesData , setCustomerActivitiesData] = useState([]);  
    const [customerActivitiesAllData , setCustomerActivitiesAllData] = useState([]);  


    var dateFrom: any , dateTo: any;
    function setDateFrom(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateFrom = formatedDate;
    }
    function setDateTo(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateTo = formatedDate;
    }


    //if other than all or scan is chosen , on affiche que activités and we hide the others
    const getFetchedData = () => {

      //alert(exportedCustomerValue == undefined)

      if (dateFrom == '' || dateFrom == undefined) {
          dateFrom  = "2022-01-01"
      }
      if (dateTo == '' || dateTo == undefined){
        dateTo = "2022-04-01"
      }

   
      if(exportedActivitiesValue == 'scan order' || exportedActivitiesValue == 'All' ){
        loadCustomerStatsData(dateFrom,dateTo,exportedCustomerValue,exportedActivitiesValue);
        loadCustomerAllData(dateFrom,dateTo,exportedCustomerValue,exportedActivitiesValue);
        loadCustomerActivitiesData(dateFrom,dateTo,exportedCustomerValue,exportedActivitiesValue);
      }
      else{

        setSelected("2");
        if(exportedActivitiesValue == undefined || exportedActivitiesValue == '')
          loadCustomerActivitiesData(dateFrom,dateTo,exportedCustomerValue,"inventory");
        else
          loadCustomerActivitiesData(dateFrom,dateTo,exportedCustomerValue,exportedActivitiesValue);

      }

    }

    const loadCustomerStatsData = async (startDate:any,endDate:any,customersList:any,activityList:any) => {
    
      var  custList = customersList == undefined || customersList == '' ? '1' : customersList;

      await fetch('http://127.0.0.1:8000/api/customer_stats_scan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,'x-api-token' : token
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'filter_customer_brand' : custList ,
              'filter_activities' : activityList
             
          }),
        })
        .then(response => response.json())
        .then(recievedData => setCustomerStatsData(recievedData));
    }

    const loadCustomerAllData = async (startDate:any,endDate:any,customersList:any,activityList:any) => {
    
     var  custList = customersList == undefined || customersList == '' ? '1' : customersList;

      await fetch('http://127.0.0.1:8000/api/customer_stats_activities_all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,'x-api-token' : token
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'filter_customer_brand' : custList,
              'filter_activities' : activityList
             
          }),
        })
        .then(response => response.json())
        .then(recievedData => setCustomerActivitiesAllData(recievedData));
    }

    const loadCustomerActivitiesData = async (startDate:any,endDate:any,customersList:any,activityList:any) => {
   
     var  custList = customersList == undefined || customersList == '' ? '1' : customersList;
      

      await fetch('http://127.0.0.1:8000/api/customer_stats_activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,'x-api-token' : token
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'filter_customer_brand' : custList ,
              'filter_activities' : activityList
             
          }),
        })
        .then(response => response.json())
        .then(recievedData => setCustomerActivitiesData(recievedData));
    }

    return (
        <IonPage>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>Statistiques Clients</IonTitle>
            <IonButtons slot="end">
              <NavButtons/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >

        <DropdownMenuCustomers />
        <DropdownMenuActivities />

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonDatetime  placeholder='FROM' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateFrom(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonDatetime  placeholder='TO' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateTo(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonButton onClick={() => getFetchedData() }>Search</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        <IonList>
          <IonRadioGroup value={ selected } onIonChange={e => setSelected(e.detail.value)}>
           
          
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
          exportedActivitiesValue == 'scan order' || exportedActivitiesValue == 'All' ?
           (
            selected == "1" ? <CustomerStatScans data={customerActivitiesAllData} /> : selected == "2" ? <CustomerStatActivities data={customerActivitiesData} /> : selected == "3" ? <CustomerTotal scans={customerActivitiesAllData} activities={customerActivitiesData} /> : "" 
            )
            : (  
               //<CustomerStatActivities data={"test"} /> 
               selected == "1" ?"" : selected == "2" ? <CustomerStatActivities data={"test"} /> : selected == "3" ? "" : "" 
              )
        }

        </IonContent>
        </IonPage>

        
    )
}

export default CustomerStat;