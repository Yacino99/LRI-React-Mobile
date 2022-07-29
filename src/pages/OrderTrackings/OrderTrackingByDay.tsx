import { IonCol, IonGrid, IonLoading, IonRow } from '@ionic/react';
import React from 'react';
import { LRITableHeaders } from '../../components/LRITableHeaders';
import { TableWrapper } from '../../components/TableWrapper';
import classes from './../tables.module.css';

var localData = {
  "AustrianPost": [
      {
          "carrier_name": "AustrianPost",
          "carrier_id": "29",
          "title_en": "Austria",
          "delivery_country_iso": "AT",
          "averageDelivery": 0,
          "total_orders": "0/43555",
          "never_delivered": 43555,
          "success_rate": 0,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 0
      }
  ],
  "Colissimo Europe (avec signature)": [
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Estonia",
          "delivery_country_iso": "EE",
          "averageDelivery": 22,
          "total_orders": "2/3",
          "never_delivered": 1,
          "success_rate": 66.67,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 33.33,
          "j7": 66.67,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Spain",
          "delivery_country_iso": "ES",
          "averageDelivery": 4,
          "total_orders": "0/2",
          "never_delivered": 2,
          "success_rate": 0,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Croatia",
          "delivery_country_iso": "HR",
          "averageDelivery": 5,
          "total_orders": "90/90",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 1.11,
          "j3": 24.44,
          "j4": 52.22,
          "j5": 73.33,
          "j6": 88.89,
          "j7": 93.33,
          "jinfini": 6.67
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Italy",
          "delivery_country_iso": "IT",
          "averageDelivery": 4,
          "total_orders": "4/4",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 25,
          "j3": 25,
          "j4": 75,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Lithuania",
          "delivery_country_iso": "LT",
          "averageDelivery": 7,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Latvia",
          "delivery_country_iso": "LV",
          "averageDelivery": 13,
          "total_orders": "13/17",
          "never_delivered": 4,
          "success_rate": 76.47,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 17.65,
          "j6": 47.06,
          "j7": 58.82,
          "jinfini": 17.65
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Switzerland",
          "delivery_country_iso": "CH",
          "averageDelivery": 3,
          "total_orders": "21/21",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 4.76,
          "j2": 57.14,
          "j3": 76.19,
          "j4": 85.71,
          "j5": 95.24,
          "j6": 95.24,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Malta",
          "delivery_country_iso": "MT",
          "averageDelivery": 17,
          "total_orders": "4/4",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 100
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Cyprus",
          "delivery_country_iso": "CY",
          "averageDelivery": 10,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 100
      },
      {
          "carrier_name": "Colissimo Europe (avec signature)",
          "carrier_id": "51",
          "title_en": "Norway",
          "delivery_country_iso": "NO",
          "averageDelivery": 26,
          "total_orders": "0/2",
          "never_delivered": 2,
          "success_rate": 0,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 0
      }
  ],
  "Colissimo Europe (sans signature)": [
      {
          "carrier_name": "Colissimo Europe (sans signature)",
          "carrier_id": "50",
          "title_en": "Switzerland",
          "delivery_country_iso": "CH",
          "averageDelivery": 4,
          "total_orders": "42830/45089",
          "never_delivered": 2259,
          "success_rate": 94.99,
          "j1": 3.97,
          "j2": 27.63,
          "j3": 57.79,
          "j4": 85.45,
          "j5": 92.15,
          "j6": 93.59,
          "j7": 94.44,
          "jinfini": 0.52
      }
  ],
  "Colissimo Expert DOM": [
      {
          "carrier_name": "Colissimo Expert DOM",
          "carrier_id": "8",
          "title_en": "France",
          "delivery_country_iso": "FR",
          "averageDelivery": 8,
          "total_orders": "3/3",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 33.33,
          "j5": 33.33,
          "j6": 33.33,
          "j7": 33.33,
          "jinfini": 66.67
      },
      {
          "carrier_name": "Colissimo Expert DOM",
          "carrier_id": "8",
          "title_en": "Guadeloupe",
          "delivery_country_iso": "GP",
          "averageDelivery": 7,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 100,
          "jinfini": 0
      }
  ],
  "Colissimo Expert F": [
      {
          "carrier_name": "Colissimo Expert F",
          "carrier_id": "6",
          "title_en": "France",
          "delivery_country_iso": "FR",
          "averageDelivery": 2,
          "total_orders": "4028/4133",
          "never_delivered": 105,
          "success_rate": 97.46,
          "j1": 51.73,
          "j2": 80.38,
          "j3": 92.35,
          "j4": 95.72,
          "j5": 96.61,
          "j6": 96.95,
          "j7": 97.19,
          "jinfini": 0.27
      },
      {
          "carrier_name": "Colissimo Expert F",
          "carrier_id": "6",
          "title_en": "Monaco",
          "delivery_country_iso": "MC",
          "averageDelivery": 2,
          "total_orders": "6/6",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 50,
          "j2": 50,
          "j3": 83.33,
          "j4": 83.33,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      }
  ],
  "Colissimo Inter": [
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Liechtenstein",
          "delivery_country_iso": "LI",
          "averageDelivery": 37,
          "total_orders": "8/12",
          "never_delivered": 4,
          "success_rate": 66.67,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 66.67
      },
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Latvia",
          "delivery_country_iso": "LV",
          "averageDelivery": 6,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Norway",
          "delivery_country_iso": "NO",
          "averageDelivery": 9,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 100
      },
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Croatia",
          "delivery_country_iso": "HR",
          "averageDelivery": 6,
          "total_orders": "6/6",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 50,
          "j6": 83.33,
          "j7": 83.33,
          "jinfini": 16.67
      },
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Italy",
          "delivery_country_iso": "IT",
          "averageDelivery": 6,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "Colissimo Inter",
          "carrier_id": "9",
          "title_en": "Jersey",
          "delivery_country_iso": "JE",
          "averageDelivery": 11,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 100
      }
  ],
  "DHL": [
      {
          "carrier_name": "DHL",
          "carrier_id": "2",
          "title_en": "German",
          "delivery_country_iso": "DE",
          "averageDelivery": 0,
          "total_orders": "193675/197734",
          "never_delivered": 4059,
          "success_rate": 97.95,
          "j1": 88.65,
          "j2": 94.94,
          "j3": 96.72,
          "j4": 97.34,
          "j5": 97.6,
          "j6": 97.74,
          "j7": 97.8,
          "jinfini": 0.15
      }
  ],
  "DHL EXPRESS": [
      {
          "carrier_name": "DHL EXPRESS",
          "carrier_id": "56",
          "title_en": "Slovenia",
          "delivery_country_iso": "SI",
          "averageDelivery": 0,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 100,
          "j2": 100,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      }
  ],
  "DPD": [
      {
          "carrier_name": "DPD",
          "carrier_id": "11",
          "title_en": "Italy",
          "delivery_country_iso": "IT",
          "averageDelivery": 1,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 50,
          "j2": 100,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      }
  ],
  "Sur place": [
      {
          "carrier_name": "Sur place",
          "carrier_id": "27",
          "title_en": "Slovenia",
          "delivery_country_iso": "SI",
          "averageDelivery": 0,
          "total_orders": "0/1",
          "never_delivered": 1,
          "success_rate": 0,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 0,
          "j6": 0,
          "j7": 0,
          "jinfini": 0
      }
  ],
  "UPS": [
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Spain",
          "delivery_country_iso": "ES",
          "averageDelivery": 3,
          "total_orders": "257/270",
          "never_delivered": 13,
          "success_rate": 95.19,
          "j1": 14.07,
          "j2": 47.78,
          "j3": 62.59,
          "j4": 86.3,
          "j5": 90,
          "j6": 92.59,
          "j7": 93.7,
          "jinfini": 1.48
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Latvia",
          "delivery_country_iso": "LV",
          "averageDelivery": 4,
          "total_orders": "7/7",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 14.29,
          "j3": 14.29,
          "j4": 85.71,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Slovakia",
          "delivery_country_iso": "SK",
          "averageDelivery": 3,
          "total_orders": "81/81",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 16.05,
          "j2": 40.74,
          "j3": 66.67,
          "j4": 86.42,
          "j5": 95.06,
          "j6": 98.77,
          "j7": 98.77,
          "jinfini": 1.23
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Austria",
          "delivery_country_iso": "AT",
          "averageDelivery": 2,
          "total_orders": "1341/1368",
          "never_delivered": 27,
          "success_rate": 98.03,
          "j1": 61.26,
          "j2": 77.27,
          "j3": 94.52,
          "j4": 97.08,
          "j5": 97.73,
          "j6": 97.88,
          "j7": 97.88,
          "jinfini": 0.15
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Finland",
          "delivery_country_iso": "FI",
          "averageDelivery": 4,
          "total_orders": "34/34",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 23.53,
          "j3": 38.24,
          "j4": 55.88,
          "j5": 79.41,
          "j6": 94.12,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Monaco",
          "delivery_country_iso": "MC",
          "averageDelivery": 2,
          "total_orders": "3/4",
          "never_delivered": 1,
          "success_rate": 75,
          "j1": 50,
          "j2": 50,
          "j3": 75,
          "j4": 75,
          "j5": 75,
          "j6": 75,
          "j7": 75,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Belgium",
          "delivery_country_iso": "BE",
          "averageDelivery": 1,
          "total_orders": "122/123",
          "never_delivered": 1,
          "success_rate": 99.19,
          "j1": 81.3,
          "j2": 93.5,
          "j3": 96.75,
          "j4": 97.56,
          "j5": 99.19,
          "j6": 99.19,
          "j7": 99.19,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "United kingdom",
          "delivery_country_iso": "GB",
          "averageDelivery": 2,
          "total_orders": "7687/7919",
          "never_delivered": 232,
          "success_rate": 97.07,
          "j1": 46.43,
          "j2": 66.75,
          "j3": 85.5,
          "j4": 92.65,
          "j5": 95.24,
          "j6": 96.24,
          "j7": 96.7,
          "jinfini": 0.37
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Netherlands",
          "delivery_country_iso": "NL",
          "averageDelivery": 1,
          "total_orders": "185/192",
          "never_delivered": 7,
          "success_rate": 96.35,
          "j1": 80.21,
          "j2": 93.75,
          "j3": 95.83,
          "j4": 95.83,
          "j5": 95.83,
          "j6": 95.83,
          "j7": 96.35,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Bulgaria",
          "delivery_country_iso": "BG",
          "averageDelivery": 6,
          "total_orders": "27/29",
          "never_delivered": 2,
          "success_rate": 93.1,
          "j1": 0,
          "j2": 0,
          "j3": 10.34,
          "j4": 10.34,
          "j5": 27.59,
          "j6": 58.62,
          "j7": 75.86,
          "jinfini": 17.24
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Greece",
          "delivery_country_iso": "GR",
          "averageDelivery": 7,
          "total_orders": "54/55",
          "never_delivered": 1,
          "success_rate": 98.18,
          "j1": 0,
          "j2": 1.82,
          "j3": 1.82,
          "j4": 3.64,
          "j5": 5.45,
          "j6": 61.82,
          "j7": 74.55,
          "jinfini": 23.64
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Poland",
          "delivery_country_iso": "PL",
          "averageDelivery": 2,
          "total_orders": "67/69",
          "never_delivered": 2,
          "success_rate": 97.1,
          "j1": 66.67,
          "j2": 72.46,
          "j3": 92.75,
          "j4": 95.65,
          "j5": 95.65,
          "j6": 97.1,
          "j7": 97.1,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Czech Republic",
          "delivery_country_iso": "CZ",
          "averageDelivery": 5,
          "total_orders": "62/68",
          "never_delivered": 6,
          "success_rate": 91.18,
          "j1": 51.47,
          "j2": 60.29,
          "j3": 77.94,
          "j4": 85.29,
          "j5": 88.24,
          "j6": 89.71,
          "j7": 89.71,
          "jinfini": 1.47
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Croatia",
          "delivery_country_iso": "HR",
          "averageDelivery": 3,
          "total_orders": "22/22",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 27.27,
          "j3": 81.82,
          "j4": 86.36,
          "j5": 90.91,
          "j6": 95.45,
          "j7": 95.45,
          "jinfini": 4.55
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Portugal",
          "delivery_country_iso": "PT",
          "averageDelivery": 4,
          "total_orders": "115/119",
          "never_delivered": 4,
          "success_rate": 96.64,
          "j1": 0,
          "j2": 35.29,
          "j3": 40.34,
          "j4": 69.75,
          "j5": 89.92,
          "j6": 92.44,
          "j7": 93.28,
          "jinfini": 3.36
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "German",
          "delivery_country_iso": "DE",
          "averageDelivery": 1,
          "total_orders": "626/645",
          "never_delivered": 19,
          "success_rate": 97.05,
          "j1": 81.09,
          "j2": 92.56,
          "j3": 96.28,
          "j4": 96.74,
          "j5": 96.74,
          "j6": 96.9,
          "j7": 96.9,
          "jinfini": 0.16
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Hungary",
          "delivery_country_iso": "HU",
          "averageDelivery": 2,
          "total_orders": "72/73",
          "never_delivered": 1,
          "success_rate": 98.63,
          "j1": 46.58,
          "j2": 58.9,
          "j3": 78.08,
          "j4": 83.56,
          "j5": 93.15,
          "j6": 95.89,
          "j7": 97.26,
          "jinfini": 1.37
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Romania",
          "delivery_country_iso": "RO",
          "averageDelivery": 4,
          "total_orders": "26/27",
          "never_delivered": 1,
          "success_rate": 96.3,
          "j1": 0,
          "j2": 33.33,
          "j3": 37.04,
          "j4": 59.26,
          "j5": 81.48,
          "j6": 92.59,
          "j7": 92.59,
          "jinfini": 3.7
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Denmark",
          "delivery_country_iso": "DK",
          "averageDelivery": 2,
          "total_orders": "204/205",
          "never_delivered": 1,
          "success_rate": 99.51,
          "j1": 54.63,
          "j2": 69.76,
          "j3": 92.68,
          "j4": 98.05,
          "j5": 98.54,
          "j6": 98.54,
          "j7": 98.54,
          "jinfini": 0.98
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Ireland",
          "delivery_country_iso": "IE",
          "averageDelivery": 5,
          "total_orders": "90/93",
          "never_delivered": 3,
          "success_rate": 96.77,
          "j1": 0,
          "j2": 0,
          "j3": 26.88,
          "j4": 32.26,
          "j5": 75.27,
          "j6": 88.17,
          "j7": 91.4,
          "jinfini": 5.38
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Sweden",
          "delivery_country_iso": "SE",
          "averageDelivery": 2,
          "total_orders": "160/162",
          "never_delivered": 2,
          "success_rate": 98.77,
          "j1": 43.21,
          "j2": 62.96,
          "j3": 80.86,
          "j4": 90.74,
          "j5": 94.44,
          "j6": 95.68,
          "j7": 96.3,
          "jinfini": 2.47
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Estonia",
          "delivery_country_iso": "EE",
          "averageDelivery": 5,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 0,
          "j3": 0,
          "j4": 0,
          "j5": 50,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Italy",
          "delivery_country_iso": "IT",
          "averageDelivery": 3,
          "total_orders": "7395/7600",
          "never_delivered": 205,
          "success_rate": 97.3,
          "j1": 37.49,
          "j2": 56.59,
          "j3": 78.43,
          "j4": 90.26,
          "j5": 94.21,
          "j6": 95.59,
          "j7": 96.17,
          "jinfini": 1.13
      },
      {
          "carrier_name": "UPS",
          "carrier_id": "5",
          "title_en": "Slovenia",
          "delivery_country_iso": "SI",
          "averageDelivery": 2,
          "total_orders": "85/88",
          "never_delivered": 3,
          "success_rate": 96.59,
          "j1": 43.18,
          "j2": 60.23,
          "j3": 84.09,
          "j4": 92.05,
          "j5": 95.45,
          "j6": 96.59,
          "j7": 96.59,
          "jinfini": 0
      }
  ],
  "UPS COD": [
      {
          "carrier_name": "UPS COD",
          "carrier_id": "37",
          "title_en": "Italy",
          "delivery_country_iso": "IT",
          "averageDelivery": 3,
          "total_orders": "501/616",
          "never_delivered": 115,
          "success_rate": 81.33,
          "j1": 35.88,
          "j2": 51.62,
          "j3": 67.53,
          "j4": 75.32,
          "j5": 78.9,
          "j6": 80.03,
          "j7": 80.68,
          "jinfini": 0.65
      }
  ],
  "UPS Saver": [
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "Jersey",
          "delivery_country_iso": "JE",
          "averageDelivery": 1,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 100,
          "j2": 100,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "Liechtenstein",
          "delivery_country_iso": "LI",
          "averageDelivery": 0,
          "total_orders": "73/74",
          "never_delivered": 1,
          "success_rate": 98.65,
          "j1": 83.78,
          "j2": 97.3,
          "j3": 98.65,
          "j4": 98.65,
          "j5": 98.65,
          "j6": 98.65,
          "j7": 98.65,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "Latvia",
          "delivery_country_iso": "LV",
          "averageDelivery": 2,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 0,
          "j2": 100,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "Portugal",
          "delivery_country_iso": "PT",
          "averageDelivery": 2,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 50,
          "j2": 50,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "United States",
          "delivery_country_iso": "US",
          "averageDelivery": 1,
          "total_orders": "1/1",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 100,
          "j2": 100,
          "j3": 100,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      },
      {
          "carrier_name": "UPS Saver",
          "carrier_id": "46",
          "title_en": "Cyprus",
          "delivery_country_iso": "CY",
          "averageDelivery": 2,
          "total_orders": "2/2",
          "never_delivered": 0,
          "success_rate": 100,
          "j1": 50,
          "j2": 50,
          "j3": 50,
          "j4": 100,
          "j5": 100,
          "j6": 100,
          "j7": 100,
          "jinfini": 0
      }
  ]
};

interface Props{
    data:any;
}  

const OrderTrackingByDay: React.FC<Props> = ({data})  => {


return (
  
  <div>
   

        {
        //data[0].length == 0 ? <IonLoading isOpen={true} ></IonLoading> : <pre> ok {console.log(data)} </pre> 
        }

        
        <TableWrapper title={''}>
            {
                /*
                Object.keys(localData).map( (transporteurs , key) => {
                    console.log( Object.values(localData)[key] )
                return (
                    <>
                        <h1 key={key}>{transporteurs}</h1>
                
                        <IonGrid>
                            <IonRow  className={classes.flexed}>
                                <IonCol> <div className={classes.colonnes} > Pays </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> Moyenne </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> Total </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> Commandes non Livrés </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> Taux De Reussite </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+1(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+2(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes} > J+3(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+4(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+5(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+6(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J+7(%) </div> </IonCol>
                                <IonCol> <div className={classes.colonnes}> J&gt;7(%) </div> </IonCol>
                            </IonRow>

                            <IonRow className={classes.flexed}>

                            {
                                Object.values(localData)[key].map( (item:any , key:any ) => {
                                
                                    return (
                                        <>
                                            <IonCol> <div className={classes.colonnes}> {item.delivery_country_iso} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.total_orders} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.total_orders} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.never_delivered} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.success_rate} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j1} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j2} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j3} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j4} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j5} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j6} </div> </IonCol>
                                            <IonCol> <div className={classes.colonnes}> {item.j7} </div> </IonCol>

                                        </>
                                    )

                                } )
                            }

                            </IonRow>
                        </IonGrid>
                
                    </>
                )

            } )
                */
            }

        </TableWrapper>
        
        <TableWrapper title={''} >
        <IonGrid>
        {
           data.length != 0 ? 
           Object.values(data).map( (objects:any , key : any) => {
               
                return (
                        <div>
                            <h1 key={key}>{typeof objects[0]["carrier_name"]  !== 'undefined' ? objects[0]["carrier_name"] : '' }</h1>

                          
                                <IonRow  className={classes.flexed}>
                                    <IonCol> <div className={classes.colonnes} > Pays </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> Moyenne </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> Total </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> Commandes non Livrés </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> Taux De Reussite </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+1(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+2(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes} > J+3(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+4(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+5(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+6(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J+7(%) </div> </IonCol>
                                    <IonCol> <div className={classes.colonnes}> J&gt;7(%) </div> </IonCol>
                                </IonRow>
                           
                                {/*je map et each row possede ses colonnes*/}
                              
                              
                                {
                                    objects.map( (item:any,k:any) => {
                                       
                                        return (
                                            <IonRow  className={classes.flexed} key={k}>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.delivery_country_iso !== 'undefined' ? item.delivery_country_iso: '' } </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.averageDelivery !== 'undefined' ? item.averageDelivery :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.total_orders !== 'undefined' ? item.total_orders :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.never_delivered !== 'undefined' ? item.never_delivered :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.success_rate !== 'undefined' ? item.success_rate :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j1 !== 'undefined' ? item.j1 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j2 !== 'undefined' ? item.j2 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j3 !== 'undefined' ? item.j3 :'' } </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j4 !== 'undefined' ? item.j4 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j5 !== 'undefined' ? item.j5 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j6 !== 'undefined' ? item.j6 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.j7 !== 'undefined' ? item.j7 :''} </div> </IonCol>
                                                <IonCol> <div className={classes.colonnes}> {typeof item.jinfini !== 'undefined' ? item.jinfini: ''}  </div> </IonCol>
                                            </IonRow>
                                        )
                                    } )
                                }
                               

                        </div>

                        
                    )
            }) //:   <IonLoading isOpen={true} ></IonLoading>  
                : <p>loading ...</p>
               
       
        }
        </IonGrid>
         </TableWrapper>


            

    
    </div>
);

};

export default OrderTrackingByDay;
