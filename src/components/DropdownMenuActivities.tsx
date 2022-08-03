import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";

import { activities } from "./data";

export var exportedActivitiesValue:any;

export const DropdownMenuActivities: React.FC = ()  => {


    const [currentValue , setCurrentValue] = useState("");

    const setExportedValue = (v:any) => {
        setCurrentValue(v);
        exportedActivitiesValue = v ;

        alert(exportedActivitiesValue);
    }

    return (
        <>
         <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Actvity" multiple={false}  onIonChange={ (e) =>  setExportedValue(e.detail.value)}>
                    <IonSelectOption value={"All"}> Tous </IonSelectOption>
                        {
                            activities.map( (activity:any,key:any) => {
                                return (
                                    <IonSelectOption value={activity.label}> {activity.label_fr} </IonSelectOption>
                                )
                            } )
                        }
                    </IonSelect>
                </IonItem>
            </IonList>
        </>
    )
}