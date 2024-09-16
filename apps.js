// const student={
//     fullName:"pramila dulal",
//     marks:98.3,
//     printMarks:function(){
// console.log("marks=" ,this.marks);
//     },
// };
const employee={
    calcTax(){
        console.log("The tax rate is 10%");
    }
};
karanArjun={
    salary:3000,
};
karanArjun.__proto__ = employee;
