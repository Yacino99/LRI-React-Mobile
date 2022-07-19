import { IonCol, IonGrid, IonRow } from "@ionic/react";

import React from "react";
import classes from './../pages/tables.module.css';




interface Props{
    data:any;
    
 }
 
 
 export const LRISingleTableRow: React.FC<Props> = ({data}) => {

    return(
        <div >
        <IonGrid >
        <IonRow /*className={classes.myRow} */ className={classes.flexed}>
        {Object.values(data).map( (value:any) => {
           return( 
            <IonCol /*size="2"*/  > <div className={classes.colonnes} >{value == '' || value == null ? 'X-X' : value }</div></IonCol>
            )
        } )}
        </IonRow>
        </IonGrid>
        </div>
    );

 }