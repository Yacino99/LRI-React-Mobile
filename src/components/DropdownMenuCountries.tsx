import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";

import { countries } from "./data";

export const DropdownMenuCountries: React.FC = ()  => {
    
    return (
        <>
         <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Country" multiple={true}  onIonChange={ (e) => console.log(e.detail.value)}>
                     
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