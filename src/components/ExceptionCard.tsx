import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import classes from "./ExceptionCard.module.css";


interface Props{
    data:any;
  }
  

const ExceptionCard: React.FC<Props> = ({data})  => {

    return (
        <IonGrid>
           
                 <IonRow>
                    <IonCol> <div>Pays</div> </IonCol>
                    <IonCol> <div> Moyenne </div></IonCol>
                    <IonCol> <div> Events </div></IonCol>
                    <IonCol> <div> Statut </div> </IonCol>
                </IonRow>

               {  
                data.map( (obj:any) => {
                    //console.log(obj.error_type_id)
                   return(
                    <>
                       

                        <IonCard>
                           
                           <br />
                               
                                <IonRow>
                                    <IonCol size="2"> <div>{obj.delivery_country_iso} </div></IonCol>
                                    <IonCol size="4" className={classes.aligenement}> <div>{obj.average_carrier_delay} </div> </IonCol>
                                    <IonCol size="2"> <div>{obj.error_type} </div></IonCol>
                                    <IonCol size="4" className={classes.aligenement}> <div>{obj.status_delivery} </div></IonCol>
                                </IonRow>
                           
                        </IonCard>
                    </>
                     )
                } )
            }
         </IonGrid>
    )
}

export default ExceptionCard;