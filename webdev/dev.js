/*person1 = { // object
    name: "khim",
    age: 25,
    food: "pussy",
    city: "Tokyo",
    shout: () =>{
        console.log(`my name is ${person1.name}`);
    },
    eat: function(){
        console.log(`i am eating ${this.food}`);
    },
}
console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
person1.shout();
person1.eat();*/

/*function Anime(name, type, status){ // constructor
    this.name = name;
    this.type = type;
    this.status = status;
}
let anime1 = new Anime("One Piece", "Shonen", "Ongoing");
let anime2 = new Anime("Naruto", "Shonen", "Completed");
let anime3 = new Anime("Bleach", "Shonen", "Completed");


function showAnime(animes){
    console.log(`Name: ${animes.name}, Type: ${animes.type}, Status: ${animes.status}`);
}
showAnime(anime1);
showAnime(anime2);
showAnime(anime3);*/

/*class Car{

    static numberOfWheels = 4;

    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;   
    }
    display(){
        console.log(`Car: ${this.brand} ${this.model} (${this.year} - ${Car.numberOfWheels} wheels)`);
    } 
}   
        let car1 = new Car ("Toyota", "Corolla", 2020, Car.numberOfWheels);
        let car2 = new Car ("Honda", "Civic", 2019, Car.numberOfWheels);
        let car3 = new Car ("Ford", "Mustang", 2021, Car.numberOfWheels);

        car1.display();
        car2.display();
        car3.display();*/

        /*class Animal{
            constructor(name, species){
                this.name = name;
                this.species = species;
            }
            eat(){
                console.log(`${this.name} is eating.`);
            }
        }
        class Dog extends Animal{
            bark(){
                console.log(`${this.name} says Woof! Woof!`);
            }
        }
        class Cat extends Animal{
            meow(){
                console.log(`${this.name} says Meow! Meow!`);
            }
        }

        let dog1 = new Dog("Buddy", "Dog");
        dog1.eat();
        dog1.bark();
        let cat1 = new Cat("Whiskers", "Cat");
        cat1.eat();*/

/*class Person{
    constructor(name, age, city){ 
        this.name = name;
        this.age = age;
        this.city = city;
    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0){ // setters - make a prperty writable
            this._name = newName;
        }else{
            console.error("Invalid name");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            console.error("Invalid age");
        }
    }
    set city(newCity){
        if(typeof newCity === "string" && newCity.length > 0){
            this._city = newCity;
        }else{
            console.error("Invalid city");
        }
    }

    get name(){
        return this._name;
    } // getters - make a property readable

    get age(){
        return this._age;
    }
    get city(){
        return this._city;
    }

    showInfo(){
        console.log(`Name: ${this._name}, Age: ${this._age}, City: ${this._city}`);
    }
}
let person1 = new Person("khim", 25, "Tokyo");
person1.showInfo();*/

/*class Person{ // nested objects in class
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // Address object
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Ichigo Kurosaki", 17, "123 Main St", "Karakura", "Japan");
console.log(person1);
const person2 = new Person("Naruto Uzumaki", 16, "456 Leaf Village", "Konoha", "Japan");
console.log(person2);
const person3 = new Person("Monkey D. Luffy", 19, "789 Pirate St", "Foosha Village", "Japan");
console.log(person3);*/

/*const people = [{name: "Khim", age: 25, city: "Tokyo"},
                {name: "Sakura", age: 17, city: "Konoha"},
                {name: "Luffy", age: 19, city: "Foosha Village"},
                {name: "Ichigo", age: 17, city: "Karakura"},
                {name: "Goku", age: 30, city: "West City"},
                {name: "Vegeta", age: 32, city: "Saiyan"},
                {name: "Naruto", age: 16, city: "Konoha"},
                {name: "Hinata", age: 16, city: "Konoha"},
                {name: "Sasuke", age: 17, city: "Konoha"},
                {name: "Kakashi", age: 30, city: "Konoha"},
                {name: "Zoro", age: 21, city: "Shimotsuki Village"},
                {name: "Nami", age: 20, city: "Cocoyasi Village"},
                {name: "Usopp", age: 19, city: "Syrup Village"},
                {name: "Sanji", age: 21, city: "Baratie"},
                {name: "Chopper", age: 17, city: "Drum Island"},
                {name: "Robin", age: 30, city: "Ohara"},
                {name: "Franky", age: 36, city: "Water 7"},
                {name: "Brook", age: 90, city: "West Blue"},
                {name: "Jinbe", age: 44, city: "Fishman Island"},
                {name: "Trafalgar Law", age: 26, city: "Flevance"},
                {name: "Eustass Kid", age: 22, city: "South Blue"},
                {name: "Killer", age: 22, city: "South Blue"},
                {name: "Boa Hancock", age: 31, city: "Amazon Lily"},];


people.sort((a, b) => a.age - b.age);  // sorting by age(number)
people.sort((a,b) => a.name.localeCompare(b.name)); // sorting by name(string)
console.log(people);*/

function createGame(){ // closure
    let score = 0;

    function incrementScore(points){
        score += points;
        console.log(`Score: +${score}`);
    }
    function resetScore(points){
        score = 0;
        console.log(`Score reset to ${score}`);
    }
    function decrementScore(points){
        score -= points;
        console.log(`Score: -${score}`);
    }
    function getScore(){
        return score;
    }
    return{
        incrementScore,
        resetScore,
        decrementScore,
        getScore
    }
}
const game = createGame();
game.incrementScore(10);
game.incrementScore(10);
game.decrementScore(10);
game.resetScore();
console.log(`Final Score: ${game.getScore()}`);






 