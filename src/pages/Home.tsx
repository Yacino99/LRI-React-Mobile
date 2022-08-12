import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol, IonAlert, IonButton, IonItem, IonImg, IonLabel } from '@ionic/react';
import React, { useEffect, useState ,CSSProperties} from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';

import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home: React.FC = () => {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    

    <IonPage>
    <IonHeader>
      <IonToolbar color="warning">
        <IonTitle>HOME</IonTitle>
        <IonButtons slot="end">
          <NavButtons/>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>


      <h1>this is a home page</h1>

      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

        <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
        <RingLoader color={color} loading={loading} cssOverride={override} size={150} />
    </div>
     
    </IonContent>
  </IonPage>
   
  );
};

export default Home;

