import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { NavButtons } from "../components/NavButtons";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar , Line } from "react-chartjs-2";
import DropdownMenuCustomers, { exportedCustomerValue } from '../components/DropdownMenuCustomers';

ChartJS.register(...registerables);


const jsonData = [[0,0.7,2.14,0.02,0,0.06,0,100,99.30245535714286,98.48400297619048,99.98139880952381,100,99.96279761904762,100,"#b54138"],[0,15.43,0.01,0.26,0.79,0.06,0.27,100,84.5703125,99.9906994047619,99.78608630952381,99.46056547619048,99.96279761904762,99.97209821428571,"#5c79d7"],[0,14.88,52.34,42.41,45.46,48.21,0,100,85.11904761904762,62.83482142857143,64.89025297619048,69.00111607142857,68.10825892857143,100,"#c3975a"],[0,68.86,45.49,57.23,53.73,51.29,99.64,100,31.13839285714286,67.69903273809524,52.622767857142854,63.364955357142854,66.07142857142857,89.76934523809524,"#3C578C"]];
const selectedData:any = jsonData[3];

const couleur:string =  selectedData[14];
const num1:number = selectedData[7] , num2:number = selectedData[8] , num3:number = selectedData[9] , num4:number = selectedData[10], num5:number = selectedData[11] , num6:number = selectedData[12], num7:number = selectedData[13]

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
    },
    {
      label: "imprimées ce jour après 13H et envoyées le jour même",
      data: [0,0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#c3975a" // jaune 
    },
    {
      label: "imprimées ce jour avant 13H et envoyées le jour même",
      data: [0,0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#3C578C" // bleu foncé
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

          for(let i = 0 ; i < 1000 ; i++) ;
          
          setLineData(finalData);

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
        
  
                <h1>coucou</h1>

            
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


            <div>
            <h2>Bar Example ( custom size )</h2>

            <Bar
                data={data}
                width={80}
                height={100}
                options={{maintainAspectRatio:true}} 
            /> 
            
             <Line data={lineData}  /> 

           
   
        </div>

      
        </IonContent>
      </IonPage>
    )
}