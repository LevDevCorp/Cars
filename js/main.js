import { cars } from './carStore.js';
import { searchCar } from './search.js';
import * as getDisplay  from './getDisplay.js';


//gamoaqvs informacia manqanaze gilakis daklikvisas
function displayDescription(carid){
    let foundCar = findCarById(carid);
    let description = getDescription(foundCar);
    alert(description);
}

//edzebs manqanis monacemebs mocemuli id-is mixedvit
function findCarById(carid){
   for(i=0; i<cars.length; i++) {
       if(cars[i].id === carid) {
           return cars[i];
       }
   }
}

//aformatebs da ekranze gamoaqvs agebuli infromaciebi
function getDescription(car){
    return  `ამ მანქანას აქვს შენდეგი მახასიათებლები: 
     car: ${car.manufacturer}, 
     color: ${car.color}, 
     model: ${car.model}, 
     date: ${car.date}, 
     horsePower: ${car.horsePower}, 
     price: ${car.price}`
}









document.querySelector('#displayAvgPrice').onclick = () => {getDisplay.displayAveragePrice();}
document.querySelector('#displayMostExpensiveCar').onclick = () => {getDisplay.displayMostExpensiveCar();}
document.querySelector('#displayCheapestCar').onclick = () => {getDisplay.displayCheapestCar();}
document.querySelector('#cancel').onclick = () => {getDisplay.cancel();}
document.querySelector('#searchButton').onclick = () => {searchCar();}
