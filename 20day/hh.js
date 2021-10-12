

const countries = [
  {
    image: "https://flagpedia.net/data/flags/w580/de.png",
    country: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/au.png",
    country: "Australia",
    population: "91,657,312",
    region: "Aus",
    capital: "Canberra"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/in.png",
    country: "India",
    population: "1,3179,984,812",
    region: "Asia",
    capital: "New Delhi"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/kr.png",
    country: "South Korea",
    population: "40,400,000",
    region: "Asia",
    capital: "Seoul"
  },
  {
    image: "https://flagpedia.net/data/flags/w580/us.png",
    country: "United States of America",
    population: "323,947,000",
    region: "North America",
    capital: "Washington,D.C"
  }
];
  
var x=document.createElement("div");
x.setAttribute("class","container");
document.body.append(x);

for(var i=0;i<countries.length;i++){
var div=document.createElement("div");
var img=document.createElement('img');
img.src=countries[i].image;
div.appendChild(img);
var cou=document.createElement("p");
cou.innerText=countries[i].country;
div.appendChild(cou);
var popu=document.createElement("p");
popu.innerText=`Population: ${countries[i].population}`;
div.appendChild(popu);
var reg=document.createElement("p");
reg.innerText=`Region: ${countries[i].region}`;
div.appendChild(reg);
var cap=document.createElement("p");
cap.innerText=`Capital: ${countries[i].capital}`;
div.appendChild(cap);
document.querySelector(".container").append(div);

}