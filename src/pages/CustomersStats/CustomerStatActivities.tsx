import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";

import {CustomerStatActivites} from '../../components/data'
import { TableWrapper } from "../../components/TableWrapper";
import classes from './../tables.module.css';

interface Props{
    data:any;
  }
  
  

 const CustomerStatActivities : React.FC<Props> = ({data}) => {  

    return (
        <>
        <TableWrapper title={''} >

            <IonGrid >

                
                    <IonRow  className={classes.flexed} >
                        <IonCol> <div > Client </div> </IonCol>
                        <IonCol> <div  > Date </div> </IonCol>
                        <IonCol> <div> Activité </div> </IonCol>
                        <IonCol> <div> Nombre de preparateurs </div> </IonCol>
                        <IonCol> <div > Temps Total </div> </IonCol>
                    </IonRow> 
                
                   

                        {
                            data.map( (object:any,key:any) => {
                               return (
                                <>
                                 <IonRow className={classes.flexed}>
                                    <IonCol> <div > {object["name"]} </div> </IonCol> 
                                    <IonCol> <div > {object["date_deb"]} </div> </IonCol>
                                    <IonCol> <div > {object["label_fr"]} </div> </IonCol>
                                    <IonCol> <div > {object["nb_user"]} </div> </IonCol>
                                    <IonCol> <div > {object["tot_temp"]} </div> </IonCol>
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

export default CustomerStatActivities;