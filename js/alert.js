let myCar = {
    id: "bmw",
    car: "bmw",
    model: "F94",
    color: "BLACK",
    date: "2016",
    horsepower: "400",
    price: 11000
}

let myCar2 = {
    id: "mercedes",
    car: "MERCEDES",
    model: "G",
    color: "BLACK",
    date: "2015",
    horsepower: "320",
    price: 18000
}

let myCar3 = {
    id: "audi",
    car: "AUDI",
    model: "TT",
    color: "GREY",
    date: "2018",
    horsepower: "280",
    price: 10000
}

let myCar4 = {
    id: "toyota",
    car: "TOYOTA",
    model: "PRADO",
    color: "white",
    date: "2013",
    horsepower: "240",
    price: 5000
}

let loveCar = []

loveCar.push(myCar);
loveCar.push(myCar2);
loveCar.push(myCar3);
loveCar.push(myCar4);


//gamoaqvs informacia manqanaze gilakis daklikvisas
function displayDescription(carid){
    let foundCar = findCarById(carid);
    let description = getDescription(foundCar);
    alert(description);
}


//edzebs manqanis monacemebs mocemuli id-is mixedvit
function findCarById(carid){
   for(i=0; i<loveCar.length; i++) {
       if(loveCar[i].id === carid) {
           return loveCar[i];
       }
   }
}

//aformatebs da ekranze gamoaqvs agebuli infromaciebi
function getDescription(myCar){
    return  `ამ მანქანას აქვს შენდეგი მახასიათებლები: \n car: ${myCar.car}, \n color: ${myCar.color}, \n model: ${myCar.model}, \n date: ${myCar.date}, \n horsePower: ${myCar.horsepower}, \n price: ${myCar.price}`
}

function giveAlert(){
    let input = parseInt(document.querySelector('#search').value);
    let stringInput = input.toString();
    let searchedloveCar = [];
    if(stringInput === "NaN"){
        alert(`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    }else{
        searchedloveCar = [];
        disableExpenciveCars(input, loveCar);
        for(let i = 0; i < loveCar.length; i++){
            if(input >= loveCar[i].price ){
                searchedloveCar.push(`\n \n ამ ${input} ფასად შეგიძლიათ შეიძინოთ: \n სახელი: ${loveCar[i].car}, \n მოდელი: ${loveCar[i].model}, \n ფასი: ${loveCar[i].price}$`);
            }
        }
        if(searchedloveCar.length > 0){
            alert(searchedloveCar);
        }else{
             alert(`სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა`);
        }
    }
}



function disableExpenciveCars(price, loveCar) {
    let expenciveCars =[]
        for(let i = 0; i < loveCar.length; i++) {
            if(loveCar[i].price > price) {
                expenciveCars.push(loveCar[i]);
            }

        for(let i = 0; i < expenciveCars.length; i++) {   
           let currentElement  = document.getElementById(expenciveCars[i].id);
           currentElement.querySelector(".button2").setAttribute("disabled", true);
        }
    }
}

let maxprice = 0;

// EDZEBS YVELAZE DZVIR MANQANAS
function searchMostExpensiveCar(){
    let count = 1;
    for(let i = 0; i<loveCar.length;i++){
        count++;//aketebs tvlas rata daabrunos max=is mxolod bolos migebuli mnishvneloba

        if(maxprice < loveCar[i].price){
            max = loveCar[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            maxprice = loveCar[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs
        }
        if(count===loveCar.length){
            return max;
        }
        
    }
}



//Gilakis dacherisas amoqmdebs funqcias romelic tovebs mxolod yvelaze dzvirian manqanas
function displayMostExpensiveCar(){
    let mostexpensivecar = searchMostExpensiveCar().id;
        for(i = 0; i < loveCar.length; i++){
            let SelectAllCars = document.getElementById(loveCar[i].id);
            SelectAllCars.style.display = "none";
            if(mostexpensivecar === SelectAllCars.id){
                SelectAllCars.style.display = "block";
            }
            
        }
}
// disable();




// EDZEBS YVELAZE Iafasian MANQANAS

function searchCheapestCar(){
    let count = 0;
    //shemogvaqvs yvelaze dzviriani manqana rom masze iafiani manqanebis Shedareba
    let minprice = searchMostExpensiveCar().price;
    for(let i = 0; i<loveCar.length;i++){
        
        count++;//aketebs tvlas rata daabrunos min=is mxolod bolos migebuli mnishvneloba
        if(minprice > loveCar[i].price){
            min = loveCar[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            minprice = loveCar[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs);
        }
        if(count===loveCar.length){
            return min;
        }
        
    }
}

//GAMOAQVS YVELAZE IAFASIANI MANQANA
function displayCheapestCar(){
    let cheapestcar = searchCheapestCar().id;
    for(i = 0; i < loveCar.length; i++){
        let SelectAllCars = document.getElementById(loveCar[i].id);
        SelectAllCars.style.display = "none";
        if(cheapestcar === SelectAllCars.id){
            SelectAllCars.style.display = "block";
        }
        
    }
}


//Gamoaqvs yvela manqana
function cancel(){
    for(i = 0; i < loveCar.length; i++){
        let SelectAllCars = document.getElementById(loveCar[i].id);
        SelectAllCars.style.display = "block";

        
    }
}

//Gamoaqvs sashualo pasi

function getAlertAboutAveragePrice() {
    let totalPrice;
    for (let i = 0; i < loveCar.length; i++) {
        totalPrice =+ loveCar[i].price;
        
    }
    alert(`მანქანების საშუალო ღირებულება არის: ${totalPrice/loveCar.length}`);
}

// Image Title

for(let i = 0; i < loveCar.length; i++){
    let imageTitle = document.getElementById(loveCar[i].id);
    imageTitle.querySelector('p').innerHTML = `${loveCar[i].car} | ${loveCar[i].model}`;
}