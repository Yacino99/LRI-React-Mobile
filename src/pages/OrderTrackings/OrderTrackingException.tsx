import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExceptionCard from '../../components/ExceptionCard';

var localData =  {
  "Colissimo Europe (avec signature)": [
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "6",
          "average_carrier_delay": 3,
          "delivery_country_iso": "CH",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "21",
          "average_carrier_delay": 3,
          "delivery_country_iso": "CH",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 10,
          "delivery_country_iso": "CY",
          "carrier_delay": "10",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 10,
          "delivery_country_iso": "CY",
          "carrier_delay": "10",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 53,
          "delivery_country_iso": "EE",
          "carrier_delay": "53",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "14",
          "average_carrier_delay": 8,
          "delivery_country_iso": "HR",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 31,
          "delivery_country_iso": "HR",
          "carrier_delay": "31",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 60,
          "delivery_country_iso": "LV",
          "carrier_delay": "60",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "2",
          "average_carrier_delay": 11,
          "delivery_country_iso": "LV",
          "carrier_delay": "12",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 60,
          "delivery_country_iso": "LV",
          "carrier_delay": "60",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "LV",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "1",
          "average_carrier_delay": 59,
          "delivery_country_iso": "LV",
          "carrier_delay": "59",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "2",
          "average_carrier_delay": 13,
          "delivery_country_iso": "MT",
          "carrier_delay": "12",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "2",
          "average_carrier_delay": 26,
          "delivery_country_iso": "NO",
          "carrier_delay": "2",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "Colissimo Europe (avec signature)",
          "total_commandes": "2",
          "average_carrier_delay": 26,
          "delivery_country_iso": "NO",
          "carrier_delay": "50",
          "status_delivery": "not delivered"
      }
  ],
  "Colissimo Europe (sans signature)": [
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "41",
          "average_carrier_delay": 5,
          "delivery_country_iso": "CH",
          "carrier_delay": "7",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "3",
          "average_carrier_delay": 32,
          "delivery_country_iso": "CH",
          "carrier_delay": "4",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "494",
          "average_carrier_delay": 6,
          "delivery_country_iso": "CH",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "40",
          "average_carrier_delay": 30,
          "delivery_country_iso": "CH",
          "carrier_delay": "13",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "42817",
          "average_carrier_delay": 3,
          "delivery_country_iso": "CH",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "1121",
          "average_carrier_delay": 37,
          "delivery_country_iso": "CH",
          "carrier_delay": "87",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "12",
          "average_carrier_delay": 7,
          "delivery_country_iso": "CH",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "9",
          "average_carrier_delay": 19,
          "delivery_country_iso": "CH",
          "carrier_delay": "11",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "1",
          "average_carrier_delay": null,
          "delivery_country_iso": "CH",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "6",
          "average_carrier_delay": 14,
          "delivery_country_iso": "CH",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "2",
          "average_carrier_delay": null,
          "delivery_country_iso": "CH",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "4",
          "average_carrier_delay": 9,
          "delivery_country_iso": "CH",
          "carrier_delay": "13",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "1",
          "average_carrier_delay": 54,
          "delivery_country_iso": "CH",
          "carrier_delay": "54",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "14",
          "error_type": "procedure error",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "105",
          "average_carrier_delay": 7,
          "delivery_country_iso": "CH",
          "carrier_delay": "28",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "14",
          "error_type": "procedure error",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "5",
          "average_carrier_delay": 7,
          "delivery_country_iso": "CH",
          "carrier_delay": "17",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "26",
          "average_carrier_delay": 13,
          "delivery_country_iso": "CH",
          "carrier_delay": "32",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "Colissimo Europe (sans signature)",
          "total_commandes": "13",
          "average_carrier_delay": 22,
          "delivery_country_iso": "CH",
          "carrier_delay": "54",
          "status_delivery": "not delivered"
      }
  ],
  "Colissimo Expert DOM": [
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Expert DOM",
          "total_commandes": "1",
          "average_carrier_delay": 11,
          "delivery_country_iso": "FR",
          "carrier_delay": "11",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Expert DOM",
          "total_commandes": "1",
          "average_carrier_delay": 9,
          "delivery_country_iso": "FR",
          "carrier_delay": "9",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Expert DOM",
          "total_commandes": "1",
          "average_carrier_delay": 11,
          "delivery_country_iso": "FR",
          "carrier_delay": "11",
          "status_delivery": "delivered"
      }
  ],
  "Colissimo Expert F": [
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "FR",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "659",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FR",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "13",
          "average_carrier_delay": 36,
          "delivery_country_iso": "FR",
          "carrier_delay": "2",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "248",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FR",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "8",
          "average_carrier_delay": 23,
          "delivery_country_iso": "FR",
          "carrier_delay": "5",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "11",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FR",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "26",
          "average_carrier_delay": 4,
          "delivery_country_iso": "FR",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "FR",
          "carrier_delay": "2",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "37",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FR",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "2",
          "average_carrier_delay": 1,
          "delivery_country_iso": "FR",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "3",
          "average_carrier_delay": 4,
          "delivery_country_iso": "FR",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "FR",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "2",
          "average_carrier_delay": 7,
          "delivery_country_iso": "FR",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "14",
          "error_type": "procedure error",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "23",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FR",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "14",
          "error_type": "procedure error",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "1",
          "average_carrier_delay": 104,
          "delivery_country_iso": "FR",
          "carrier_delay": "104",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "Colissimo Expert F",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "FR",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      }
  ],
  "Colissimo Inter": [
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "Colissimo Inter",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "HR",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "Colissimo Inter",
          "total_commandes": "1",
          "average_carrier_delay": 9,
          "delivery_country_iso": "NO",
          "carrier_delay": "9",
          "status_delivery": "delivered"
      }
  ],
  "DHL": [
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "DHL",
          "total_commandes": "208",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "DHL",
          "total_commandes": "9",
          "average_carrier_delay": 3,
          "delivery_country_iso": "DE",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "DHL",
          "total_commandes": "8194",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "DHL",
          "total_commandes": "107",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "DHL",
          "total_commandes": "2343",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "DHL",
          "total_commandes": "32",
          "average_carrier_delay": 3,
          "delivery_country_iso": "DE",
          "carrier_delay": "3",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "DHL",
          "total_commandes": "1607",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "DHL",
          "total_commandes": "106",
          "average_carrier_delay": 3,
          "delivery_country_iso": "DE",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "DHL",
          "total_commandes": "6491",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "DHL",
          "total_commandes": "177",
          "average_carrier_delay": 3,
          "delivery_country_iso": "DE",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "DHL",
          "total_commandes": "389",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "DHL",
          "total_commandes": "35",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "DHL",
          "total_commandes": "29",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "0",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "DHL",
          "total_commandes": "8",
          "average_carrier_delay": 4,
          "delivery_country_iso": "DE",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      }
  ],
  "UPS": [
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "190",
          "average_carrier_delay": 2,
          "delivery_country_iso": "AT",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 15,
          "delivery_country_iso": "AT",
          "carrier_delay": "15",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "AT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 3,
          "delivery_country_iso": "AT",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "11",
          "average_carrier_delay": 3,
          "delivery_country_iso": "AT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "AT",
          "carrier_delay": "4",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "15",
          "average_carrier_delay": 4,
          "delivery_country_iso": "AT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 15,
          "delivery_country_iso": "AT",
          "carrier_delay": "14",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "37",
          "average_carrier_delay": 3,
          "delivery_country_iso": "AT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "AT",
          "carrier_delay": "5",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "6",
          "average_carrier_delay": 1,
          "delivery_country_iso": "AT",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 8,
          "delivery_country_iso": "AT",
          "carrier_delay": "8",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "13",
          "average_carrier_delay": 1,
          "delivery_country_iso": "BE",
          "carrier_delay": "0",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 2,
          "delivery_country_iso": "BE",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "6",
          "average_carrier_delay": 3,
          "delivery_country_iso": "BE",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "BE",
          "carrier_delay": "6",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "BE",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 8,
          "delivery_country_iso": "BG",
          "carrier_delay": "8",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "BG",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "BG",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "7",
          "average_carrier_delay": 7,
          "delivery_country_iso": "BG",
          "carrier_delay": "7",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 77,
          "delivery_country_iso": "CZ",
          "carrier_delay": "109",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 3,
          "delivery_country_iso": "CZ",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 16,
          "delivery_country_iso": "CZ",
          "carrier_delay": "16",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 6,
          "delivery_country_iso": "CZ",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 15,
          "delivery_country_iso": "CZ",
          "carrier_delay": "15",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 4,
          "delivery_country_iso": "CZ",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 109,
          "delivery_country_iso": "CZ",
          "carrier_delay": "109",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "66",
          "average_carrier_delay": 1,
          "delivery_country_iso": "DE",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "2",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 51,
          "delivery_country_iso": "DE",
          "carrier_delay": "51",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 10,
          "delivery_country_iso": "DE",
          "carrier_delay": "8",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "14",
          "average_carrier_delay": 1,
          "delivery_country_iso": "DE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 1,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 12,
          "delivery_country_iso": "DE",
          "carrier_delay": "12",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 1,
          "delivery_country_iso": "DE",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "37",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DK",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 9,
          "delivery_country_iso": "DK",
          "carrier_delay": "9",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 5,
          "delivery_country_iso": "DK",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "DK",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "10",
          "average_carrier_delay": 3,
          "delivery_country_iso": "DK",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DK",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "DK",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "EE",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "29",
          "average_carrier_delay": 4,
          "delivery_country_iso": "ES",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "10",
          "average_carrier_delay": 7,
          "delivery_country_iso": "ES",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 12,
          "delivery_country_iso": "ES",
          "carrier_delay": "12",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "14",
          "average_carrier_delay": 5,
          "delivery_country_iso": "ES",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 1,
          "delivery_country_iso": "ES",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 12,
          "delivery_country_iso": "ES",
          "carrier_delay": "12",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "6",
          "average_carrier_delay": 3,
          "delivery_country_iso": "FI",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 6,
          "delivery_country_iso": "FI",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 6,
          "delivery_country_iso": "GB",
          "carrier_delay": "8",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "11",
          "error_type": "billing or payment problem",
          "carrier_name": "UPS",
          "total_commandes": "10",
          "average_carrier_delay": 3,
          "delivery_country_iso": "GB",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "11",
          "error_type": "billing or payment problem",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 29,
          "delivery_country_iso": "GB",
          "carrier_delay": "50",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "670",
          "average_carrier_delay": 2,
          "delivery_country_iso": "GB",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "14",
          "average_carrier_delay": 36,
          "delivery_country_iso": "GB",
          "carrier_delay": "55",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS",
          "total_commandes": "77",
          "average_carrier_delay": 2,
          "delivery_country_iso": "GB",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 5,
          "delivery_country_iso": "GB",
          "carrier_delay": "9",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 60,
          "delivery_country_iso": "GB",
          "carrier_delay": "60",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "50",
          "average_carrier_delay": 3,
          "delivery_country_iso": "GB",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "GB",
          "carrier_delay": "4",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "85",
          "average_carrier_delay": 5,
          "delivery_country_iso": "GB",
          "carrier_delay": "27",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "17",
          "average_carrier_delay": 27,
          "delivery_country_iso": "GB",
          "carrier_delay": "19",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "1093",
          "average_carrier_delay": 3,
          "delivery_country_iso": "GB",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "33",
          "average_carrier_delay": 14,
          "delivery_country_iso": "GB",
          "carrier_delay": "60",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "20",
          "average_carrier_delay": 3,
          "delivery_country_iso": "GB",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "12",
          "error_type": "package exceeds dimension/weight",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 17,
          "delivery_country_iso": "GB",
          "carrier_delay": "17",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 3,
          "delivery_country_iso": "GB",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "7",
          "average_carrier_delay": 25,
          "delivery_country_iso": "GB",
          "carrier_delay": "31",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "7",
          "error_type": "return to sender",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 6,
          "delivery_country_iso": "GB",
          "carrier_delay": "11",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 10,
          "delivery_country_iso": "GR",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 12,
          "delivery_country_iso": "GR",
          "carrier_delay": "13",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "16",
          "average_carrier_delay": 10,
          "delivery_country_iso": "GR",
          "carrier_delay": "7",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 9,
          "delivery_country_iso": "HR",
          "carrier_delay": "9",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 4,
          "delivery_country_iso": "HR",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "7",
          "average_carrier_delay": 4,
          "delivery_country_iso": "HU",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 3,
          "delivery_country_iso": "HU",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "HU",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 6,
          "delivery_country_iso": "HU",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "11",
          "average_carrier_delay": 4,
          "delivery_country_iso": "HU",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 1,
          "delivery_country_iso": "HU",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 7,
          "delivery_country_iso": "IE",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 7,
          "delivery_country_iso": "IE",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "9",
          "average_carrier_delay": 6,
          "delivery_country_iso": "IE",
          "carrier_delay": "8",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 16,
          "delivery_country_iso": "IT",
          "carrier_delay": "16",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "615",
          "average_carrier_delay": 3,
          "delivery_country_iso": "IT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 19,
          "delivery_country_iso": "IT",
          "carrier_delay": "19",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 13,
          "delivery_country_iso": "IT",
          "carrier_delay": "13",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "21",
          "average_carrier_delay": 9,
          "delivery_country_iso": "IT",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 18,
          "delivery_country_iso": "IT",
          "carrier_delay": "25",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "76",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "175",
          "average_carrier_delay": 6,
          "delivery_country_iso": "IT",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "45",
          "average_carrier_delay": 18,
          "delivery_country_iso": "IT",
          "carrier_delay": "12",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "1860",
          "average_carrier_delay": 3,
          "delivery_country_iso": "IT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "20",
          "average_carrier_delay": 23,
          "delivery_country_iso": "IT",
          "carrier_delay": "27",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "15",
          "average_carrier_delay": 3,
          "delivery_country_iso": "IT",
          "carrier_delay": "12",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "6",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "12",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "12",
          "average_carrier_delay": 14,
          "delivery_country_iso": "IT",
          "carrier_delay": "9",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "9",
          "error_type": "Arrived with damage",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "NL",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "27",
          "average_carrier_delay": 1,
          "delivery_country_iso": "NL",
          "carrier_delay": "0",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "NL",
          "carrier_delay": "5",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 3,
          "delivery_country_iso": "NL",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "NL",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 2,
          "delivery_country_iso": "PL",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 3,
          "delivery_country_iso": "PL",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 3,
          "delivery_country_iso": "PL",
          "carrier_delay": "3",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "10",
          "average_carrier_delay": 5,
          "delivery_country_iso": "PT",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "5",
          "average_carrier_delay": 9,
          "delivery_country_iso": "PT",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 27,
          "delivery_country_iso": "PT",
          "carrier_delay": "27",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "9",
          "average_carrier_delay": 6,
          "delivery_country_iso": "PT",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 5,
          "delivery_country_iso": "PT",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 15,
          "delivery_country_iso": "PT",
          "carrier_delay": "15",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 5,
          "delivery_country_iso": "RO",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "9",
          "average_carrier_delay": 4,
          "delivery_country_iso": "RO",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "41",
          "average_carrier_delay": 2,
          "delivery_country_iso": "SE",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "5",
          "error_type": "delivery failed - not due to carrier",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 2,
          "delivery_country_iso": "SE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 13,
          "delivery_country_iso": "SE",
          "carrier_delay": "8",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "14",
          "average_carrier_delay": 4,
          "delivery_country_iso": "SE",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "6",
          "error_type": "not collect by customer (pick up point)",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 2,
          "delivery_country_iso": "SE",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 18,
          "delivery_country_iso": "SE",
          "carrier_delay": "18",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "3",
          "average_carrier_delay": 4,
          "delivery_country_iso": "SI",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 6,
          "delivery_country_iso": "SI",
          "carrier_delay": "6",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "SI",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "SI",
          "carrier_delay": "4",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "24",
          "average_carrier_delay": 2,
          "delivery_country_iso": "SI",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS",
          "total_commandes": "2",
          "average_carrier_delay": 8,
          "delivery_country_iso": "SK",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS",
          "total_commandes": "4",
          "average_carrier_delay": 8,
          "delivery_country_iso": "SK",
          "carrier_delay": "6",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS",
          "total_commandes": "8",
          "average_carrier_delay": 3,
          "delivery_country_iso": "SK",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      }
  ],
  "UPS COD": [
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS COD",
          "total_commandes": "84",
          "average_carrier_delay": 3,
          "delivery_country_iso": "IT",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "2",
          "error_type": "customer not at home/pick up point closed",
          "carrier_name": "UPS COD",
          "total_commandes": "23",
          "average_carrier_delay": 14,
          "delivery_country_iso": "IT",
          "carrier_delay": "22",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS COD",
          "total_commandes": "1",
          "average_carrier_delay": 10,
          "delivery_country_iso": "IT",
          "carrier_delay": "10",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "4",
          "error_type": "delivery failed",
          "carrier_name": "UPS COD",
          "total_commandes": "2",
          "average_carrier_delay": 20,
          "delivery_country_iso": "IT",
          "carrier_delay": "28",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS COD",
          "total_commandes": "11",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "5",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "3",
          "error_type": "delivery failed - wrong address",
          "carrier_name": "UPS COD",
          "total_commandes": "8",
          "average_carrier_delay": 17,
          "delivery_country_iso": "IT",
          "carrier_delay": "22",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS COD",
          "total_commandes": "80",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IT",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS COD",
          "total_commandes": "15",
          "average_carrier_delay": 10,
          "delivery_country_iso": "IT",
          "carrier_delay": "21",
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS COD",
          "total_commandes": "1",
          "average_carrier_delay": 16,
          "delivery_country_iso": "IT",
          "carrier_delay": "16",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS COD",
          "total_commandes": "24",
          "average_carrier_delay": 6,
          "delivery_country_iso": "IT",
          "carrier_delay": "1",
          "status_delivery": "not delivered"
      }
  ],
  "UPS Saver": [
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS Saver",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "CY",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS Saver",
          "total_commandes": "1",
          "average_carrier_delay": 4,
          "delivery_country_iso": "IC",
          "carrier_delay": "4",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "1",
          "error_type": "package refused by customer/pick up point",
          "carrier_name": "UPS Saver",
          "total_commandes": "1",
          "average_carrier_delay": null,
          "delivery_country_iso": "IC",
          "carrier_delay": null,
          "status_delivery": "not delivered"
      },
      {
          "error_type_id": "11",
          "error_type": "billing or payment problem",
          "carrier_name": "UPS Saver",
          "total_commandes": "3",
          "average_carrier_delay": 2,
          "delivery_country_iso": "LI",
          "carrier_delay": "2",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "8",
          "error_type": "customs/government agency",
          "carrier_name": "UPS Saver",
          "total_commandes": "1",
          "average_carrier_delay": 0,
          "delivery_country_iso": "LI",
          "carrier_delay": "0",
          "status_delivery": "delivered"
      },
      {
          "error_type_id": "10",
          "error_type": "delivery retarded",
          "carrier_name": "UPS Saver",
          "total_commandes": "3",
          "average_carrier_delay": 2,
          "delivery_country_iso": "LI",
          "carrier_delay": "1",
          "status_delivery": "delivered"
      }
  ]
} ;


interface Props{
  data:any;
} 


const OrdersTrackingException: React.FC<Props> = ({data}) => {


  return (
    
    <>
      

      {
        //console.log( Object.values(dataAsArray) , "coucou" )

                
        Object.entries(localData).map( (entry:any) => {
          const [key, value] = entry;
          //console.log(value,"toto")
          return (
            <>
              <h1>{key}</h1>
              
              <ExceptionCard data={value} ></ExceptionCard>
            </>
          )
        })
      }

    </>
  );
};

export default OrdersTrackingException;
