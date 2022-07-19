import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import classes from './../pages/tables.module.css';

interface Props{
   cols:any;
   
}
//Collumns
export const LRITableHeaders: React.FC<Props> = ({cols}) => {

 
    return(
        
        <div > 
             <IonGrid id={classes.columns} >
                <IonRow className={classes.myrow} >
                {

                    Object.keys(cols).map( (attr , index) => (

                        <IonCol className={classes.colonnesIon} /*size="2"*/ > <div className={classes.entetesTables}>{attr} </div></IonCol >
                      
                        ) )
                }
                </IonRow>
            </IonGrid>
        </div>
        
    );
}
