export function getProductsData() {
  return new Promise((resolve) => {
    const products = [
      {
        category: "Electronics",
        price: "₹40000",
        stocked: true,
        name: "Laptop",
      },
      {
        category: "Electronics",
        price: "₹100000",
        stocked: false,
        name: "Iphone 15",
      },
      {
        category: "Clothing",
        price: "₹1000",
        stocked: false,
        name: "Tshirt",
      },
      {
        category: "Clothing",
        price: "2000",
        stocked: true,
        name: "jeans",
      },
      {
        category: "Grocery",
        price: "₹400",
        stocked: true,
        name: "Ghee",
      },
      {
        category: "Grocery",
        price: "₹200",
        stocked: false,
        name: "Lays",
      },
    ];

    setTimeout(() => {
      resolve(products);
    }, 400);
  });
}
