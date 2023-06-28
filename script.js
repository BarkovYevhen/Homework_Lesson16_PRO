class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Flat {
  residents = [];

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  flats = [];
  maxFlatQuantity;

  constructor(maxFlatQuantity) {
    this.maxFlatQuantity = maxFlatQuantity;
  }

  addFlat(flat) {
    if (this.flats.length < this.maxFlatQuantity) {
      this.flats.push(flat);
    } else {
      console.log("Error! Maximum flats quantity is reached!");
    }
  }
}

const person1 = new Person("John", "male");
const person2 = new Person("Emily", "female");
const person3 = new Person("Michael", "male");
const person4 = new Person("Marry", "female");
const person5 = new Person("Frank", "male");

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);
flat3.addResident(person4);
flat4.addResident(person5);

const building = new Building(3);

building.addFlat(flat1);
building.addFlat(flat2);
building.addFlat(flat3);
building.addFlat(flat4);

console.log(building);
