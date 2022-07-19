import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';

import classes from './tables.module.css';



var usrs = [
  {
      "user_id": "4",
      "firstname": "Leslie",
      "lastname": "Cotaya",
      "login": "Leslie",
      "passwd": "56b97888a35fa5ca0e6e1fb753906ba4",
      "api_token": null,
      "refresh_token": null,
      "email": "leslie.cotaya@luxroutage.lu",
      "language": "fr",
      "cp": "C6ea6L*",
      "is_admin": "1",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "leslie",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "5",
      "firstname": "Claudine",
      "lastname": "Muratori",
      "login": "Claudine",
      "passwd": "f05209125e293b47ff37bbd1dd119e2a",
      "api_token": null,
      "refresh_token": null,
      "email": "claudine.muratori@luxroutage.lu",
      "language": "fr",
      "cp": "M8ei8C!",
      "is_admin": "1",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "claudine",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "6",
      "firstname": "Frédéric",
      "lastname": "Bilski",
      "login": "Frédéric",
      "passwd": "15d02c3689cb5d8c82878cde753ada6c",
      "api_token": null,
      "refresh_token": null,
      "email": "frederic.bilski@luxroutage.lu",
      "language": "fr",
      "cp": "B8ci6F?",
      "is_admin": "1",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "8",
      "firstname": "Manu",
      "lastname": "Luna",
      "login": "Manu",
      "passwd": "55142f0be69372f34265062da5e8426a",
      "api_token": null,
      "refresh_token": null,
      "email": "manu.luna@luxroutage.lu",
      "language": "fr",
      "cp": "wxcv01",
      "is_admin": "1",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "manu",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "9",
      "firstname": "Administrateur",
      "lastname": "Sofibio",
      "login": "Sofibio",
      "passwd": "d8e5d12dd285febff9f81ec9b944e850",
      "api_token": null,
      "refresh_token": null,
      "email": "t@t.com",
      "language": "fr",
      "cp": "S7io7F)",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "11",
      "firstname": "Floriane",
      "lastname": "Chaffardon",
      "login": "Floriane",
      "passwd": "a92e5562aa83dad8f512c182418a67d7",
      "api_token": null,
      "refresh_token": null,
      "email": "f@f.com",
      "language": "fr",
      "cp": "C8en1F~",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "FLORIANE",
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "12",
      "firstname": "Marcus",
      "lastname": "Buck",
      "login": "Marcus",
      "passwd": "d1cbb146a4b80b9adbc6284553bc10c7",
      "api_token": null,
      "refresh_token": null,
      "email": "",
      "language": "fr",
      "cp": "sofibiddiam43",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "13",
      "firstname": "Oliver",
      "lastname": "Duda",
      "login": "Oliver",
      "passwd": "c5d2f20394bde26ecfaf39e99a27e7bf",
      "api_token": null,
      "refresh_token": null,
      "email": "",
      "language": "fr",
      "cp": "fiddibio43",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "14",
      "firstname": "Thierry",
      "lastname": "Kellner",
      "login": "thierry.kellner@luxroutage.lu",
      "passwd": "7aa5addd741a09c4527ef9b6feadbefe",
      "api_token": null,
      "refresh_token": null,
      "email": "thierry.kellner@luxroutage.lu",
      "language": "fr",
      "cp": "3510",
      "is_admin": "1",
      "is_system": "1",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "awevo",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "16",
      "firstname": "Jose",
      "lastname": ".",
      "login": "Jose",
      "passwd": "D45F695D2290F80E3CF18C9489D63F93",
      "api_token": null,
      "refresh_token": null,
      "email": ".@x.com",
      "language": "fr",
      "cp": "jose2806",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": "scan",
      "is_group": "0",
      "wrgroup_id": "Jose",
      "is_active": "0",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "17",
      "firstname": "Anteros",
      "lastname": "anteros",
      "login": "Anteros",
      "passwd": "d148e509bd765f5e74cc7d6ee8618ea5",
      "api_token": null,
      "refresh_token": null,
      "email": "x@w",
      "language": "fr",
      "cp": "poiu01",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": "scan",
      "is_group": "0",
      "wrgroup_id": "Antero",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "18",
      "firstname": "joselito",
      "lastname": ".",
      "login": "joselito",
      "passwd": "c987f802b14a56e588f496472623f4f9",
      "api_token": null,
      "refresh_token": null,
      "email": "j.ventura@vincy-europe.lu",
      "language": "fr",
      "cp": "rep@r@utos!",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "19",
      "firstname": "David",
      "lastname": "Clesse",
      "login": "david",
      "passwd": "1fe360b0c8f85ced30ed4591d8bf58d8",
      "api_token": null,
      "refresh_token": null,
      "email": "david.clesse@luxroutage.lu",
      "language": "fr",
      "cp": "d@vid!",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "David",
      "is_active": "0",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "25",
      "firstname": "chantale",
      "lastname": "Mertz",
      "login": "chantale",
      "passwd": "b382d9abbdf74299b7c1175ce1bb06de",
      "api_token": null,
      "refresh_token": null,
      "email": "luxroutage@luxroutage.lu",
      "language": "fr",
      "cp": "azer01",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": "scan",
      "is_group": "0",
      "wrgroup_id": "Chantale",
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "26",
      "firstname": "sonia",
      "lastname": null,
      "login": "sonia",
      "passwd": "a92e5562aa83dad8f512c182418a67d7",
      "api_token": null,
      "refresh_token": null,
      "email": ".@.",
      "language": "fr",
      "cp": "qsdf01",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": "scan",
      "is_group": "0",
      "wrgroup_id": "Soniaf",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "27",
      "firstname": "paola",
      "lastname": "rcz",
      "login": "paula",
      "passwd": "f5596db6daf0f7ebe2f12d029108bd75",
      "api_token": null,
      "refresh_token": null,
      "email": "",
      "language": "fr",
      "cp": "rcz2012",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "28",
      "firstname": "Guy",
      "lastname": "Heisserer",
      "login": "Guy",
      "passwd": "a92e5562aa83dad8f512c182418a67d7",
      "api_token": null,
      "refresh_token": null,
      "email": "luroutage@gmail.com",
      "language": "fr",
      "cp": "qsdf01",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": "scan",
      "is_group": "0",
      "wrgroup_id": "Guyh",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "34",
      "firstname": "ert",
      "lastname": "tyu",
      "login": "rtyu",
      "passwd": "098f6bcd4621d373cade4e832627b4f6",
      "api_token": null,
      "refresh_token": null,
      "email": "",
      "language": "fr",
      "cp": "",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  },
  {
      "user_id": "47",
      "firstname": "André",
      "lastname": "Perfetto",
      "login": "Andre",
      "passwd": "a19e3a440cf12a970322af37e20a7d29",
      "api_token": null,
      "refresh_token": null,
      "email": "andre.perfetto@luxroutage.lu",
      "language": "fr",
      "cp": "",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "0",
      "wrgroup_id": "Andre",
      "is_active": "1",
      "user_type": "intern",
      "billing_third_party": null
  },
  {
      "user_id": "49",
      "firstname": "Fiddiam",
      "lastname": "Fiddiam",
      "login": "fiddiam",
      "passwd": "a4a75395b6661ff1aa986acdaa581e63",
      "api_token": null,
      "refresh_token": null,
      "email": "dev@fiddiam.net",
      "language": "fr",
      "cp": "franckv",
      "is_admin": "0",
      "is_system": "0",
      "default_router": null,
      "home_page": null,
      "is_group": "1",
      "wrgroup_id": null,
      "is_active": "1",
      "user_type": null,
      "billing_third_party": null
  }
];

function json2array(json:any){
  var result:any = [];
  var keys = Object.keys(json);
  keys.forEach(function(key){
      result.push(json[key]);
  });
  return result;
}

const Home: React.FC = () => {
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



      <IonGrid >
        <IonRow className={classes.flexed}>
        {Object.values(usrs).map( (value:any , key:any) => {
            
           // return <IonCol  key={key} > {value}</IonCol>
           //console.log(value)
           return (
           Object.values(value).map(  (v:any,k:any) =>{
            console.log(v)
            return (
              <div>
              <IonCol   ><div className={classes.lepadding}>{v} </div></IonCol>
              </div>
              )
           } )
           )
           let arr = json2array(value)
           //console.log(arr)
        } )}
        </IonRow>
    </IonGrid>



        <h1>------Autre Test-------</h1>



        <IonGrid>
         <IonRow className={classes.flexed}>
            <IonCol size='8'>
            <div>1 of 3</div>
            </IonCol>
            <IonCol size='5'>
            <div>2 of 3</div>
            </IonCol>
            <IonCol size='4'>
            <div>3 of 3</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>
            <IonCol size='6'>
            <div>4 of 4</div>
            </IonCol>

        </IonRow>
    </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default Home;
