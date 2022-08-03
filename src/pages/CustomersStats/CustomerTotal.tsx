import { IonCol, IonGrid, IonRow } from "@ionic/react";

import React, { useEffect, useState } from "react";


import {customerStatScan} from '../../components/data'
import { TableWrapper } from "../../components/TableWrapper";
import classes from './../tables.module.css';

interface Props{
    scans:any;
    activities:any;

  }
  
  
const UserTotal : React.FC<Props> = ({scans , activities}) => { 

    const  [nbPreparateur , setNbPreparateur] = useState(0);
    const  [nbCommande , setNbCommande] = useState(0);
    const  [totTmp , setTotTmp] = useState(0);
    const  [moyenne , setMoyenne] = useState(0);
    const  [nbCmdH , setNbCmdH] = useState(0);
    const  [nbColis , setNbColis] = useState(0);
    const  [nbArticles , setNbArticles] = useState(0);
    const  [nbArticlesCom , setNbArticlesCom] = useState(0);


    const  [nbPreparateurActivities , setNbPreparateurActivities] = useState(0);
    const  [tempsTotalActivities , setTempsTotalActivities] = useState(0);




    const totalScans = () => {
        let nbprep = scans.map( (obj:any) => { return obj["nb_user"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbPreparateur(nbprep);

        let ordNB = scans.map( (obj:any) => { return obj["orders_number"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbCommande(  Math.round( ordNB / scans.length ));

        let totNB = scans.map( (obj:any) => { return obj["tot_temp"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setTotTmp(totNB);

        let moy =  scans.map( (obj:any) => { return  obj["tot_temp"]/obj["orders_number"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setMoyenne( Math.round(moy/scans.length) );

        let nbComH = scans.map( (obj:any) => { return obj["nb_commande_heure"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbCmdH( Math.round(nbComH / scans.length)  );

        let nbCol = scans.map( (obj:any) => { return obj["packages_number"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbColis(Math.round(nbCol / scans.length));

        let nbArt = scans.map( (obj:any) => { return obj["articles_number"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbArticles(Math.round(nbArt /scans.length));

        let nbArtCom = scans.map( (obj:any) => { return obj["articles_number"] / obj["packages_number"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbArticlesCom( Math.round(nbArtCom /  scans.length) );


        let nbprepActivities = activities.map( (obj:any) => { return obj["nb_user"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setNbPreparateurActivities(nbprepActivities);

        let tempsTotAct = activities.map( (obj:any) => { return obj["tot_temp"] } ).reduce(function (previousValue:any, currentValue:any) { return previousValue + currentValue });
        setTempsTotalActivities(tempsTotAct/scans.length)
    }

    useEffect( () => {

        totalScans();
    } , [])

    return (

        <TableWrapper title={''} >

            <h1>Total Scans</h1>

            <IonGrid >


            <IonRow  className={classes.flexed} >

                <IonCol> <div > Nombre de préparateurs </div> </IonCol>
                <IonCol> <div  > Nombre de commandes </div> </IonCol>
                <IonCol> <div> Temps total(min) </div> </IonCol>
                <IonCol> <div> Moyenne (min) </div> </IonCol>
                <IonCol> <div > TNb commandes / heures </div> </IonCol>
                <IonCol> <div > Nombre de colis </div> </IonCol>
                <IonCol> <div > Nombre d'articles </div> </IonCol>
                <IonCol> <div > Nb articles/commande </div> </IonCol>

            </IonRow> 

            <IonRow  className={classes.flexed} >

                <IonCol> <div > {nbPreparateur} </div> </IonCol>
                <IonCol> <div  > {nbCommande}</div> </IonCol>
                <IonCol> <div>{totTmp} </div> </IonCol>
                <IonCol> <div> {moyenne}</div> </IonCol>
                <IonCol> <div > {nbCmdH} </div> </IonCol>
                <IonCol> <div > {nbColis} </div> </IonCol>
                <IonCol> <div > {nbArticles} </div> </IonCol>
                <IonCol> <div >{nbArticlesCom} </div> </IonCol>

            </IonRow> 
        
            </IonGrid>

            <h1>Total Activities</h1>

            <IonGrid >

                <IonRow  className={classes.flexed} >
                    <IonCol> <div > Nombre de préparateurs </div> </IonCol>
                    <IonCol> <div  > Temps total(min) </div> </IonCol>
                </IonRow>

                <IonRow  className={classes.flexed} >

                    <IonCol> <div > {nbPreparateurActivities}</div> </IonCol>
                    <IonCol> <div  > {tempsTotalActivities}</div> </IonCol>

                </IonRow> 

            </IonGrid>

        </TableWrapper>
    )
 }

 export default UserTotal;