import { cars } from './carStore.js';
import { searchCar } from './search.js';
import * as getDisplay  from './getDisplay.js';




document.querySelector('#displayAvgPrice').onclick = () => {getDisplay.displayAveragePrice();}
document.querySelector('#displayMostExpensiveCar').onclick = () => {getDisplay.displayMostExpensiveCar();}
document.querySelector('#displayCheapestCar').onclick = () => {getDisplay.displayCheapestCar();}
document.querySelector('#cancel').onclick = () => {getDisplay.cancel();}
document.querySelector('#searchButton').onclick = () => {searchCar();}
document.querySelector('#button1').onclick = () => {getDisplay.displayDescription(0);}
document.querySelector('#button2').onclick = () => {getDisplay.displayDescription(1);}
document.querySelector('#button3').onclick = () => {getDisplay.displayDescription(2);}
document.querySelector('#button4').onclick = () => {getDisplay.displayDescription(3);}
