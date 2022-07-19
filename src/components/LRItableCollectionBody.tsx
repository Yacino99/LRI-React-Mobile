
import React from "react";
import { LRISingleTableRow } from "./LRISingleTableRow";




interface Props{
    data:any;
    
 }
 
 export const LRItableCollectionBody: React.FC<Props> = ({data}) => {


    return(
      /*  <div>
            {
                data.map( (usrs:any,key:any) =>{

                    return (
                        <IonRow className={classes.myrow}>
                        <div key={key} >
                            {
                               <> 
                               <IonCol className={classes.separationColonnes} size="4"> {usrs.user_id} </IonCol> 
                               <IonCol className={classes.separationColonnes}  size="4" > {usrs.firstname} </IonCol>  
                               <IonCol className={classes.separationColonnes}> {usrs.lastname} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.login} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.passwd} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.api_token} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.refresh_token} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.email} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.language} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.cp} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.is_admin} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.is_system} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.default_router} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.home_page} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.is_group} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.wrgroup_id} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.is_active} </IonCol>
                               <IonCol className={classes.separationColonnes}> {usrs.user_type} </IonCol>
                               </> 
                            }
                        </div>
                        </IonRow>
                    )

                } )
            }
        </div>*/


        <div>
            {
                data.map( (values:any,key:any)=>{
                    return <LRISingleTableRow data={values} />
                } )
            }
        </div>


    )
 }