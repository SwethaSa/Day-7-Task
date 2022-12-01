// 1 - Get all the countries from the Asia continent /region using the Filter function

let xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://restcountries.com/v2/all");
xhr1.send();
xhr1.onload = () => {
  let data = JSON.parse(xhr1.response);
  let asianCountries = data
    .filter((places) => places.region === "Asia") //Filtering the countries which's region is Asia
    .map((places) => places.name); //Mapping those country names

  console.log(asianCountries);
};
/*Output:
[
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei Darussalam",
  "Cambodia",
  "China",
  "Georgia",
  "Hong Kong",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Lebanon",
  "Macao",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "Korea (Democratic People's Republic of)",
  "Oman",
  "Pakistan",
  "Palestine, State of",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "Korea (Republic of)",
  "Sri Lanka",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];*/

//2 - Get all the countries with a population of less than 2 lakhs using Filter function

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://restcountries.com/v2/all");
xhr2.send();
xhr2.onload = () => {
  let data = JSON.parse(xhr2.response);
  let getPopulationofCountries = data
    .filter((places) => places.population < 200000) //Filtering the countries which's population is less than two lakh
    .map((places) => places.name); //Mapping the names of those countries

  console.log(getPopulationofCountries);
};

/*Output:
[
  'Åland Islands',
  'American Samoa',
  'Andorra',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Aruba',
  'Bermuda',
  'Bonaire, Sint Eustatius and Saba',
  'Bouvet Island',
  'British Indian Ocean Territory',
  'United States Minor Outlying Islands',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Cayman Islands',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Cook Islands',
  'Curaçao',
  'Dominica',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'French Southern Territories',
  'Gibraltar',
  'Greenland',
  'Grenada',
  'Guam',
  'Guernsey',
  'Heard Island and McDonald Islands',
  'Vatican City',
  'Isle of Man',
  'Jersey',
  'Kiribati',
  'Liechtenstein',
  'Marshall Islands',
  'Micronesia (Federated States of)',
  'Monaco',
  'Montserrat',
  'Nauru',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Palau',
  'Pitcairn',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Seychelles',
  'Sint Maarten (Dutch part)',
  'South Georgia and the South Sandwich Islands',
  'Svalbard and Jan Mayen',
  'Tokelau',
  'Tonga',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Wallis and Futuna'
];*/

//3 - Print the following details name, capital, flag using forEach function

let xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://restcountries.com/v2/all");
xhr3.send();
xhr3.onload = () => {
  let data = JSON.parse(xhr3.response);
  data.forEach((data) =>
    console.log(`Name: ${data.name}
Capital: ${data.capital}
Flag: ${data.flag}
            `)
  );
};

/*OUTPUT: 
Name: Afghanistan
Capital: Kabul
Flag: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
            
day7task.js:156 Name: Åland Islands
Capital: Mariehamn
Flag: https://flagcdn.com/ax.svg
            
day7task.js:156 Name: Albania
Capital: Tirana
Flag: https://flagcdn.com/al.svg
            
day7task.js:156 Name: Algeria
Capital: Algiers
Flag: https://flagcdn.com/dz.svg
            
day7task.js:156 Name: American Samoa
Capital: Pago Pago
Flag: https://flagcdn.com/as.svg
            
day7task.js:156 Name: Andorra
Capital: Andorra la Vella
Flag: https://flagcdn.com/ad.svg
            
day7task.js:156 Name: Angola
Capital: Luanda
Flag: https://flagcdn.com/ao.svg
            
day7task.js:156 Name: Anguilla
Capital: The Valley
Flag: https://flagcdn.com/ai.svg
            
day7task.js:156 Name: Antarctica
Capital: undefined
Flag: https://flagcdn.com/aq.svg
            
day7task.js:156 Name: Antigua and Barbuda
Capital: Saint John's
Flag: https://flagcdn.com/ag.svg
            
day7task.js:156 Name: Argentina
Capital: Buenos Aires
Flag: https://flagcdn.com/ar.svg
            
day7task.js:156 Name: Armenia
Capital: Yerevan
Flag: https://flagcdn.com/am.svg
            
day7task.js:156 Name: Aruba
Capital: Oranjestad
Flag: https://flagcdn.com/aw.svg
            
day7task.js:156 Name: Australia
Capital: Canberra
Flag: https://flagcdn.com/au.svg
            
day7task.js:156 Name: Austria
Capital: Vienna
Flag: https://flagcdn.com/at.svg
            
day7task.js:156 Name: Azerbaijan
Capital: Baku
Flag: https://flagcdn.com/az.svg
            
day7task.js:156 Name: Bahamas
Capital: Nassau
Flag: https://flagcdn.com/bs.svg
            
day7task.js:156 Name: Bahrain
Capital: Manama
Flag: https://flagcdn.com/bh.svg
            
day7task.js:156 Name: Bangladesh
Capital: Dhaka
Flag: https://flagcdn.com/bd.svg
            
day7task.js:156 Name: Barbados
Capital: Bridgetown
Flag: https://flagcdn.com/bb.svg
            
day7task.js:156 Name: Belarus
Capital: Minsk
Flag: https://flagcdn.com/by.svg
            
day7task.js:156 Name: Belgium
Capital: Brussels
Flag: https://flagcdn.com/be.svg
            
day7task.js:156 Name: Belize
Capital: Belmopan
Flag: https://flagcdn.com/bz.svg
            
day7task.js:156 Name: Benin
Capital: Porto-Novo
Flag: https://flagcdn.com/bj.svg
            
day7task.js:156 Name: Bermuda
Capital: Hamilton
Flag: https://flagcdn.com/bm.svg
            
day7task.js:156 Name: Bhutan
Capital: Thimphu
Flag: https://flagcdn.com/bt.svg
            
day7task.js:156 Name: Bolivia (Plurinational State of)
Capital: Sucre
Flag: https://flagcdn.com/bo.svg
            
day7task.js:156 Name: Bonaire, Sint Eustatius and Saba
Capital: Kralendijk
Flag: https://flagcdn.com/bq.svg
            
day7task.js:156 Name: Bosnia and Herzegovina
Capital: Sarajevo
Flag: https://flagcdn.com/ba.svg
            
day7task.js:156 Name: Botswana
Capital: Gaborone
Flag: https://flagcdn.com/bw.svg
            
day7task.js:156 Name: Bouvet Island
Capital: undefined
Flag: https://flagcdn.com/bv.svg
            
day7task.js:156 Name: Brazil
Capital: Brasília
Flag: https://flagcdn.com/br.svg
            
day7task.js:156 Name: British Indian Ocean Territory
Capital: Diego Garcia
Flag: https://flagcdn.com/io.svg
            
day7task.js:156 Name: United States Minor Outlying Islands
Capital: undefined
Flag: https://flagcdn.com/um.svg
            
day7task.js:156 Name: Virgin Islands (British)
Capital: Road Town
Flag: https://flagcdn.com/vg.svg
            
day7task.js:156 Name: Virgin Islands (U.S.)
Capital: Charlotte Amalie
Flag: https://flagcdn.com/vi.svg
            
day7task.js:156 Name: Brunei Darussalam
Capital: Bandar Seri Begawan
Flag: https://flagcdn.com/bn.svg
            
day7task.js:156 Name: Bulgaria
Capital: Sofia
Flag: https://flagcdn.com/bg.svg
            
day7task.js:156 Name: Burkina Faso
Capital: Ouagadougou
Flag: https://flagcdn.com/bf.svg
            
day7task.js:156 Name: Burundi
Capital: Gitega
Flag: https://flagcdn.com/bi.svg
            
day7task.js:156 Name: Cambodia
Capital: Phnom Penh
Flag: https://flagcdn.com/kh.svg
            
day7task.js:156 Name: Cameroon
Capital: Yaoundé
Flag: https://flagcdn.com/cm.svg
            
day7task.js:156 Name: Canada
Capital: Ottawa
Flag: https://flagcdn.com/ca.svg
            
day7task.js:156 Name: Cabo Verde
Capital: Praia
Flag: https://flagcdn.com/cv.svg
            
day7task.js:156 Name: Cayman Islands
Capital: George Town
Flag: https://flagcdn.com/ky.svg
            
day7task.js:156 Name: Central African Republic
Capital: Bangui
Flag: https://flagcdn.com/cf.svg
            
day7task.js:156 Name: Chad
Capital: N'Djamena
Flag: https://flagcdn.com/td.svg
            
day7task.js:156 Name: Chile
Capital: Santiago
Flag: https://flagcdn.com/cl.svg
            
day7task.js:156 Name: China
Capital: Beijing
Flag: https://flagcdn.com/cn.svg
            
day7task.js:156 Name: Christmas Island
Capital: Flying Fish Cove
Flag: https://flagcdn.com/cx.svg
            
day7task.js:156 Name: Cocos (Keeling) Islands
Capital: West Island
Flag: https://flagcdn.com/cc.svg
            
day7task.js:156 Name: Colombia
Capital: Bogotá
Flag: https://flagcdn.com/co.svg
            
day7task.js:156 Name: Comoros
Capital: Moroni
Flag: https://flagcdn.com/km.svg
            
day7task.js:156 Name: Congo
Capital: Brazzaville
Flag: https://flagcdn.com/cg.svg
            
day7task.js:156 Name: Congo (Democratic Republic of the)
Capital: Kinshasa
Flag: https://flagcdn.com/cd.svg
            
day7task.js:156 Name: Cook Islands
Capital: Avarua
Flag: https://flagcdn.com/ck.svg
            
day7task.js:156 Name: Costa Rica
Capital: San José
Flag: https://flagcdn.com/cr.svg
            
day7task.js:156 Name: Croatia
Capital: Zagreb
Flag: https://flagcdn.com/hr.svg
            
day7task.js:156 Name: Cuba
Capital: Havana
Flag: https://flagcdn.com/cu.svg
            
day7task.js:156 Name: Curaçao
Capital: Willemstad
Flag: https://flagcdn.com/cw.svg
            
day7task.js:156 Name: Cyprus
Capital: Nicosia
Flag: https://flagcdn.com/cy.svg
            
day7task.js:156 Name: Czech Republic
Capital: Prague
Flag: https://flagcdn.com/cz.svg
            
day7task.js:156 Name: Denmark
Capital: Copenhagen
Flag: https://flagcdn.com/dk.svg
            
day7task.js:156 Name: Djibouti
Capital: Djibouti
Flag: https://flagcdn.com/dj.svg
            
day7task.js:156 Name: Dominica
Capital: Roseau
Flag: https://flagcdn.com/dm.svg
            
day7task.js:156 Name: Dominican Republic
Capital: Santo Domingo
Flag: https://flagcdn.com/do.svg
            
day7task.js:156 Name: Ecuador
Capital: Quito
Flag: https://flagcdn.com/ec.svg
            
day7task.js:156 Name: Egypt
Capital: Cairo
Flag: https://flagcdn.com/eg.svg
            
day7task.js:156 Name: El Salvador
Capital: San Salvador
Flag: https://flagcdn.com/sv.svg
            
day7task.js:156 Name: Equatorial Guinea
Capital: Malabo
Flag: https://flagcdn.com/gq.svg
            
day7task.js:156 Name: Eritrea
Capital: Asmara
Flag: https://flagcdn.com/er.svg
            
day7task.js:156 Name: Estonia
Capital: Tallinn
Flag: https://flagcdn.com/ee.svg
            
day7task.js:156 Name: Ethiopia
Capital: Addis Ababa
Flag: https://flagcdn.com/et.svg
            
day7task.js:156 Name: Falkland Islands (Malvinas)
Capital: Stanley
Flag: https://flagcdn.com/fk.svg
            
day7task.js:156 Name: Faroe Islands
Capital: Tórshavn
Flag: https://flagcdn.com/fo.svg
            
day7task.js:156 Name: Fiji
Capital: Suva
Flag: https://flagcdn.com/fj.svg
            
day7task.js:156 Name: Finland
Capital: Helsinki
Flag: https://flagcdn.com/fi.svg
            
day7task.js:156 Name: France
Capital: Paris
Flag: https://flagcdn.com/fr.svg
            
day7task.js:156 Name: French Guiana
Capital: Cayenne
Flag: https://flagcdn.com/gf.svg
            
day7task.js:156 Name: French Polynesia
Capital: Papeetē
Flag: https://flagcdn.com/pf.svg
            
day7task.js:156 Name: French Southern Territories
Capital: Port-aux-Français
Flag: https://flagcdn.com/tf.svg
            
day7task.js:156 Name: Gabon
Capital: Libreville
Flag: https://flagcdn.com/ga.svg
            
day7task.js:156 Name: Gambia
Capital: Banjul
Flag: https://flagcdn.com/gm.svg
            
day7task.js:156 Name: Georgia
Capital: Tbilisi
Flag: https://flagcdn.com/ge.svg
            
day7task.js:156 Name: Germany
Capital: Berlin
Flag: https://flagcdn.com/de.svg
            
day7task.js:156 Name: Ghana
Capital: Accra
Flag: https://flagcdn.com/gh.svg
            
day7task.js:156 Name: Gibraltar
Capital: Gibraltar
Flag: https://flagcdn.com/gi.svg
            
day7task.js:156 Name: Greece
Capital: Athens
Flag: https://flagcdn.com/gr.svg
            
day7task.js:156 Name: Greenland
Capital: Nuuk
Flag: https://flagcdn.com/gl.svg
            
day7task.js:156 Name: Grenada
Capital: St. George's
Flag: https://flagcdn.com/gd.svg
            
day7task.js:156 Name: Guadeloupe
Capital: Basse-Terre
Flag: https://flagcdn.com/gp.svg
            
day7task.js:156 Name: Guam
Capital: Hagåtña
Flag: https://flagcdn.com/gu.svg
            
day7task.js:156 Name: Guatemala
Capital: Guatemala City
Flag: https://flagcdn.com/gt.svg
            
day7task.js:156 Name: Guernsey
Capital: St. Peter Port
Flag: https://flagcdn.com/gg.svg
            
day7task.js:156 Name: Guinea
Capital: Conakry
Flag: https://flagcdn.com/gn.svg
            
day7task.js:156 Name: Guinea-Bissau
Capital: Bissau
Flag: https://flagcdn.com/gw.svg
            
day7task.js:156 Name: Guyana
Capital: Georgetown
Flag: https://flagcdn.com/gy.svg
            
day7task.js:156 Name: Haiti
Capital: Port-au-Prince
Flag: https://flagcdn.com/ht.svg
            
day7task.js:156 Name: Heard Island and McDonald Islands
Capital: undefined
Flag: https://flagcdn.com/hm.svg
            
day7task.js:156 Name: Vatican City
Capital: Vatican City
Flag: https://flagcdn.com/va.svg
            
day7task.js:156 Name: Honduras
Capital: Tegucigalpa
Flag: https://flagcdn.com/hn.svg
            
day7task.js:156 Name: Hungary
Capital: Budapest
Flag: https://flagcdn.com/hu.svg
            
day7task.js:156 Name: Hong Kong
Capital: City of Victoria
Flag: https://flagcdn.com/hk.svg
            
day7task.js:156 Name: Iceland
Capital: Reykjavík
Flag: https://flagcdn.com/is.svg
            
day7task.js:156 Name: India
Capital: New Delhi
Flag: https://flagcdn.com/in.svg
            
day7task.js:156 Name: Indonesia
Capital: Jakarta
Flag: https://flagcdn.com/id.svg
            
day7task.js:156 Name: Ivory Coast
Capital: Yamoussoukro
Flag: https://flagcdn.com/ci.svg
            
day7task.js:156 Name: Iran (Islamic Republic of)
Capital: Tehran
Flag: https://flagcdn.com/ir.svg
            
day7task.js:156 Name: Iraq
Capital: Baghdad
Flag: https://flagcdn.com/iq.svg
            
day7task.js:156 Name: Ireland
Capital: Dublin
Flag: https://flagcdn.com/ie.svg
            
day7task.js:156 Name: Isle of Man
Capital: Douglas
Flag: https://flagcdn.com/im.svg
            
day7task.js:156 Name: Israel
Capital: Jerusalem
Flag: https://flagcdn.com/il.svg
            
day7task.js:156 Name: Italy
Capital: Rome
Flag: https://flagcdn.com/it.svg
            
day7task.js:156 Name: Jamaica
Capital: Kingston
Flag: https://flagcdn.com/jm.svg
            
day7task.js:156 Name: Japan
Capital: Tokyo
Flag: https://flagcdn.com/jp.svg
            
day7task.js:156 Name: Jersey
Capital: Saint Helier
Flag: https://flagcdn.com/je.svg
            
day7task.js:156 Name: Jordan
Capital: Amman
Flag: https://flagcdn.com/jo.svg
            
day7task.js:156 Name: Kazakhstan
Capital: Nur-Sultan
Flag: https://flagcdn.com/kz.svg
            
day7task.js:156 Name: Kenya
Capital: Nairobi
Flag: https://flagcdn.com/ke.svg
            
day7task.js:156 Name: Kiribati
Capital: South Tarawa
Flag: https://flagcdn.com/ki.svg
            
day7task.js:156 Name: Kuwait
Capital: Kuwait City
Flag: https://flagcdn.com/kw.svg
            
day7task.js:156 Name: Kyrgyzstan
Capital: Bishkek
Flag: https://flagcdn.com/kg.svg
            
day7task.js:156 Name: Lao People's Democratic Republic
Capital: Vientiane
Flag: https://flagcdn.com/la.svg
            
day7task.js:156 Name: Latvia
Capital: Riga
Flag: https://flagcdn.com/lv.svg
            
day7task.js:156 Name: Lebanon
Capital: Beirut
Flag: https://flagcdn.com/lb.svg
            
day7task.js:156 Name: Lesotho
Capital: Maseru
Flag: https://flagcdn.com/ls.svg
            
day7task.js:156 Name: Liberia
Capital: Monrovia
Flag: https://flagcdn.com/lr.svg
            
day7task.js:156 Name: Libya
Capital: Tripoli
Flag: https://flagcdn.com/ly.svg
            
day7task.js:156 Name: Liechtenstein
Capital: Vaduz
Flag: https://flagcdn.com/li.svg
            
day7task.js:156 Name: Lithuania
Capital: Vilnius
Flag: https://flagcdn.com/lt.svg
            
day7task.js:156 Name: Luxembourg
Capital: Luxembourg
Flag: https://flagcdn.com/lu.svg
            
day7task.js:156 Name: Macao
Capital: undefined
Flag: https://flagcdn.com/mo.svg
            
day7task.js:156 Name: North Macedonia
Capital: Skopje
Flag: https://flagcdn.com/mk.svg
            
day7task.js:156 Name: Madagascar
Capital: Antananarivo
Flag: https://flagcdn.com/mg.svg
            
day7task.js:156 Name: Malawi
Capital: Lilongwe
Flag: https://flagcdn.com/mw.svg
            
day7task.js:156 Name: Malaysia
Capital: Kuala Lumpur
Flag: https://flagcdn.com/my.svg
            
day7task.js:156 Name: Maldives
Capital: Malé
Flag: https://flagcdn.com/mv.svg
            
day7task.js:156 Name: Mali
Capital: Bamako
Flag: https://flagcdn.com/ml.svg
            
day7task.js:156 Name: Malta
Capital: Valletta
Flag: https://flagcdn.com/mt.svg
            
day7task.js:156 Name: Marshall Islands
Capital: Majuro
Flag: https://flagcdn.com/mh.svg
            
day7task.js:156 Name: Martinique
Capital: Fort-de-France
Flag: https://flagcdn.com/mq.svg
            
day7task.js:156 Name: Mauritania
Capital: Nouakchott
Flag: https://flagcdn.com/mr.svg
            
day7task.js:156 Name: Mauritius
Capital: Port Louis
Flag: https://flagcdn.com/mu.svg
            
day7task.js:156 Name: Mayotte
Capital: Mamoudzou
Flag: https://flagcdn.com/yt.svg
            
day7task.js:156 Name: Mexico
Capital: Mexico City
Flag: https://flagcdn.com/mx.svg
            
day7task.js:156 Name: Micronesia (Federated States of)
Capital: Palikir
Flag: https://flagcdn.com/fm.svg
            
day7task.js:156 Name: Moldova (Republic of)
Capital: Chișinău
Flag: https://flagcdn.com/md.svg
            
day7task.js:156 Name: Monaco
Capital: Monaco
Flag: https://flagcdn.com/mc.svg
            
day7task.js:156 Name: Mongolia
Capital: Ulan Bator
Flag: https://flagcdn.com/mn.svg
            
day7task.js:156 Name: Montenegro
Capital: Podgorica
Flag: https://flagcdn.com/me.svg
            
day7task.js:156 Name: Montserrat
Capital: Plymouth
Flag: https://flagcdn.com/ms.svg
            
day7task.js:156 Name: Morocco
Capital: Rabat
Flag: https://flagcdn.com/ma.svg
            
day7task.js:156 Name: Mozambique
Capital: Maputo
Flag: https://flagcdn.com/mz.svg
            
day7task.js:156 Name: Myanmar
Capital: Naypyidaw
Flag: https://flagcdn.com/mm.svg
            
day7task.js:156 Name: Namibia
Capital: Windhoek
Flag: https://flagcdn.com/na.svg
            
day7task.js:156 Name: Nauru
Capital: Yaren
Flag: https://flagcdn.com/nr.svg
            
day7task.js:156 Name: Nepal
Capital: Kathmandu
Flag: https://flagcdn.com/np.svg
            
day7task.js:156 Name: Netherlands
Capital: Amsterdam
Flag: https://flagcdn.com/nl.svg
            
day7task.js:156 Name: New Caledonia
Capital: Nouméa
Flag: https://flagcdn.com/nc.svg
            
day7task.js:156 Name: New Zealand
Capital: Wellington
Flag: https://flagcdn.com/nz.svg
            
day7task.js:156 Name: Nicaragua
Capital: Managua
Flag: https://flagcdn.com/ni.svg
            
day7task.js:156 Name: Niger
Capital: Niamey
Flag: https://flagcdn.com/ne.svg
            
day7task.js:156 Name: Nigeria
Capital: Abuja
Flag: https://flagcdn.com/ng.svg
            
day7task.js:156 Name: Niue
Capital: Alofi
Flag: https://flagcdn.com/nu.svg
            
day7task.js:156 Name: Norfolk Island
Capital: Kingston
Flag: https://flagcdn.com/nf.svg
            
day7task.js:156 Name: Korea (Democratic People's Republic of)
Capital: Pyongyang
Flag: https://flagcdn.com/kp.svg
            
day7task.js:156 Name: Northern Mariana Islands
Capital: Saipan
Flag: https://flagcdn.com/mp.svg
            
day7task.js:156 Name: Norway
Capital: Oslo
Flag: https://flagcdn.com/no.svg
            
day7task.js:156 Name: Oman
Capital: Muscat
Flag: https://flagcdn.com/om.svg
            
day7task.js:156 Name: Pakistan
Capital: Islamabad
Flag: https://flagcdn.com/pk.svg
            
day7task.js:156 Name: Palau
Capital: Ngerulmud
Flag: https://flagcdn.com/pw.svg
            
day7task.js:156 Name: Palestine, State of
Capital: Ramallah
Flag: https://flagcdn.com/ps.svg
            
day7task.js:156 Name: Panama
Capital: Panama City
Flag: https://flagcdn.com/pa.svg
            
day7task.js:156 Name: Papua New Guinea
Capital: Port Moresby
Flag: https://flagcdn.com/pg.svg
            
day7task.js:156 Name: Paraguay
Capital: Asunción
Flag: https://flagcdn.com/py.svg
            
day7task.js:156 Name: Peru
Capital: Lima
Flag: https://flagcdn.com/pe.svg
            
day7task.js:156 Name: Philippines
Capital: Manila
Flag: https://flagcdn.com/ph.svg
            
day7task.js:156 Name: Pitcairn
Capital: Adamstown
Flag: https://flagcdn.com/pn.svg
            
day7task.js:156 Name: Poland
Capital: Warsaw
Flag: https://flagcdn.com/pl.svg
            
day7task.js:156 Name: Portugal
Capital: Lisbon
Flag: https://flagcdn.com/pt.svg
            
day7task.js:156 Name: Puerto Rico
Capital: San Juan
Flag: https://flagcdn.com/pr.svg
            
day7task.js:156 Name: Qatar
Capital: Doha
Flag: https://flagcdn.com/qa.svg
            
day7task.js:156 Name: Republic of Kosovo
Capital: Pristina
Flag: https://flagcdn.com/xk.svg
            
day7task.js:156 Name: Réunion
Capital: Saint-Denis
Flag: https://flagcdn.com/re.svg
            
day7task.js:156 Name: Romania
Capital: Bucharest
Flag: https://flagcdn.com/ro.svg
            
day7task.js:156 Name: Russian Federation
Capital: Moscow
Flag: https://flagcdn.com/ru.svg
            
day7task.js:156 Name: Rwanda
Capital: Kigali
Flag: https://flagcdn.com/rw.svg
            
day7task.js:156 Name: Saint Barthélemy
Capital: Gustavia
Flag: https://flagcdn.com/bl.svg
            
day7task.js:156 Name: Saint Helena, Ascension and Tristan da Cunha
Capital: Jamestown
Flag: https://flagcdn.com/sh.svg
            
day7task.js:156 Name: Saint Kitts and Nevis
Capital: Basseterre
Flag: https://flagcdn.com/kn.svg
            
day7task.js:156 Name: Saint Lucia
Capital: Castries
Flag: https://flagcdn.com/lc.svg
            
day7task.js:156 Name: Saint Martin (French part)
Capital: Marigot
Flag: https://flagcdn.com/mf.svg
            
day7task.js:156 Name: Saint Pierre and Miquelon
Capital: Saint-Pierre
Flag: https://flagcdn.com/pm.svg
            
day7task.js:156 Name: Saint Vincent and the Grenadines
Capital: Kingstown
Flag: https://flagcdn.com/vc.svg
            
day7task.js:156 Name: Samoa
Capital: Apia
Flag: https://flagcdn.com/ws.svg
            
day7task.js:156 Name: San Marino
Capital: City of San Marino
Flag: https://flagcdn.com/sm.svg
            
day7task.js:156 Name: Sao Tome and Principe
Capital: São Tomé
Flag: https://flagcdn.com/st.svg
            
day7task.js:156 Name: Saudi Arabia
Capital: Riyadh
Flag: https://flagcdn.com/sa.svg
            
day7task.js:156 Name: Senegal
Capital: Dakar
Flag: https://flagcdn.com/sn.svg
            
day7task.js:156 Name: Serbia
Capital: Belgrade
Flag: https://flagcdn.com/rs.svg
            
day7task.js:156 Name: Seychelles
Capital: Victoria
Flag: https://flagcdn.com/sc.svg
            
day7task.js:156 Name: Sierra Leone
Capital: Freetown
Flag: https://flagcdn.com/sl.svg
            
day7task.js:156 Name: Singapore
Capital: Singapore
Flag: https://flagcdn.com/sg.svg
            
day7task.js:156 Name: Sint Maarten (Dutch part)
Capital: Philipsburg
Flag: https://flagcdn.com/sx.svg
            
day7task.js:156 Name: Slovakia
Capital: Bratislava
Flag: https://flagcdn.com/sk.svg
            
day7task.js:156 Name: Slovenia
Capital: Ljubljana
Flag: https://flagcdn.com/si.svg
            
day7task.js:156 Name: Solomon Islands
Capital: Honiara
Flag: https://flagcdn.com/sb.svg
            
day7task.js:156 Name: Somalia
Capital: Mogadishu
Flag: https://flagcdn.com/so.svg
            
day7task.js:156 Name: South Africa
Capital: Pretoria
Flag: https://flagcdn.com/za.svg
            
day7task.js:156 Name: South Georgia and the South Sandwich Islands
Capital: King Edward Point
Flag: https://flagcdn.com/gs.svg
            
day7task.js:156 Name: Korea (Republic of)
Capital: Seoul
Flag: https://flagcdn.com/kr.svg
            
day7task.js:156 Name: Spain
Capital: Madrid
Flag: https://flagcdn.com/es.svg
            
day7task.js:156 Name: Sri Lanka
Capital: Sri Jayawardenepura Kotte
Flag: https://flagcdn.com/lk.svg
            
day7task.js:156 Name: Sudan
Capital: Khartoum
Flag: https://flagcdn.com/sd.svg
            
day7task.js:156 Name: South Sudan
Capital: Juba
Flag: https://flagcdn.com/ss.svg
            
day7task.js:156 Name: Suriname
Capital: Paramaribo
Flag: https://flagcdn.com/sr.svg
            
day7task.js:156 Name: Svalbard and Jan Mayen
Capital: Longyearbyen
Flag: https://flagcdn.com/sj.svg
            
day7task.js:156 Name: Swaziland
Capital: Mbabane
Flag: https://flagcdn.com/sz.svg
            
day7task.js:156 Name: Sweden
Capital: Stockholm
Flag: https://flagcdn.com/se.svg
            
day7task.js:156 Name: Switzerland
Capital: Bern
Flag: https://flagcdn.com/ch.svg
            
day7task.js:156 Name: Syrian Arab Republic
Capital: Damascus
Flag: https://flagcdn.com/sy.svg
            
day7task.js:156 Name: Taiwan
Capital: Taipei
Flag: https://flagcdn.com/tw.svg
            
day7task.js:156 Name: Tajikistan
Capital: Dushanbe
Flag: https://flagcdn.com/tj.svg
            
day7task.js:156 Name: Tanzania, United Republic of
Capital: Dodoma
Flag: https://flagcdn.com/tz.svg
            
day7task.js:156 Name: Thailand
Capital: Bangkok
Flag: https://flagcdn.com/th.svg
            
day7task.js:156 Name: Timor-Leste
Capital: Dili
Flag: https://flagcdn.com/tl.svg
            
day7task.js:156 Name: Togo
Capital: Lomé
Flag: https://flagcdn.com/tg.svg
            
day7task.js:156 Name: Tokelau
Capital: Fakaofo
Flag: https://flagcdn.com/tk.svg
            
day7task.js:156 Name: Tonga
Capital: Nuku'alofa
Flag: https://flagcdn.com/to.svg
            
day7task.js:156 Name: Trinidad and Tobago
Capital: Port of Spain
Flag: https://flagcdn.com/tt.svg
            
day7task.js:156 Name: Tunisia
Capital: Tunis
Flag: https://flagcdn.com/tn.svg
            
day7task.js:156 Name: Turkey
Capital: Ankara
Flag: https://flagcdn.com/tr.svg
            
day7task.js:156 Name: Turkmenistan
Capital: Ashgabat
Flag: https://flagcdn.com/tm.svg
            
day7task.js:156 Name: Turks and Caicos Islands
Capital: Cockburn Town
Flag: https://flagcdn.com/tc.svg
            
day7task.js:156 Name: Tuvalu
Capital: Funafuti
Flag: https://flagcdn.com/tv.svg
            
day7task.js:156 Name: Uganda
Capital: Kampala
Flag: https://flagcdn.com/ug.svg
            
day7task.js:156 Name: Ukraine
Capital: Kyiv
Flag: https://flagcdn.com/ua.svg
            
day7task.js:156 Name: United Arab Emirates
Capital: Abu Dhabi
Flag: https://flagcdn.com/ae.svg
            
day7task.js:156 Name: United Kingdom of Great Britain and Northern Ireland
Capital: London
Flag: https://flagcdn.com/gb.svg
            
day7task.js:156 Name: United States of America
Capital: Washington, D.C.
Flag: https://flagcdn.com/us.svg
            
day7task.js:156 Name: Uruguay
Capital: Montevideo
Flag: https://flagcdn.com/uy.svg
            
day7task.js:156 Name: Uzbekistan
Capital: Tashkent
Flag: https://flagcdn.com/uz.svg
            
day7task.js:156 Name: Vanuatu
Capital: Port Vila
Flag: https://flagcdn.com/vu.svg
            
day7task.js:156 Name: Venezuela (Bolivarian Republic of)
Capital: Caracas
Flag: https://flagcdn.com/ve.svg
            
day7task.js:156 Name: Vietnam
Capital: Hanoi
Flag: https://flagcdn.com/vn.svg
            
day7task.js:156 Name: Wallis and Futuna
Capital: Mata-Utu
Flag: https://flagcdn.com/wf.svg
            
day7task.js:156 Name: Western Sahara
Capital: El Aaiún
Flag: https://flagcdn.com/eh.svg
            
day7task.js:156 Name: Yemen
Capital: Sana'a
Flag: https://flagcdn.com/ye.svg
            
day7task.js:156 Name: Zambia
Capital: Lusaka
Flag: https://flagcdn.com/zm.svg
            
day7task.js:156 Name: Zimbabwe
Capital: Harare
Flag: https://flagcdn.com/zw.svg*/

// 4 - Print the total population of countries using reduce function

let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://restcountries.com/v2/all");
xhr4.send();
xhr4.onload = () => {
  let data = JSON.parse(xhr4.response);
  let sumOfPopulation = data.reduce((total, current) => {
    return total + current.population;
  }, 0);
  console.log(sumOfPopulation);
};

/*OUTPUT:
7759438109*/

// 5 -  Print the country which uses US Dollars as currency.

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  let currency = data.filter((data) => {
    for (let key in data.currencies) {
      if (data.currencies[key].code === "USD") {
        return data;
      }
    }
  });
  console.log(currency);
};

/*OUTPUT:
 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
1
: 
{name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
2
: 
{name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
3
: 
{name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
4
: 
{name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
5
: 
{name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
6
: 
{name: 'Ecuador', topLevelDomain: Array(1), alpha2Code: 'EC', alpha3Code: 'ECU', callingCodes: Array(1), …}
7
: 
{name: 'El Salvador', topLevelDomain: Array(1), alpha2Code: 'SV', alpha3Code: 'SLV', callingCodes: Array(1), …}
8
: 
{name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
9
: 
{name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
10
: 
{name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
11
: 
{name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
12
: 
{name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
13
: 
{name: 'Panama', topLevelDomain: Array(1), alpha2Code: 'PA', alpha3Code: 'PAN', callingCodes: Array(1), …}
14
: 
{name: 'Puerto Rico', topLevelDomain: Array(1), alpha2Code: 'PR', alpha3Code: 'PRI', callingCodes: Array(1), …}
15
: 
{name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
16
: 
{name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
17
: 
{name: 'United States of America', topLevelDomain: Array(1), alpha2Code: 'US', alpha3Code: 'USA', callingCodes: Array(1), …}
length
: 
18*/
