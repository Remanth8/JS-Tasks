// if(false){
//     console.log("condition is true: if block");
// } else if(true){
//     console.log("cond1 is false & cond2 is true: 1st else if block");
// } else if(false){
//     console.log("cond2 is false & cond3 is true: 2nd else if block");
// }else{
//     console.log("All above conditions are false: else block");
// }

//check given values is positive, negative or zero

// let a = 9
// if(a>0){
//     console.log("print", a, "is a positive"); 
// }
// else if(a<0){
//     console.log("print", a, "is a negative");   
// }
// else if(a==0){
//     console.log("print", a, "is a zero");
    
// }
// else{
//     console.log("Not a number");
    
// }

//check given value is uppercae, lowercase or not a alphabet

// let n = "b"
// if(n>="a" && n<="z"){
//     console.log("given", n, "it is a lowercase");   
// }
// else if(n>="A" && n<="Z"){
//     console.log("given", n, "is a upper");
// }
// else{
//     console.log("its not");
    
// }

//write the code to check the given value is alphabet, digit or symbol 


// let x = "s"
// if(x>=0 && x<=9){
//     console.log("given", x, "is a digit"); 
// }
// else if(x>="A" && x<="Z" || x>="a" && x<="z"){
//     console.log("is a alphabet");
// }
// else{
//     console.log("it is symbol");
    
// }

let marks = 30
if(marks>90){
    console.log("Grade O", marks);
}
else if(marks>70 && marks<=90){
    console.log("Grade A", marks); 
}
else if(marks>50 && marks<=70){
    console.log("grade B", marks);
}
else if(marks>40 && marks<=50){
    console.log("grade C", marks);
}
else if(marks>=36 && marks<=40){
    console.log("grade D", marks)
}
else{
    console.log("Fail");
    
}