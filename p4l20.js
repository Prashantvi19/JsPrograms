// object exrecise 
const object = {
    name :"Prashant Vishwakarma",
    description: "Full stack developer",
    location: "Secrete",
    skills:{
        programming: "java",
        scripting: "js frontEnd and php backEnd"
    },

    printFun(){
        console.log(this.skills);
    }
};
// access object
// console.log(object);
// object.printFun();

// dynamic object featurses

object.salary=60000;
// console.log(object.salary);
// ----------------------------------------------------------------
// factory object




function factoryObject() {

    const facFunction = {
        name :"Prashant Vishwakarma",
    description: "Full stack developer",
    location: "Secrete",
    skills:{
        programming: "java",
        scripting: "js frontEnd and php backEnd  in well knowledge"
    },

    printFun(name){
        console.log(this.skills,name);
    }
    }

    // return facFunction;
    return{
        name :"Prashant Vishwakarma",
    description: "Full stack developer",
    location: "Secrete",
    skills:{
        programming: "java",
        scripting: "js frontEnd and php backEnd  in well knowledge"
    },

    printFun(name){
        console.log(this.skills,name);
    }
    }
    
};

// create object/ allocation of memory objects

const factObje = factoryObject();

// access object
// console.log(factObje);
// factObje.printFun("Prashant Vishwakarma");

// dynamic object featurses
// factObje.salary=666000;
// console.log(factObje.salary);

// object method Comstructor Function 

function ComstructorObj(name, description,location) {
   
        this.name =name,
        this.description= description,
        this.location= location,
       this.skills = {
            programming : 'java',
            scripting :'js'
    },
    // function ComstructorObj(name , description,location) {
   
    //     this.name ="Prashant Vishwakarma",
    //     this.description= "Full stack developer",
    //     this.location= "Secrete",
    //    function Skills(programming,scripting) {
    //         programming = "java",
    //         scripting ="js frontEnd and php backEnd  in well knowledge"
    // },

    this.printFun=function(){
        console.log(this.name);
        return this.skills;
    }
    }

    // create Object Memory allocation
    const ConstructorObje = new ComstructorObj('Prashant Vishwakarma', 'Fullstack developer', 'Out of indore');

    // access Object property

// console.log(ConstructorObje);
// console.log(ConstructorObje.printFun());
// dynamic object featurses
// ConstructorObje.salary = 666000;
// console.log(ConstructorObje.salary);

// delete propertry

// console.log(ConstructorObje.salary);
// delete ConstructorObje.salary;
// console.log(ConstructorObje.salary);

// dynamic fuonction create
ConstructorObje.salary = (salary , GST)=>{
console.log('Salary '+salary, "After GST "+ (salary-(salary*GST/100)));    
}
// ConstructorObje.salary(3000,2);

// delete ConstructorObje.salary;
// console.log(ConstructorObje.salary);

// Any code and keyword arguments js takes as a object so find its own constructor with this methods

// console.log(ConstructorObje.constructor);

// the js run time code convert such that changes to the constructor
// const insideCode = new Function('name','description' ,'location',`
   
//     this.name =name,
//     this.description= description,
//     this.location= location,
//    this.skills = {
//         programming : 'java',
//         scripting :'js'
// },

// this.printFun=function(){
//     console.log(this.name);
//     return this.skills;
// }
// `);

// const objeFun = insideCode('Prashant Vishwakarma', 'Fullstack developer', 'Out of indore');
// const objeFun = insideCode();
// const sum = new Function('a', 'b', 'return a + b');

// console.log(sum("Prashant ","Vishwakarma"));
// Expected output: 8
    // access Object property

// console.log(objeFun);
// console.log(insideCode());
// console.log(ConstructorObje.printFun());
// dynamic object featurses
// ConstructorObje.salary = 666000;
// console.log(ConstructorObje.salary);

// delete propertry

// console.log(ConstructorObje.salary);
// delete ConstructorObje.salary;
// console.log(ConstructorObje.salary);

// dynamic fuonction create

// ConstructorObje.salary(3000,2);

// delete ConstructorObje.salary;
// console.log(ConstructorObje.salary);
