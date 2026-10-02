// let i = 1;
// while(i<=5){
//     console.log(i);
//     i = i + 1
    
// }

// let i = 3;
// while(i<=12){
//     console.log(i);
//     i = i + 3
    
// }
// let i = 10;
// while(i>=1){
//     console.log(i);
//     i = i - 1
    
// }

// let i = 120;
// while(i>=50){
//     console.log(i);
//     i = i - 20
    
// }

//display the digits in given number in reverse order
// let n = 12345
// while(n!=0){
//     let id = n%10
//     console.log("id=", id);

//     n = parseInt(n/10)
    // console.log"(n=", n); 
    
// }
// count = 0
// let n = 12345
// while(n!=0){
//     let id = n%10
//     count = count + 1
//     n = parseInt(n/10)
// }
// console.log(count);


//find the sum of digits  in given number

// let n = 123
// let sum = 0
// while(n!=0){
//     let id = n % 10 //last digit  will print 
//     sum = sum + id
//     n = parseInt(n/10) // remain will be there 
// }
// console.log(sum);

//reverse order
// let n = 54321
// let reverse = 0
// while(n!=0){
//     let ld = n % 10
//     reverse = reverse * 10 + ld
//     n = parseInt(n/10)
// }
// console.log("reverse of given number=", reverse);


//palindrme or not
// let n = 121
// // let new = n;
// let reverse = 0
// while(n!=0){
//     let id = n % 10
//     reverse = reverse * 10 + id
//     n = parseInt(n/10)
// }

// if(reverse==n){
//     console.log("it is a palindrome" ); 
// } else{
//     console.log("it is not");
    
// }

// let n = 256
// while(n!=0){
//     let id = n % 10
//     if(id % 2==0){
//         console.log(id);
        
//     }
//     n = parseInt(n/10)
// }


// count = 0
// let n = 12345
// while(n!=0){
//     let ld = n % 10
//     if(n%2==1)
//     count = count + 1

//     n = parseInt(n/10)

// }
// console.log(count);


// let n = 1234567890
// max = 0
// while(n!=0){
//     let ld = n % 10
//     if(ld>max){
//         max = ld
        
//     }
//     n = parseInt(n/10)
// }
// console.log(max);


let n = 1234567890
min = 9
while(n!=0){
    let ld = n % 10
    if(ld<min){
        min = ld
        
    }
    n = parseInt(n/10)
}
console.log(min);


