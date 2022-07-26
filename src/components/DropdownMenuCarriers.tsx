import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";

import { carriers } from "./data";

export var exportedCarriersValue:any;


export const DropdownMenuCarriers: React.FC = ()  => {
    
    const [currentValue , setCurrentValue] = useState("");

    const setExportedValue = (v:any) => {
        setCurrentValue(v);
        exportedCarriersValue = v ;

        //alert(exportedValue);
    }


    return (
        <>
         <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Carrier" multiple={true}  onIonChange={ (e) =>  setExportedValue(e.detail.value)}>
                     
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