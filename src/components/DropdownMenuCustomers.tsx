import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useState } from "react";
import { brands } from "./data";

export var exportedCustomerValue:any;

const DropdownMenuCustomers: React.FC = ()  => {

    const [currentValue , setCurrentValue] = useState("");

    const setExportedValue = (v:any) => {
        setCurrentValue(v);

        if(v.length > 20){
            exportedCustomerValue = v.substring(0, v.length - 1);
        }else
            exportedCustomerValue = v ;

        //alert(exportedValue);
    }

    const getAllBrands = () => {
        var brandlist = "";
        brands.map( (element:any) => {
            brandlist += element.router_customer_brand_id + ',';
        } )

        return brandlist;
    }

    return (
        <>
            <IonList>
                <IonItem>
                    <IonSelect placeholder="Select Customer"   onIonChange={(e) => setExportedValue(e.detail.value)}>
                        <IonSelectOption value={getAllBrands()} > <span className=""> Tous </span></IonSelectOption>
                    
                        {
                            brands/*.filter( (val) => { return val.name != null} )*/.map( (brand:any,key:any) => {
                                return (
                                    <IonSelectOption value={brand.router_customer_brand_id}>{brand["1"]}</IonSelectOption>
                                )
                            } )
                        }
                    </IonSelect>
                </IonItem>
            </IonList>

        </>
    )
}

export default DropdownMenuCustomers ;
