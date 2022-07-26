import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";

import { countries } from "./data";

export var exportedCountriesValue:any;


export const DropdownMenuCountries: React.FC = ()  => {
    
    const [currentValue , setCurrentValue] = useState("");

    const setExportedValue = (v:any) => {
        setCurrentValue(v);
        exportedCountriesValue = v ;

        //alert(exportedValue);
    }

    return (
        <>
         <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Country" multiple={true}  onIonChange={ (e) =>  setExportedValue(e.detail.value)}>
                     
                        {
                            countries.map( (country:any,key:any) => {
                                return (
                                    <IonSelectOption value={country.country_id}> {country.title_fr} </IonSelectOption>
                                )
                            } )
                        }
                    </IonSelect>
                </IonItem>
            </IonList>
        </>
    )
}