class FoodOrder {
    // 2 Static Variables
    static platformName = "Swiggy";
    static deliveryCharge = 40;

    // Constructor
    constructor(orderId, customerName, foodName, quantity, price, address) {

        // 6 Instance Variables
        this.orderId = orderId;
        this.customerName = customerName;
        this.foodName = foodName;
        this.quantity = quantity;
        this.price = price;
        this.address = address;
    }
}


// Multiple Objects
let order1 = new FoodOrder(
    "ORDER1",
    "Siva",
    "Chicken Biryani",
    2,
    250,
    "Hyderabad"
);

let order2 = new FoodOrder(
    "ORDER2",
    "GOPI",
    "Paneer Pizza",
    1,
    350,
    "Chennai"
);


// Static Variables
console.log("Platform Name:", FoodOrder.platformName);
console.log("Delivery Charge:", FoodOrder.deliveryCharge);
// Order 1
console.log("Order 1");
console.log("Order ID:", order1.orderId);
console.log("Customer Name:", order1.customerName);
console.log("Food Name:", order1.foodName);
console.log("Quantity:", order1.quantity);
console.log("Price:", order1.price);
console.log("Address:", order1.address);


// Order 2
console.log("Order 2");

console.log("Order ID:", order2.orderId);
console.log("Customer Name:", order2.customerName);
console.log("Food Name:", order2.foodName);
console.log("Quantity:", order2.quantity);
console.log("Price:", order2.price);
console.log("Address:", order2.address);



// Online Shopping Product
class ShoppingProduct {
    // 2 Static Variables
    static websiteName = "Amazon";
    static deliveryDays = 3;

    // Constructor
    constructor(productId, productName, category, price, quantity, customerName) {

        // 6 Instance Variables
        this.productId = productId;
        this.productName = productName;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.customerName = customerName;
    }
}


// Multiple Objects

let product1 = new ShoppingProduct(
    "P1",
    "Wireless Mouse",
    "Electronics",
    800,
    2,
    "reddy"
);

let product2 = new ShoppingProduct(
    "P2",
    "Running Shoes",
    "Footwear",
    2500,
    1,
    "mani"
);


// Static Variables

console.log("Website Name:", ShoppingProduct.websiteName);
console.log("Delivery Days:", ShoppingProduct.deliveryDays);


// Product 1

console.log("Product 1");

console.log("Product ID:", product1.productId);
console.log("Product Name:", product1.productName);
console.log("Category:", product1.category);
console.log("Price:", product1.price);
console.log("Quantity:", product1.quantity);
console.log("Customer Name:", product1.customerName);


// Product 2

console.log("Product 2");

console.log("Product ID:", product2.productId);
console.log("Product Name:", product2.productName);
console.log("Category:", product2.category);
console.log("Price:", product2.price);
console.log("Quantity:", product2.quantity);
console.log("Customer Name:", product2.customerName);



class CabBooking {

    // 2 Static Variables
    static companyName = "Uber";
    static baseFare = 50;

    // Constructor
    constructor(bookingId, passengerName, pickup, destination, cabType, distance) {

        // 6 Instance Variables
        this.bookingId = bookingId;
        this.passengerName = passengerName;
        this.pickup = pickup;
        this.destination = destination;
        this.cabType = cabType;
        this.distance = distance;
    }
}


// Multiple Objects

let booking1 = new CabBooking(
    "UBER1",
    "siva",
    "Ameerpet",
    "Hitech City",
    "Sedan",
    12
    
);

let booking2 = new CabBooking(
    "UBER2",
    "Reddy",
    "Kukatpally",
    "Banjara Hills",
    "Mini",
    20
);


// Display Static Variables

console.log("Company Name:", CabBooking.companyName);
console.log("Base Fare:", CabBooking.baseFare);


// Display Object 1

console.log("Booking 1");
console.log("Booking ID:", booking1.bookingId);
console.log("Passenger Name:", booking1.passengerName);
console.log("Pickup:", booking1.pickup);
console.log("Destination:", booking1.destination);
console.log("Cab Type:", booking1.cabType);
console.log("Distance:", booking1.distance);


// Display Object 2

console.log("Booking 2");
console.log("Booking ID:", booking2.bookingId);
console.log("Passenger Name:", booking2.passengerName);
console.log("Pickup:", booking2.pickup);
console.log("Destination:", booking2.destination);
console.log("Cab Type:", booking2.cabType);
console.log("Distance:", booking2.distance);