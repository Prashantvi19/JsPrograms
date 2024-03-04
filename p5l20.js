// primitive datatype
let number = 10;
//pass by value
let number2 = number;
number = 12;

// console.log(number, number2);

// Reference datatype
let obje ={
    number: 13
};

// pass by reference
let obje2=obje;
obje2.number=14;

// console.log(obje, obje2);

// pass by value in object to anathr object
const obje3 = {...obje}
obje.number=16;
// console.log(obje3, obje);

//pass by  value in object to anathr object by method
const obje5=Object.assign({},obje);
obje.number=5;
// console.log(obje5, obje);

