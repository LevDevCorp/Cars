import { cars } from './carStore.js';

/*class getDisplay {
	
}*/


//Gamoaqvs sashualo pasi
function displayAveragePrice() {
    let totalPrice;
    for (let i = 0; i < cars.length; i++) {
        totalPrice =+ cars[i].price;
        
    }
    alert(`მანქანების საშუალო ღირებულება არის: ${totalPrice/cars.length}`);
}

// EDZEBS YVELAZE DZVIR MANQANAS
function searchMostExpensiveCar(){
    let maxPrice = 0;
    let max;
    let count = 1;
    for(let i = 0; i<cars.length;i++){
        count++;//aketebs tvlas rata daabrunos max=is mxolod bolos migebuli mnishvneloba

        if(maxPrice < cars[i].price){
            max = cars[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            maxPrice = cars[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs
        }
        if(count===cars.length){
            return max;
        }
        
    }
}

//Gilakis dacherisas amoqmdebs funqcias romelic tovebs mxolod yvelaze dzvirian manqanas
function displayMostExpensiveCar(){
    let mostExpensiveCar = searchMostExpensiveCar().id;
        for(let i = 0; i < cars.length; i++){
            let selectAllCars = document.getElementById(cars[i].id);
            selectAllCars.style.display = "none";
            if(mostExpensiveCar === selectAllCars.id){
                selectAllCars.style.display = "block";
            }
            
        }
}

// EDZEBS YVELAZE Iafasian MANQANAS
function searchCheapestCar(){
    let count = 0;
    let min;
    //shemogvaqvs yvelaze dzviriani manqana rom masze iafiani manqanebis Shedareba
    let minprice = searchMostExpensiveCar().price;
    for(let i = 0; i<cars.length;i++){
        
        count++;//aketebs tvlas rata daabrunos min=is mxolod bolos migebuli mnishvneloba
        if(minprice > cars[i].price){
            min = cars[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            minprice = cars[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs);
        }
        if(count===cars.length){
            return min;
        }
        
    }
}

//GAMOAQVS YVELAZE IAFASIANI MANQANA
function displayCheapestCar(){
    let cheapestCar = searchCheapestCar().id;
    let selectAllCars;
    for(let i = 0; i < cars.length; i++){
        selectAllCars = document.getElementById(cars[i].id);
        selectAllCars.style.display = "none";
        if(cheapestCar === selectAllCars.id){
            selectAllCars.style.display = "block";
        }
    }
}

//Gamoaqvs yvela manqana
function cancel(){
	let selectAllCars;
    for(let i = 0; i < cars.length; i++){
        let selectAllCars = document.getElementById(cars[i].id);
        selectAllCars.style.display = "block";  
    }
}

//gamoqavs manqanis informacia gilakze click-is ganoxorcielebissas
function displayDescription(id){
    alert("Brand: " + cars[id].manufacturer + "\n" +
        "Model: " + cars[id].model + "\n" + 
        "Price: " + cars[id].price + "\n" + 
        "Color: " + cars[id].color + "\n" + 
        "Release: " + cars[id].releaseDate + "\n" + 
        "Horsepower: " + cars[id].horsePower  
    );
}


// gamoaqvs manqanis saxelebi
(function displayCarTitle(){
    for(let i = 0; i < cars.length; i++){
        let imageTitle = document.getElementById(cars[i].id);
        imageTitle.querySelector('p').innerHTML = `${cars[i].manufacturer} | ${cars[i].model}`;
    }   
}())


export {displayAveragePrice, cancel , displayMostExpensiveCar, displayCheapestCar, searchMostExpensiveCar ,searchCheapestCar, displayDescription};