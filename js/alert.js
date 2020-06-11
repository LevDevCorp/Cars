class Car {
    constructor(id, manufacturer , model , color , date , horsePower , price){
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.date = date;
        this.horsePower = horsePower;
        this.price = price;     
    }
    printPrice() {
        console.log('price of this car is ${this.price}$');
    }
    printTitle(){
        console.log('Title of this car is $(this.manufacturer)$');        
    }
}

const toyota = new Car("toyota","Toyota","Prado","white","2013","240",5000);
const audi = new Car("audi","Audi","TT","Grey","2018","280",10000);
const mercedes = new Car("mercedes","Mercedes","G Class","Black","2015","320",18000);
const bmw = new Car("bmw","BMW","F94","Black","2016","400",11000);

let cars = [toyota,audi,bmw,mercedes];

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

function giveAlert(){
    let input = parseInt(document.querySelector('#search').value);
    let stringInput = input.toString();
    let searchedcars = [];
    if(isNaN(inputedprice)){
        alert(`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    }else{
        searchedcars = [];
        disableExpenciveCars(input, cars);
        for(let i = 0; i < cars.length; i++){
            if(input >= cars[i].price ){
                searchedcars.push(`\n \n ამ ${input} ფასად შეგიძლიათ შეიძინოთ: \n სახელი: ${cars[i].manufacturer}, \n მოდელი: ${cars[i].model}, \n ფასი: ${cars[i].price}$`);
            }
        }
        if(searchedcars.length > 0){
            alert(searchedcars);
        }else{
             alert(`სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა`);
        }
    }
}


// EDZEBS YVELAZE DZVIR MANQANAS
function searchMostExpensiveCar(){
    let maxprice = 0;
    let count = 1;
    for(let i = 0; i<cars.length;i++){
        count++;//aketebs tvlas rata daabrunos max=is mxolod bolos migebuli mnishvneloba

        if(maxprice < cars[i].price){
            max = cars[i];//anichebs yvelaze dzviriani manqanis obieqts max-s
            maxprice = cars[i].price;//anichebs fas cvlads rata sheadaros momdevno manqanis fasebs
        }
        if(count===cars.length){
            return max;
        }
        
    }
}


//Gilakis dacherisas amoqmdebs funqcias romelic tovebs mxolod yvelaze dzvirian manqanas
function displayMostExpensiveCar(){
    let mostexpensivecar = searchMostExpensiveCar().id;
        for(i = 0; i < cars.length; i++){
            let SelectAllCars = document.getElementById(cars[i].id);
            SelectAllCars.style.display = "none";
            if(mostexpensivecar === SelectAllCars.id){
                SelectAllCars.style.display = "block";
            }
            
        }
}

// EDZEBS YVELAZE Iafasian MANQANAS
function searchCheapestCar(){
    let count = 0;
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
    let cheapestcar = searchCheapestCar().id;
    for(i = 0; i < cars.length; i++){
        let SelectAllCars = document.getElementById(cars[i].id);
        SelectAllCars.style.display = "none";
        if(cheapestcar === SelectAllCars.id){
            SelectAllCars.style.display = "block";
        }
        
    }
}


//Gamoaqvs yvela manqana
function cancel(){
    for(i = 0; i < cars.length; i++){
        let SelectAllCars = document.getElementById(cars[i].id);
        SelectAllCars.style.display = "block";

        
    }
}

//Gamoaqvs sashualo pasi

function getAlertAboutAveragePrice() {
    let totalPrice;
    for (let i = 0; i < cars.length; i++) {
        totalPrice =+ cars[i].price;
        
    }
    alert(`მანქანების საშუალო ღირებულება არის: ${totalPrice/cars.length}`);
}

// Image Title

for(let i = 0; i < cars.length; i++){
    let imageTitle = document.getElementById(cars[i].id);
    imageTitle.querySelector('p').innerHTML = `${cars[i].manufacturer} | ${cars[i].model}`;
}