import { cars } from './carStore.js';

function searchCar(){
    let inputedPrice = parseInt(document.querySelector('#search').value);
    let stringInput = inputedPrice.toString();
    let searchedcars = [];
    if(isNaN(inputedPrice)){
        alert(`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    }else{
        for(let i = 0; i < cars.length; i++){
            if(inputedPrice >= cars[i].price ){
                searchedcars.push(` სახელი: ${cars[i].manufacturer}, \n მოდელი: ${cars[i].model}, \n ფასი: ${cars[i].price}$ \n \n`);
            }
        }
        if(searchedcars.length > 0){
            alert(`ამ ფასად შეგიძლიათ შეიძინოთ:\n ${searchedcars}`);
        }else{
             alert(`სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა`);
        }
    }
}

export {searchCar}