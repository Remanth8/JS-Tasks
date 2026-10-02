// Check Positive or Negative
// 1. Without Input + Without Return
class Task1 {
    static checkNumber() {
        let num = -10;

        if (num >= 0) {
            console.log(`${num} is a positive number`);
        } else {
            console.log(`${num} is a negative number`);
        }
    }
}
Task1.checkNumber();

// 2. Check Divisible by 5
class Task2 {
    static checkDivisible() {
        let num = 25;

        if (num % 5 == 0) {
            console.log(`${num} is divisible by 5`);
        } else {
            console.log(`${num} is not divisible by 5`);
        }
    }
}

Task2.checkDivisible();

// With Input + Without Return
// 3. Check Divisible by Both 3 and 5
class Task3 {
    static checkDivisible(num) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log(`${num} is divisible by both 3 and 5`);
        } else {
            console.log(`${num} is not divisible by both 3 and 5`);
        }
    }
}

Task3.checkDivisible(30);
// 4. Check Multiple of 10
class Task4 {
    static checkMultiple(num) {
        if (num % 10 == 0) {
            console.log(`${num} is a multiple of 10`);
        } else {
            console.log(`${num} is not a multiple of 10`);
        }
    }
}

Task4.checkMultiple(40);

// 3. Without Input + With Return
// 5. Check Last Digit is 0
class Task5 {
    static checkLastDigit() {
        let num = 120;
        let digit = num % 10;

        if (digit == 0) {
            return `The last digit of ${num} is 0`;
        } else {
            return `The last digit of ${num} is not 0`;
        }
    }
}

console.log(Task5.checkLastDigit());

// 6. Check Last Digit Greater Than 5
class Task6 {
    static checkLastDigit() {
        let num = 128;
        let digit = num % 10;

        if (digit > 5) {
            return `The last digit ${digit} is greater than 5`;
        } else {
            return `The last digit ${digit} is not greater than 5`;
        }
    }
}

console.log(Task6.checkLastDigit());

// 4. With Input + With Return
// 7. Check Two Numbers are Equal
class Task7 {
    static checkEqual(a, b) {
        if (a == b) {
            return `${a} and ${b} are equal`;
        } else {
            return `${a} and ${b} are not equal`;
        }
    }
}

console.log(Task7.checkEqual(20, 20));

// 8. Check Number Between 10 and 50
class Task8 {
    static checkRange(num) {
        if (num >= 10 && num <= 50) {
            return `${num} is between 10 and 50`;
        } else {
            return `${num} is not between 10 and 50`;
        }
    }
}

console.log(Task8.checkRange(25));