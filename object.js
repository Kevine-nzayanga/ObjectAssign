// Given an array of objects, each object representing a person with a name 
// and age property, write a function that returns a new array containing the names
//  of all people who are 18 years old or older.

const details=[
    {names:"jean", age:23},
    {names:"Willy", age:27},
    {names:"Mark", age: 12}
]

function giveme(details) {
    let adult=[]
    details.forEach(detail => {
        if (detail.age >18) {
            adult.push(detail.names)
        }
    });
    console.log(adult);
}
giveme(details)

// Write a function that takes an array of objects, where each object represents 
// a product with a name, price, and category property. The function should return 
// an object that groups the products by their categories, with the category names 
// as keys and the arrays of products as values.
let products= [
{names:"Soap", price:100, category:"washing"},
{names:"Oil", price:500, category:"Cooking"},
{names:"Omo", price:20, category:"washing"},
{names:"Salt", price:15, category:"Cooking"},
]
const groupProduct=products.reduce((group,arr)=>{
    const{category}=arr;
    group[category]=group[category]??[];
    group[category].push(arr);
    return group;
  })
  console.log(groupProduct)


// 3. Given an array of objects, where each object represents a student with a 
// name and an array of scores, write a function that returns a new array containing 
// the names of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [190, 180, 185] },
  { name: 'Jane', scores: [95, 92, 188] },
  { name: 'Jim', scores: [170, 180, 175] },
  { name: 'Jill', scores: [185, 90, 84] },
];

function averageScore(){
    let avgScore=[]
    for(let i=0;i<students.length;i++){
      let average=students[i].scores.reduce((total,next)=> ((total+next) /students[i].scores.length));
      if(average>=85){
        avgScore.push(students[i].name)
      }
    }

     return avgScore
}

console.log( averageScore());

// 4. Given an object representing a car, with properties for the make, model, year, 
// and a method to display the car's information, write a function that takes the car
//  object and adds a new method to the object called age. The age method should return 
// the current age of the car based on the current year and the car's year property.
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };

  function adding(car) {
    car.age=2
    console.log(car);
  }
  adding(car)