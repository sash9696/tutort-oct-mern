//ecomm website

const userData = {
  userId: 12345,
  name: "John Doe",
  email: "john@gmail.com",
  address: "123 Main street",
};

const ordersData = [
  { orderId: "001", item: "laptop", price: 1200 },
  { orderId: "002", item: "Headphones", price: 150 },
  { orderId: "003", item: "Keyboard", price: 200 },
];

const paymentData = {
  cardNumber: "**** **** **** 1234",
  paymentMethod: "Credit Card",
  status: "Pending",
};

function getOrders(userId, callback) {
  console.log(`Fetching orders for user: ${userId} `);

  setTimeout(() => {
    console.log("Orders fetched: ", ordersData);
    callback(ordersData);
  }, 2000); //simulating a 2 sec delay
}

function proceedToCheckout(orders,callback) {
  console.log(`Proceeding to checkout with orders:`, orders);

  setTimeout(() => {
    console.log(`Checkout complete. Total items:`, orders.length);
    callback();
  }, 1500);
}

function processPayment(callback) {
  console.log(`Processing payment...`);

  setTimeout(() => {
    paymentData.status = "Completed";
    console.log(`payment processed successfully with details: `, paymentData);
    callback();
  }, 3000);
}

// getOrders(userData.userId, (orders) => {
//   proceedToCheckout(orders, () => {
//     processPayment(() => {
//         console.log(`order journey completed. Thank you for the purchase. `);

//     });
//   });
// });

//callbacks

//Call back hell
//Error handling and management
//Inversion of control



//callbacks to promises to async await


const promise = new Promise((resolve) => {
    resolve(10);
});

console.log(promise);