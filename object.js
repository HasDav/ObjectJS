let city = {
name: "Gyumri",
climate:  "humid continental climate ",
religion: "Armenian Apostolic Church",  

coatofarmsFlag:{

    color: " white with a gold frame with red cross", 
    year: 2001,
},
cityHistory: { 
    ancientArmenianKingdom: 
    "the area of modern-day Gyumri has been populated since at least the third millennium BC."
  
},

geography: {
   location:"126 kilometres (78 miles) north of the capital Yerevan ",
   level: "It has an approximate height of 1,550 metres  ",
},

   museumsAndart: [
    {name: "Sergey Merkurov"},
    {name: "Avetik Isahakyan "},
    {name: "Hovhannes Shiraz "},
    {name: "Frunzik Mkrtchyan "},
    {name: "Gallery of Mariam and Eranuhi Aslamazyan Sisters"},
    {name: "Dzitoghtsyan Museum of National Architecture "},
],

monuments:[{
  name: "Kumayri historic district",
  bildings:"  It has more than a thousand buildings dating back to the 19th and 20th centuries",
},
 { 
  name: "Sev Berd ",
  history: " was built in response to the Russo-Turkish War of 1828–1829. It is a national cultural heritage monument in Armenia"

},
{
  name: "Mother Armenia",
  history: "The monumental statue of Mother Armenia erected in 1975.",
},
{
  name: "Vartanants Square",
},
{
  name: " Independence Square.",
},
{
  name: "Charles Aznavour Square.",
},
{
  name: " Statue of Avetik Isahakyan ",
},
],
media: [{
  name: "Tsayg TV",
  operatingYear:  1991,
},
{
  name:  "Shirak Public TV ",
  operatingYear: 1992,
},
{
  name: "Gala TV ",
  operatingYear:  2005,

},
{
  name: "Shant ",
  operatingYear:  1994,
}
],

};


function makeCity(name,climate,religion,coatofarmsFlag, cityHistory, geography,museumsAndart,monuments,media) {
         return{
          name,
          climate,
          religion,
          coatofarmsFlag,
          cityHistory,
          geography,
          museumsAndart,
          monuments,
          media,
         }
};
function makeClimate(climate) {
    return {climate
    }
};
function makeReligion(religion ) {
  return {
    religion
  }
  
};
function makecityHistory(ancientArmenianKingdom) {
    return{
       ancientArmenianKingdom 
    }
};
function makeCoatofarmsFlag (color,year) {
      return {
        color,
         year,
      }
};
function  makeMuseumsAndart(name) {
   return{
    name
   }
};
function makeMonuments(name,buildings,history) {
  return{
    name,
    buildings,
    history,
  }
  
};
function makeMedia(name,operatingYear, ) {
    return{
      name,
      operatingYear,
    }
};

  function makeGeography(location,level,) {
          return{
            location,
            level,
          }
    
  };
  let climate=makeClimate("humid continental climate");
  let religion=makeReligion("Armenian Apostolic Church");
let color=makeCoatofarmsFlag( " white with a gold frame with red cross");
let year=makeCoatofarmsFlag(2001);
let coatofarmsFlag=makeCoatofarmsFlag("white with a gold frame with red cross", 2001,);
let cityHistory=makecityHistory("the area of modern-day Gyumri has been populated since at least the third millennium BC");

let museumsAndart= makeMuseumsAndart(["Sergey Merkurov",
"Avetik Isahakyan ",
 "Hovhannes Shiraz ",
"Frunzik Mkrtchyan ",
"Gallery of Mariam and Eranuhi Aslamazyan Sisters",
"Dzitoghtsyan Museum of National Architecture "] );

 let bildings=makeMonuments("It has more than a thousand buildings dating back to the 19th and 20th centuries");
 let history =makeMonuments("was built in response to the Russo-Turkish War of 1828–1829. It is a national cultural heritage monument in Armenia");

 let monuments= makeMonuments(["Kumayri historic district","Sev Berd ","Mother Armenia","Vartanants Square"," Independence Square","Charles Aznavour Square", 
 "Statue of Avetik Isahakyan",],"It has more than a thousand buildings dating back to the 19th and 20th centuries","was built in response to the Russo-Turkish War of 1828–1829. It is a national cultural heritage monument in Armenia");

 let media= makeMedia( ["Tsayg TV","Shirak Public TV ","Gala TV ","Shant"],[1991, 1992,2005,1994]);


let geography= makeGeography( "126 kilometres (78 miles) north of the capital Yerevan ","It has an approximate height of 1,550 metres",);

let gyumriCity=makeCity(
  "Gyumri",
  climate,
  religion,
  coatofarmsFlag,
  cityHistory,
   geography,
   museumsAndart,
   monuments,
   media,
);


console.log(gyumriCity);