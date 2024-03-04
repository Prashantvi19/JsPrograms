// create class using declared method
class Newclass {
    constructor(name,loction,department){
        this.name = name;
        this.loction = loction;
        this.department = department;
    }
}

const  obje34= new Newclass('Prashant Vishwakarma', 'Indore', 'derpartment');
// console.log(obje34);

// create class usig expressions method
const Newclass2 = class{
// const Newclass2 = class NewClassx{
constructor(name,location,department){
    this.name = name;
        this.location = location;
        this.department = department;
    }
};

// create Object
const obje6 = new Newclass2('Prashant Vishwakarma','Indore','Software Engineer');

// console.log(obje6.name);

// get and set function js
const Newclassx = class NewClassy{
    constructor(name,location,department,salary){
        this.name = name;
            this.location = location;
            this.department = department;
            this.salary =salary;
            this.arrowfun = this.getUser( this.salary);
            this.getData = this.getUserData();
            
        }
        get getName(){
            return this.name;
        };
        set setName(name){
            this.name= name;
        };
      getUser=e=>e*2/100;
      getUserData = ()=>{
        return [this.name, this.location, this.department];
      }

    };
    const obje7 = new Newclassx('Prashant Vishwakarma','Indore','Software Engineer',6000);

    // console.log(obje7.getName);
    obje7.setName = 'Er.Prashant Vishwakarma';
    // console.log(obje7.getName);   
    // console.log(obje7.arrowfun);   
    // console.log(obje7.getData);  
    

// ----------------------------------------------------------------
// Array
   // Array Concatenation of tow array

   let arrayx = [1, 2,3,4,5,6,7,8,9,10,11,12];
   const arrayConcat=[13,14 ,15,16,17,18,];

 // concat arrays

 var arrayy = [...arrayx,...arrayConcat];
//   arrayy = arrayx.concat(arrayConcat);
// console.log(arrayy);

//slice arrays
 var arrayz = arrayy.slice(12, arrayy.length);
let arrayw = arrayy.slice(4,8);
let arrayv = arrayy.slice(5);
//for Each methods
// arrayy.forEach((k,i)=>console.log(i+":"+k));
// join the array using join method
arrayv = arrayy.join();
//  console.log(arrayv);
//  console.log(arrayy.join(""));

//split method 
// arrayy = arrayv.split();
arrayy = arrayv.split(',');
// console.log(arrayy);
// find function used
// console.log(arrayy.find((e)=>e>1));
// fillter
// console.log(arrayy.filter((e)=>(e>8&&e<15)));


// Map method for arrays

arrayy.map(e=>{
    // "<h1>${e}</h1>"
    let listItem = document.createElement('li');
    listItem.textContent = e;
    // list.appendChild(listItem);
});

// push value into the array
arrayy.push('19','20','20','20','20','20','20','20','20');
// console.log(arrayy.push('19','20'));// return only last entry

// console.log(arrayy);

//pop value from the array
// arrayy.pop();
// console.log(arrayy)
// console.log(arrayy.pop())
// console.log(arrayy)

// Unshift value (inset array in first )
// console.log(arrayy)
arrayy.unshift(0);
// console.log(arrayy)
// console.log(arrayy.unshift(0))
// console.log(arrayy)

//remove 1st element from array using shift method
// console.log(arrayy)
// arrayy.shift();
// console.log(arrayy.shift())
// console.log(arrayy)

// find first element occupancy index in array
// console.log(arrayy.indexOf('20',21))
// find last element occupancy index in array
console.log(arrayy.lastIndexOf('20'));
// console.log(arrayy.lastIndexOf('20',21));