class Car {
    constructor(id, manufacturer , model , color , releaseDate , horsePower , price){
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.releaseDate = releaseDate;
        this.horsePower = horsePower;
        this.price = price;     
    }
    printPrice() {
        console.log(`price of this car is ${this.price}$`);
    }
    printTitle(){
        console.log(`Title of this car is $(this.manufacturer)$`);        
    }
}

const toyota = new Car("toyota","Toyota","Prado","white","2013","240",5000);
const audi = new Car("audi","Audi","TT","Grey","2018","280",10000);
const mercedes = new Car("mercedes","Mercedes","G Class","Black","2015","320",18000);
const bmw = new Car("bmw","BMW","F94","Black","2016","400",11000);

let cars = [bmw,mercedes,audi,toyota];
export { cars,toyota ,audi ,mercedes,bmw }

