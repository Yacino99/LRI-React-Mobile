
import React from "react";
import { LRISingleTableRow } from "./LRISingleTableRow";




interface Props{
    data:any;
    
 }
 
 export const LRItableCollectionBody: React.FC<Props> = ({data}) => {


    return(
        
        <div>
            {
                data.map( (values:any,key:any)=>{
                    return <LRISingleTableRow data={values} />
                } )
            }
        </div>


    )
 }