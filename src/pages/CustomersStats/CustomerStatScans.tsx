import { IonCol, IonGrid, IonRow } from "@ionic/react";

import React from "react";


import {customerStatScan} from '../../components/data'
import { TableWrapper } from "../../components/TableWrapper";
import classes from './../tables.module.css';

interface Props{
    data:Array<any>;
  }
  
  

const CustomerStatScans : React.FC<Props> = ({data}) => {  

    return (
        <>
        <TableWrapper title={''} >

        <IonGrid >

    
                <IonRow  className={classes.flexed} >
                    <IonCol> <div > Client </div> </IonCol>
                    <IonCol> <div  > Date </div> </IonCol>
                    <IonCol> <div> Nombre de preparateurs </div> </IonCol>
                    <IonCol> <div> Nombre de commandes </div> </IonCol>
                    <IonCol> <div > Temps total(min) </div> </IonCol>
                    <IonCol> <div > Moyenne (min) </div> </IonCol>
                    <IonCol> <div > Coefficient de difficulté </div> </IonCol>
                    <IonCol> <div > Nb commandes / heures </div> </IonCol>
                    <IonCol> <div > Nombre de colis </div> </IonCol>
                    <IonCol> <div > Nombre d'articles </div> </IonCol>
                    <IonCol> <div > Nb articles/commande </div> </IonCol>


                </IonRow> 
            
       

            {
                data.map( (object:any,key:any) => {
                   return (
                    <>
                     <IonRow className={classes.flexed}>
                        <IonCol> <div > {object["customer_name"]} </div> </IonCol> 
                        <IonCol> <div > {object["date_scan"]} </div> </IonCol>
                        <IonCol> <div > {object["nb_user"]} </div> </IonCol>
                        <IonCol> <div > {object["orders_number"]} </div> </IonCol>
                        <IonCol> <div > {object["tot_temp"]} </div> </IonCol>
                        <IonCol> <div > { object["tot_temp"]/object["orders_number"] } </div> </IonCol> 
                        <IonCol> <div > {object["coeff_difficulty"]} </div> </IonCol>
                        <IonCol> <div > {object["nb_commande_heure"]} </div> </IonCol>
                        <IonCol> <div > {object["packages_number"]} </div> </IonCol>
                        <IonCol> <div > {object["articles_number"]} </div> </IonCol>
                        <IonCol> <div > {object["articles_number"] / object["packages_number"] } </div> </IonCol>
                     </IonRow>
                    </>
                   )
                } )
            }

            

        </IonGrid>

        </TableWrapper>
        </>
    )
}

export default CustomerStatScans;