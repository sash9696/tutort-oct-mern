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
  
  // function getOrders(userId, callback) {
  //   console.log(`Fetching orders for user: ${userId} `);
  
  //   setTimeout(() => {
  //     console.log("Orders fetched: ", ordersData);
  //     callback(ordersData);
  //   }, 2000); //simulating a 2 sec delay
  // }
  
  // function proceedToCheckout(orders,callback) {
  //   console.log(`Proceeding to checkout with orders:`, orders);
  
  //   setTimeout(() => {
  //     console.log(`Checkout complete. Total items:`, orders.length);
  //     callback();
  //   }, 1500);
  // }
  
  // function processPayment(callback) {
  //   console.log(`Processing payment...`);
  
  //   setTimeout(() => {
  //     paymentData.status = "Completed";
  //     console.log(`payment processed successfully with details: `, paymentData);
  //     callback();
  //   }, 3000);
  // }
  
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
  
  // const promise = new Promise((resolve, reject) => {
  //     reject("Something went wrong");
  // });
  
  // console.log(promise);
  
  //clean code
  //efficient error handling using .catch()
  //.then() it ensures the fucntion runs only once
  //u have idea what is happening in the background
  
  // function getOrders(userId, callback) {
  //     console.log(`Fetching orders for user: ${userId} `);
  
  //     setTimeout(() => {
  //       console.log("Orders fetched: ", ordersData);
  //       callback(ordersData);
  //     }, 2000); //simulating a 2 sec delay
  //   };
  
  function getOrders(userId) {
    return new Promise((resolve, reject) => {
      // reject('Something went wrong')
      console.log(`Fetching orders for user: ${userId} `);
      setTimeout(() => {
        if (userId) {
          console.log("Orders fetched: ", ordersData);
          resolve(ordersData);
        } else {
          reject("User ID is missing. Failed to fetch orders.");
        }
      }, 2000); //simulating a 2 sec delay
    });
  }
  
  function proceedToCheckout(orders) {
    return new Promise((resolve, reject) => {
      console.log(`Proceeding to checkout with orders:`, orders);
      setTimeout(() => {
        if (orders && orders.length > 0) {
          console.log(`Checkout complete. Total items:`, orders.length);
          resolve();
        } else {
          reject("No orders available for checkout");
        }
      }, 1500);
    });
  }
  
  // getOrders(userData.userId)
  //     .then((orders) => proceedToCheckout(orders))
  //     .catch((err) => console.error(err))
  
  //.then also returns a promise
  
  function processPayment() {
    return new Promise((resolve) => {
      console.log(`Processing payment...`);
      setTimeout(() => {
        const paymentSuccessful = true;
  
        if (paymentSuccessful) {
          paymentData.status = "Completed";
          console.log(
            `payment processed successfully with details: `,
            paymentData
          );
          resolve();
        } else {
          reject("Payment failed. Please try again.");
        }
      }, 3000);
    });
  }
  
  //useful for chaining multiple asynchronous operations and handling each step in .then()
  
  // getOrders(userData.userId)
  //   .then((orders) => {
  //     proceedToCheckout(orders);
  //   })
  //   .then(() => {
  //     processPayment();
  //   })
  //   .then(() => {
  //     console.log(`order journey completed. Thank you for the purchase. `);
  //   })
  //   .catch((err) => {
  //     console.error('An error occurred during the order journey: ',err)
  
  // })
  //   .finally(() => {
  //     console.log("The whole is completed");
  //   });
  
  //promise hell
  
  //more elegant approach of using promsies is async await
  
  //it will seam inside async await function that the process is synchronous
  
  async function orderJourney(userId) {
    try {
      const orders = await getOrders(userId); //2 s
      await proceedToCheckout(orders); //1.5s
      await processPayment(); //3s
      console.log(`order journey completed. Thank you for the purchase. `);
    } catch (error) {
      console.error("An error occured during order journey: ", error);
    }
  }
  
  orderJourney(userData.userId);
  
  //more readable, especially when dealing wih multiple sequential async operations
  //easier to handle erros with try/catch block
  