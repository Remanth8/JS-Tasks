// for(let i=100000; i<=200000; i = i+ 10000){
//     console.log(i);
    
// }

// for (let i =1; i<=10; i=i+1){
//     console.log(i*i);
    
// }

// for(let i =1; i<=10; i = i + 1){
//     console.log(i**3);
    
// }

// for(let i = 500000; i>=400000; i = i -50000){
//     console.log(i);
    
// }

// for (let i =2.5; i>=0; i = i - 0.5){
//     console.log(i);
    
// }

// for (let i =1; i<=5; i = i+1){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }


// for(let i = 10; i>=5; i=i-1){
//     if(i%2!=0){
//         console.log(i);
        
//     }
// }

// for (let i= 10; i<=15; i=i+1){
//     if(i%5==0){
//         console.log(i);
        
//     }
// }
// sum = 0
// for(let i =1; i<=5; i=i+1){
//     if(i%2==0){
//         sum = sum + i
        
//     }
// }
// console.log(sum);

// sum = 0
// for(let i = 10; i<=20; i = i +1){
//     if(i%4==0){
//         sum = sum + i
//     }
// }
// console.log(sum);

//count the odd numbers range 3 to 5
// count = 0
// for(let i= 1; i<=5; i = i+1){
//     if(i%2!=0){
//         count = count + 1
//     }
// }
// console.log("the count of 3 & 5", count)

//count factors of 6

// let sum = 0
// let n = 13
// for(let i =1; i<=n; i = i=i+1){
//     if(n%i==0){
//         sum  = sum + i
        
//     }
// }
// console.log(sum);

// if(count==2){
//     console.log("it is a prime number"); 
// }
// else{
//     console.log("it is not a prime");
    
// }

//perfect number-------
let sum = 0
let n = 7
for(let i = 1; i<n; i=i+1){
    if(n%i==0){
        sum = sum + i
    }
}
console.log("sum=", sum);
if(sum==n){
    console.log(sum, "it is a perfect number");
    
}
else{
    console.log(sum, "it is not a perfect number");
    
}