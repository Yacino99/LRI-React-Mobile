import React from "react";
import classes from './../pages/tables.module.css';

type Props = {
    title: string,
  };

export const TableWrapper: React.FC<Props> = ({ title,children}) => {

    return (

        <div id={classes.colWrapper}>
             {children}   
        </div>
    );
}
