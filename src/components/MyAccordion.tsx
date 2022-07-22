import { IonCol, IonRow } from "@ionic/react";
import React from "react";
import "./MyAccordion.css";


interface Props{
    transporteur:any;
    delai:any;
  }

const MyAccordion: React.FC<Props> = ({transporteur,delai}) => {
 
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
                     <div>coming soon ...</div>
                  </div>
                   
                
              </li>
      </ul>
      </>
  );
};

export default MyAccordion;