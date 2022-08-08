import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { NavButtons } from "../components/NavButtons";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar , Line } from "react-chartjs-2";
import DropdownMenuCustomers, { exportedCustomerValue } from '../components/DropdownMenuCustomers';

import classes from './chart.module.css';

ChartJS.register(...registerables);

const dataBar1 = {
  labels: ['avant 13h' , 'apres 13h'],
  datasets : [
    {
      label: 'Imprimées et envoyées le jour même',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1 ,
      hoverBackgroundColor : 'rgba(255,99,132,0.4)',
      hoverBorderColor : 'rgba(255,99,132,1)',
      data: [65,59]
    }
  ]
};

const dataBar2 = {
  labels: ['avant 13h' , 'apres 13h'],
  datasets : [
    {
      label: 'Imprimées et envoyées le lendemain',
      backgroundColor: '	rgba(255, 215, 0,0.2)',
      borderColor: '	rgba(255, 215, 0,1)',
      borderWidth: 1 ,
      hoverBackgroundColor : '	rgba(255, 215, 0,0.4)',
      hoverBorderColor : '	rgba(255, 215, 0,1)',
      data: [12,80]
    }
  ]
};

const dataBar3 = {
  labels: [''],
  datasets : [
    {
      label: 'Imprimées et envoyées à J>1',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1 ,
      hoverBackgroundColor : 'rgba(255,99,132,0.4)',
      hoverBorderColor : 'rgba(255,99,132,1)',
      data: [9]
    }
  ]
};


const tempData = {
  labels: ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "Vendredi" , "Samedi"],
  datasets: [
    {
      label: "imprimées ce jour après 13H et envoyées le lendemain",
      data: [0,0, 0, 0, 0, 0, 0],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#b54138" // rouge
    },
    {
      label: "imprimées ce jour avant 13H et envoyées le lendemain",
      data: [0,0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#5c79d7" // bleu claire
    }
  ]
};


export const OrdersPreparation : React.FC = () => { 

    const token:any= sessionStorage.getItem('x-api-token');
    var dateFrom: any , dateTo: any;

    const [histogramData , setHistogramData] = useState([]);
    const [lineData , setLineData] = useState(tempData);
    const [fetchedLinedData , setFetchedLinedData]  = useState([]);

    function setDateFrom(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateFrom = formatedDate;
    }

    function setDateTo(a:any){
      var formatedDate = a.slice(0,a.indexOf('T')) ;
      dateTo = formatedDate;
    }

    const configureLineData =  async (data:any) =>{

        //alert('ici')
        var dataAfter13hDemain;
        var dataBefore13hDemain;
        var dataAfter13hToday;
        var dataBefore13hToday;

        dataAfter13hDemain = data.map( (obj:any) => { return obj["sameDay_before_13H"];   } );
        dataAfter13hDemain = dataAfter13hDemain.map( (item:any) => {return parseFloat(item)} );
        dataAfter13hDemain.unshift(0);

        dataBefore13hDemain = data.map( (obj:any) => { return obj["nextDay_before_13H"] } );
        dataBefore13hDemain = dataBefore13hDemain.map( (item:any) => {return parseFloat(item)} );
        dataBefore13hDemain.unshift(0);

        dataAfter13hToday = data.map( (obj:any) => { return obj["sameDay_after_13H"] } );
        dataAfter13hToday = dataAfter13hToday.map( (item:any) => {return parseFloat(item)} );
        dataAfter13hToday.unshift(0);

        dataBefore13hToday = data.map( (obj:any) => { return obj["nextDay_before_13H"] } );
        dataBefore13hToday = dataBefore13hToday.map( (item:any) => {return parseFloat(item)} );
        dataBefore13hToday.unshift(0);
        
        //console.log(dataAfter13hDemain,dataBefore13hDemain , dataAfter13hToday,dataBefore13hToday);

        const  finalData = {
            labels: ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "Vendredi" , "Samedi"],
            datasets: [
              {
                label: "imprimées ce jour après 13H et envoyées le lendemain",
                data: dataAfter13hDemain,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#b54138" // rouge
              },
              {
                label: "imprimées ce jour avant 13H et envoyées le lendemain",
                data: dataBefore13hDemain,
                fill: false,
                borderColor: "#5c79d7" // bleu claire
              },
              {
                label: "imprimées ce jour après 13H et envoyées le jour même",
                data: dataAfter13hToday,
                fill: false,
                borderColor: "#c3975a" // jaune 
              },
              {
                label: "imprimées ce jour avant 13H et envoyées le jour même",
                data: dataBefore13hToday,
                fill: false,
                borderColor: "#3C578C" // bleu foncé
              }
            ]
          };

          //for(let i = 0 ; i < 1000 ; i++) ;
          //await console.log("");
          await setLineData(finalData);

          //console.log(lineData)

    }

    const loadLineData = async (startDate:any,endDate:any,customersList:any) => {

        await fetch('http://127.0.0.1:8000/api/order_preparation_line_chart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,'x-api-token' : token
            },
              body: JSON.stringify({
                  'filter_from_collect_date': startDate,
                  'filter_to_collect_date': endDate,
                  'filter_customer_brand' : customersList 
                 
              }),
            })
            .then(response => response.json())
            .then(recievedData => configureLineData(recievedData));
    }

    return(
        <IonPage>
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>Statistique de préparation des commandes</IonTitle>
            <IonButtons slot="end">
              <NavButtons/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen> 
        
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
                <IonButton onClick={() => { /*getFetchedData()*/ /*console.log("incoming implementation")*/ loadLineData(dateFrom,dateTo,exportedCustomerValue)   } }>Search</IonButton>
                </IonCol>
            </IonRow>
            </IonGrid>

          <h2>Pourcentage de commandes envoyées</h2>
          
          <div className={classes.chart_wrapper_parent}>
            <div  id={classes.chart_wrapper}>

              <Bar data={dataBar1} /*width={80 //height={100} */options={{maintainAspectRatio:true}} />

              <Bar data={dataBar2} /*width={80 //height={100} */options={{maintainAspectRatio:true}} /> 

                <Bar data={dataBar3} /*width={80 height={100} *//> 
            
          </div>
        </div>
        
        <h2>Détails par jour</h2>
        <div id={classes.lineChart}> 
            <Line  width={50} height={70} data={lineData}  /> 
        </div>
 
      
        </IonContent>
      </IonPage>
    )
}