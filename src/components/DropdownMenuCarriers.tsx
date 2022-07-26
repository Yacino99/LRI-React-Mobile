import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";

import { carriers } from "./data";

export const DropdownMenuCarriers: React.FC = ()  => {
    
    return (
        <>
         <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Carrier" multiple={true}  onIonChange={ (e) => console.log(e.detail.value)}>
                     
                        {
                            carriers.map( (carrier:any,key:any) => {
                                return (
                                    <IonSelectOption value={carrier.carrier_id}> {carrier.carrier_name} </IonSelectOption>
                                )
                            } )
                        }
                    </IonSelect>
                </IonItem>
            </IonList>
        </>
    )
}