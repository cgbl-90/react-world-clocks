const data = [
  {
    capital: "Tirana",
    offset: 1,
  },
  {
    capital: "Algiers",
    offset: 1,
  },
  {
    capital: "Pago Pago",
    offset: -11,
  },
  {
    capital: "Andorra la Vella",
    offset: 1,
  },
  {
    capital: "Luanda",
    offset: 1,
  },
  {
    capital: "The Valley",
    offset: -4,
  },
  {
    capital: "St. John's",
    offset: -4,
  },
  {
    capital: "Buenos Aires",
    offset: -3,
  },
  {
    capital: "Yerevan",
    offset: 4,
  },
  {
    capital: "Oranjestad",
    offset: -4,
  },
  {
    capital: "Canberra, ACT",
    offset: 11,
  },
  {
    capital: "Vienna",
    offset: 1,
  },
  {
    capital: "Baku",
    offset: 4,
  },
  {
    capital: "Nassau",
    offset: -5,
  },
  {
    capital: "Manama",
    offset: 3,
  },
  {
    capital: "Dhaka",
    offset: 6,
  },
  {
    capital: "Bridgetown",
    offset: -4,
  },
  {
    capital: "Minsk",
    offset: 3,
  },
  {
    capital: "Brussels",
    offset: 1,
  },
  {
    capital: "Belmopan",
    offset: -6,
  },
  {
    capital: "Porto-Novo",
    offset: 1,
  },
  {
    capital: "Hamilton",
    offset: -4,
  },
  {
    capital: "Thimphu",
    offset: 6,
  },
  {
    capital: "La Paz",
    offset: -4,
  },
  {
    capital: "Sarajevo",
    offset: 1,
  },
  {
    capital: "Gaborone",
    offset: 2,
  },
  {
    capital: "Brasilia",
    offset: -3,
  },
  {
    capital: "Road Town",
    offset: -4,
  },
  {
    capital: "Bandar Seri Begawan",
    offset: 8,
  },
  {
    capital: "Sofia",
    offset: 2,
  },
  {
    capital: "Ouagadougou",
    offset: 0,
  },
  {
    capital: "Bujumbura",
    offset: 2,
  },
  {
    capital: "Phnom Penh",
    offset: 7,
  },
  {
    capital: "Yaound\u00e9",
    offset: 1,
  },
  {
    capital: "Ottawa, ON",
    offset: -5,
  },
  {
    capital: "Praia",
    offset: -1,
  },
  {
    capital: "George Town",
    offset: -5,
  },
  {
    capital: "Bangui",
    offset: 1,
  },
  {
    capital: "N'Djamena",
    offset: 1,
  },
  {
    capital: "Santiago",
    offset: -3,
  },
  {
    capital: "Beijing",
    offset: 8,
  },
  {
    capital: "Flying Fish Cove",
    offset: 7,
  },
  {
    capital: "Bogota",
    offset: -5,
  },
  {
    capital: "Moroni",
    offset: 3,
  },
  {
    capital: "Brazzaville",
    offset: 1,
  },
  {
    capital: "Kinshasa",
    offset: 1,
  },
  {
    capital: "Avarua",
    offset: -10,
  },
  {
    capital: "San Jos\u00e9",
    offset: -6,
  },
  {
    capital: "Zagreb",
    offset: 1,
  },
  {
    capital: "Havana",
    offset: -5,
  },
  {
    capital: "Willemstad",
    offset: -4,
  },
  {
    capital: "Nicosia",
    offset: 2,
  },
  {
    capital: "Prague",
    offset: 1,
  },
  {
    capital: "Copenhagen",
    offset: 1,
  },
  {
    capital: "Djibouti",
    offset: 3,
  },
  {
    capital: "Roseau",
    offset: -4,
  },
  {
    capital: "Santo Domingo",
    offset: -4,
  },
  {
    capital: "Quito",
    offset: -5,
  },
  {
    capital: "Cairo",
    offset: 2,
  },
  {
    capital: "San Salvador",
    offset: -6,
  },
  {
    capital: "Malabo",
    offset: 1,
  },
  {
    capital: "Asmara",
    offset: 3,
  },
  {
    capital: "Tallinn",
    offset: 2,
  },
  {
    capital: "Addis Ababa",
    offset: 3,
  },
  {
    capital: "Stanley",
    offset: -3,
  },
  {
    capital: "T\u00f3rshavn",
    offset: 0,
  },
  {
    capital: "Suva",
    offset: 13,
  },
  {
    capital: "Helsinki",
    offset: 2,
  },
  {
    capital: "Paris",
    offset: 1,
  },
  {
    capital: "Cayenne",
    offset: -3,
  },
  {
    capital: "Papeete",
    offset: -10,
  },
  {
    capital: "Libreville",
    offset: 1,
  },
  {
    capital: "Banjul",
    offset: 0,
  },
  {
    capital: "Tbilisi",
    offset: 4,
  },
  {
    capital: "Berlin",
    offset: 1,
  },
  {
    capital: "Accra",
    offset: 0,
  },
  {
    capital: "Gibraltar",
    offset: 1,
  },
  {
    capital: "Athens",
    offset: 2,
  },
  {
    capital: "St. George's",
    offset: -4,
  },
  {
    capital: "Basse-Terre",
    offset: -4,
  },
  {
    capital: "Hagatna",
    offset: 10,
  },
  {
    capital: "Guatemala City",
    offset: -6,
  },
  {
    capital: "Conakry",
    offset: 0,
  },
  {
    capital: "Bissau",
    offset: 0,
  },
  {
    capital: "Georgetown",
    offset: -4,
  },
  {
    capital: "Port-au-Prince",
    offset: -5,
  },
  {
    capital: "Vatican City",
    offset: 1,
  },
  {
    capital: "Tegucigalpa",
    offset: -6,
  },
  {
    capital: "Budapest",
    offset: 1,
  },
  {
    capital: "Reykjavik",
    offset: 0,
  },
  {
    capital: "Jakarta",
    offset: 7,
  },
  {
    capital: "Baghdad",
    offset: 3,
  },
  {
    capital: "Dublin",
    offset: 0,
  },
  {
    capital: "Tel Aviv",
    offset: 2,
  },
  {
    capital: "Rome",
    offset: 1,
  },
  {
    capital: "Yamoussoukro",
    offset: 0,
  },
  {
    capital: "Kingston",
    offset: -5,
  },
  {
    capital: "Tokyo",
    offset: 9,
  },
  {
    capital: "Amman",
    offset: 3,
  },
  {
    capital: "Astana",
    offset: 6,
  },
  {
    capital: "Nairobi",
    offset: 3,
  },
  {
    capital: "South Tarawa",
    offset: 12,
  },
  {
    capital: "Kuwait City",
    offset: 3,
  },
  {
    capital: "Bishkek",
    offset: 6,
  },
  {
    capital: "Vientiane",
    offset: 7,
  },
  {
    capital: "Riga",
    offset: 2,
  },
  {
    capital: "Beirut",
    offset: 2,
  },
  {
    capital: "Maseru",
    offset: 2,
  },
  {
    capital: "Monrovia",
    offset: 0,
  },
  {
    capital: "Tripoli",
    offset: 2,
  },
  {
    capital: "Vaduz",
    offset: 1,
  },
  {
    capital: "Vilnius",
    offset: 2,
  },
  {
    capital: "Luxembourg City",
    offset: 1,
  },
  {
    capital: "Macau",
    offset: 8,
  },
  {
    capital: "Skopje",
    offset: 1,
  },
  {
    capital: "Antananarivo",
    offset: 3,
  },
  {
    capital: "Lilongwe",
    offset: 2,
  },
  {
    capital: "Kuala Lumpur",
    offset: 8,
  },
  {
    capital: "Mal\u00e9",
    offset: 5,
  },
  {
    capital: "Bamako",
    offset: 0,
  },
  {
    capital: "Valletta",
    offset: 1,
  },
  {
    capital: "Majuro",
    offset: 12,
  },
  {
    capital: "Fort-de-France",
    offset: -4,
  },
  {
    capital: "Nouakchott",
    offset: 0,
  },
  {
    capital: "Port Louis",
    offset: 4,
  },
  {
    capital: "Mexico City",
    offset: -6,
  },
  {
    capital: "Palikir",
    offset: 11,
  },
  {
    capital: "Chisinau",
    offset: 2,
  },
  {
    capital: "Monaco",
    offset: 1,
  },
  {
    capital: "Ulan Bator",
    offset: 8,
  },
  {
    capital: "Podgorica",
    offset: 1,
  },
  {
    capital: "Plymouth",
    offset: -4,
  },
  {
    capital: "Rabat",
    offset: 1,
  },
  {
    capital: "Maputo",
    offset: 2,
  },
  {
    capital: "Windhoek",
    offset: 2,
  },
  {
    capital: "Yaren",
    offset: 12,
  },
  {
    capital: "Kathmandu",
    offset: 5,
  },
  {
    capital: "The Hague",
    offset: 1,
  },
  {
    capital: "Noum\u00e9a",
    offset: 11,
  },
  {
    capital: "Wellington",
    offset: 13,
  },
  {
    capital: "Managua",
    offset: -6,
  },
  {
    capital: "Niamey",
    offset: 1,
  },
  {
    capital: "Abuja",
    offset: 1,
  },
  {
    capital: "Alofi",
    offset: -11,
  },
  {
    capital: "Pyongyang",
    offset: 9,
  },
  {
    capital: "Saipan",
    offset: 10,
  },
  {
    capital: "Oslo",
    offset: 1,
  },
  {
    capital: "Muscat",
    offset: 4,
  },
  {
    capital: "Islamabad",
    offset: 5,
  },
  {
    capital: "Koror",
    offset: 9,
  },
  {
    capital: "Ramallah",
    offset: 2,
  },
  {
    capital: "Panama City",
    offset: -5,
  },
  {
    capital: "Asuncion",
    offset: -3,
  },
  {
    capital: "Lima",
    offset: -5,
  },
  {
    capital: "Manila",
    offset: 8,
  },
  {
    capital: "Adamstown",
    offset: -8,
  },
  {
    capital: "Warsaw",
    offset: 1,
  },
  {
    capital: "Lisbon",
    offset: 0,
  },
  {
    capital: "San Juan",
    offset: -4,
  },
  {
    capital: "Doha",
    offset: 3,
  },
  {
    capital: "Saint-Denis",
    offset: 4,
  },
  {
    capital: "Bucharest",
    offset: 2,
  },
  {
    capital: "Moscow",
    offset: 3,
  },
  {
    capital: "Kigali",
    offset: 2,
  },
  {
    capital: "Basseterre",
    offset: -4,
  },
  {
    capital: "Castries",
    offset: -4,
  },
  {
    capital: "Kingstown",
    offset: -4,
  },
  {
    capital: "Apia",
    offset: 13,
  },
  {
    capital: "San Marino",
    offset: 1,
  },
  {
    capital: "Sao Tome",
    offset: 0,
  },
  {
    capital: "Riyadh",
    offset: 3,
  },
  {
    capital: "Dakar",
    offset: 0,
  },
  {
    capital: "Belgrade",
    offset: 1,
  },
  {
    capital: "Freetown",
    offset: 0,
  },
  {
    capital: "Singapore",
    offset: 8,
  },
  {
    capital: "Bratislava",
    offset: 1,
  },
  {
    capital: "Ljubljana",
    offset: 1,
  },
  {
    capital: "Honiara",
    offset: 11,
  },
  {
    capital: "Mogadishu",
    offset: 3,
  },
  {
    capital: "Pretoria",
    offset: 2,
  },
  {
    capital: "Seoul",
    offset: 9,
  },
  {
    capital: "Madrid",
    offset: 1,
  },
  {
    capital: "Khartoum",
    offset: 2,
  },
  {
    capital: "Paramaribo",
    offset: -3,
  },
  {
    capital: "Mbanane",
    offset: 2,
  },
  {
    capital: "Stockholm",
    offset: 1,
  },
  {
    capital: "Berne",
    offset: 1,
  },
  {
    capital: "Damascus",
    offset: 3,
  },
  {
    capital: "Taipei",
    offset: 8,
  },
  {
    capital: "Dushanbe",
    offset: 5,
  },
  {
    capital: "Dar es Salaam",
    offset: 3,
  },
  {
    capital: "Bangkok",
    offset: 7,
  },
  {
    capital: "Dili",
    offset: 9,
  },
  {
    capital: "Lom\u00e9",
    offset: 0,
  },
  {
    capital: "Nuku'alofa",
    offset: 13,
  },
  {
    capital: "Port of Spain",
    offset: -4,
  },
  {
    capital: "Tunis",
    offset: 1,
  },
  {
    capital: "Ankara",
    offset: 3,
  },
  {
    capital: "Ashgabat",
    offset: 5,
  },
  {
    capital: "Cockburn Town",
    offset: -5,
  },
  {
    capital: "Funafuti",
    offset: 12,
  },
  {
    capital: "Kampala",
    offset: 3,
  },
  {
    capital: "Kiev",
    offset: 2,
  },
  {
    capital: "Abu Dhabi",
    offset: 4,
  },
  {
    capital: "London",
    offset: 0,
  },
  {
    capital: "Montevideo",
    offset: -3,
  },
  {
    capital: "Charlotte Amalie",
    offset: -4,
  },
  {
    capital: "Washington, DC",
    offset: -5,
  },
  {
    capital: "Tashkent",
    offset: 5,
  },
  {
    capital: "Port Vila",
    offset: 11,
  },
  {
    capital: "Caracas",
    offset: -4,
  },
  {
    capital: "Hanoi",
    offset: 7,
  },
  {
    capital: "Sana'a",
    offset: 3,
  },
  {
    capital: "Lusaka",
    offset: 2,
  },
  {
    capital: "Harare",
    offset: 2,
  },
];

export default data;
