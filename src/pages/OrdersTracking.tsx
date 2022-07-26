//import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonButtons, IonGrid, IonRow, IonCol, IonDatetime, IonIcon, IonButton } from '@ionic/react';

import React, { useEffect, useState } from "react";
import { NavButtons } from '../components/NavButtons';

import { exportedCarriersValue } from '../components/DropdownMenuCarriers';
import { exportedCountriesValue } from '../components/DropdownMenuCountries';
import { exportedCustomerValue } from '../components/DropdownMenuCustomers';

import OrderTrackingAverage from './OrderTrackings/OrderTrackingAverage';
import OrdersTrackingException from './OrderTrackings/OrderTrackingException';
import OrderTrackingByDay from './OrderTrackings/OrderTrackingByDay';
import DropdownMenuCustomers from '../components/DropdownMenuCustomers';
import { DropdownMenuCarriers } from '../components/DropdownMenuCarriers';
import { DropdownMenuCountries } from '../components/DropdownMenuCountries';



const OrdersTracking: React.FC = () => {

    
    const [selected, setSelected] = useState<string>("1");
    const [orderTrackingAverageData , setOrderTrackingAverageData] = useState([]);
    const [orderTrackingByDayData , setOrderTrackingByDayData] = useState([]);
    const [orderTrackingExceptionData , setOrderTrackingExceptionData] = useState([]);
    const [orderTrackingDetailsData , setOrderTrackingData] = useState([]);

    var dateFrom , dateTo;
    function setDateFrom(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateFrom = formatedDate;
    }
    function setDateTo(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateTo = formatedDate;
    }

    useEffect( ()=>{
      //loadOrderTrackingAverageData();
      //loadOrderTrackingByDayData();
      //loadOrderTrackingExceptionData();
      //loadOrderTrackingDetailsData();
  } , [])



    const loadOrderTrackingAverageData = async (startDate:any,endDate:any,customersList:any,carriersList:any,countriesList:any) => {
     /* await fetch('http://127.0.0.1:8000/api/order_tracking_average')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingAverageData(recievedData));*/

      await fetch('http://127.0.0.1:8000/api/order_tracking_average', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'customer_filer' : customersList,
              'carrier_filer' : carriersList,
              'country_filter' : countriesList
          }),
        })
        .then(response => response.json())
        .then(recievedData => setOrderTrackingExceptionData(recievedData));
    }

    const loadOrderTrackingByDayData = async (startDate:any,endDate:any,customersList:any,carriersList:any,countriesList:any) => {
     /* await fetch('http://127.0.0.1:8000/api/order_tracking_by_day')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingByDayData(recievedData));*/

      await fetch('http://127.0.0.1:8000/api/order_tracking_by_day', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'customer_filer' : customersList,
              'carrier_filer' : carriersList,
              'country_filter' : countriesList
          }),
        })
        .then(response => response.json())
        .then(recievedData => setOrderTrackingExceptionData(recievedData));
    }
    
    const loadOrderTrackingExceptionData = async (startDate:any,endDate:any,customersList:any,carriersList:any,countriesList:any) => {
    /*  await fetch('http://127.0.0.1:8000/api/order_tracking_exception')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingExceptionData(recievedData));*/

     await fetch('http://127.0.0.1:8000/api/order_tracking_exception', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'customer_filer' : customersList,
              'carrier_filer' : carriersList,
              'country_filter' : countriesList
          }),
        })
        .then(response => response.json())
        .then(recievedData => setOrderTrackingExceptionData(recievedData));
  
    }

    const loadOrderTrackingDetailsData = async (startDate:any,endDate:any,customersList:any,carriersList:any,countriesList:any) => {
      /*await fetch('http://127.0.0.1:8000/api/order_tracking_average_details')
      .then(response => response.json())
      .then(recievedData => setOrderTrackingData(recievedData));*/

      await fetch('http://127.0.0.1:8000/api/order_tracking_average_details', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
        },
          body: JSON.stringify({
              'filter_from_collect_date': startDate,
              'filter_to_collect_date': endDate,
              'customer_filer' : customersList,
              'carrier_filer' : carriersList,
              'country_filter' : countriesList
          }),
        })
        .then(response => response.json())
        .then(recievedData => setOrderTrackingExceptionData(recievedData));
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
          <DropdownMenuCustomers />
          <DropdownMenuCarriers />
          <DropdownMenuCountries />


        <IonGrid>
          <IonRow>
            <IonCol>
              <IonDatetime  placeholder='FROM' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateFrom(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonDatetime  placeholder='TO' displayFormat=" YYYY-MM-DD" onIonChange={(e) => setDateTo(e.detail.value)} />
            </IonCol>
            <IonCol>
              <IonButton>Search</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
  
        
  
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
      

        {
          selected == "1" ? <OrderTrackingAverage data={orderTrackingAverageData} details={orderTrackingDetailsData}/> : selected == "2" ? 
          <OrderTrackingByDay data={[orderTrackingByDayData]} /> : selected == "3" ? <OrdersTrackingException data={orderTrackingExceptionData} /> : ''
        }
  
        </IonContent>
      </IonPage>
    );
};

export default OrdersTracking;