import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

export const Menu = () => { 
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/users"} routerDirection="none">
              <IonLabel>Users</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/dashboard"} routerDirection="none">
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/current-scans"} routerDirection="none">
              <IonLabel>Current Scans</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/orders_tracking"} routerDirection="none"> 
              <IonLabel>Statistiques du suivi de Commandes</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/customer-stat"} routerDirection="none">
              <IonLabel>Statistiques Clients</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/orders-preparation"} routerDirection="none">
              <IonLabel>Statistique de préparation des commandes</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
