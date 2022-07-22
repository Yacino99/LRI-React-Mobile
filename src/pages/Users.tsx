import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonLabel, IonGrid, IonRadio, IonRow, IonCol } from '@ionic/react';
import React , {useEffect ,useState} from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';
import { LRITableHeaders } from '../components/LRITableHeaders';

import classes from './tables.module.css';
import { TableWrapper } from '../components/TableWrapper';
import { LRItableCollectionBody } from '../components/LRItableCollectionBody';
import { LRISingleTableRow } from '../components/LRISingleTableRow';


var baba = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];


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

const Users: React.FC = (props) => {


  const [data , setData] = useState([]);
  const [lriUsers , setLriUsers] = useState(['']);
  const token:string = sessionStorage.getItem('api_token')+''; 

  useEffect( ()=>{
      loadData();
      loadLriData();
  } , [])

  const loadData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(recievedData => setData(recievedData));
  }


  const loadLriData = () => {

    var link = "http://127.0.0.1:8000/api/users";
   fetch(link, {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8" , 'x-api-token' : token  }
      })
      .then(response => response.json())
      .then(lriData => setLriUsers(lriData))
      .catch(err => console.log(err));
  }

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>USERS</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 

      <p> Hello we are in the users aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa{/*loadData()*/} {console.log( lriUsers)} {console.log( data)}</p>



     
      <IonList>
        {
            baba.map( (item,index) => (
                <IonItem >
                    <IonLabel>
                        <h1>{item.name}</h1>
                        <h2>{item.email}</h2>
                        <h3>{item.username}</h3>
                    </IonLabel>
                </IonItem>
            ) )
            
           
        }
        
        </IonList>

      <h1>------SEPARATEUR-----------------</h1>

      
      <TableWrapper title="ok">
        <LRITableHeaders cols={lriUsers[0]}  />
               
        <LRISingleTableRow data={usrs[4]}/>

        <LRItableCollectionBody data={usrs} />
      </TableWrapper> 

        <h1>------------TEST--------------</h1>


        <IonGrid>
         <IonRow>
            <IonCol>
            <div>1 of 3</div>
            </IonCol>
            <IonCol>
            <div>2 of 3</div>
            </IonCol>
            <IonCol>
            <div>3 of 3</div>
            </IonCol>
            <IonCol>
            <div>4 of 4</div>
            </IonCol>
        </IonRow>
    </IonGrid>


   


   

      </IonContent>
    </IonPage>
  );
};

export default Users;


/*
  lriUsers.map(user  => (

          //if(user.id && user.name)

          user.map((element: any) => {
            { <div> element[0] </div>}
            { console.log (element[0]+"       "+element[1])}
            //alert(element[0]+"  "+element[1])
          })

       ))
      // Object.entries(baba).forEach(item => {
      //       console.log(item);
      //       <div key={item.id}> {item.name} </div>
      //     })

      */