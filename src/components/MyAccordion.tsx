import { IonCol, IonRow } from "@ionic/react";
import React from "react";
import "./MyAccordion.css";


interface Props{
    transporteur:any;
    delai:any;
    details:any;
  }

const MyAccordion: React.FC<Props> = ({transporteur,delai,details}) => { //ajouter un troisieme parametre et le nommer details
 
  // for more accordions , check this website :  https://alvarotrigo.com/blog/css-accordion/

  return (
    <>
      <ul>
            <li>
                <input type="checkbox" defaultChecked />
                    <i></i>
                    <IonRow >
                      <IonCol className="ion-align-self-start"> <div> {transporteur} </div></IonCol>
                      <IonCol className="ion-align-self-end"><div>{delai}</div></IonCol>
                    </IonRow>
                    <div className="inSideAccordion">
                      {
                        details.filter( (data:any) => { return data.carrier_name == transporteur } )
                        .map( (row:any , key:any) => {
                          return (
                            <IonRow key={key}>
                              <IonCol className="ion-align-self-start"> <div> {row.delivery_country_iso} </div></IonCol>
                              <IonCol className="ion-align-self-end"><div>{row.averageDelivery}</div></IonCol>
                            </IonRow>
                          );
                        } )
                      }
                    </div>
                    
                  
                </li>
        </ul>
      </>
  );
};

export default MyAccordion;