import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
 // console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink={"/home"}>Home </IonButton>
          <IonButton routerLink={"/users"}>Users </IonButton>
          <IonButton routerLink={"/dashboard"}>Dashboard</IonButton>
          <IonButton routerLink={"/current-scans"}>Current Scans</IonButton>
          <IonButton routerLink={"/orders_tracking"}>Statistiques du suivi de Commandes</IonButton>
          <IonButton routerLink={"/customer-stat"}>Statistiques Clients</IonButton>
          <IonButton routerLink={"/orders-preparation"}>Statistique de préparation des commandes</IonButton>

        </>
      )}
    </div>
  );
};
