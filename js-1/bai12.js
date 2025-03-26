const customers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Green", email: "charlie@example.com" },
  ];
  
  const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
  ];
  
  const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
  ];
  
  // output 
//   [
//     {
//       id: 1,
//       name: "John Doe",
//       totalSpent: 3600,
//       products: [
//         { name: "Laptop", quantity: 3, totalSpent: 3600 },
//         { name: "Phone", quantity: 1, totalSpent: 800 },
//         { name: "Headphones", quantity: 3, totalSpent: 450 }
//       ]
//     },
//     {
//       id: 5,
//       name: "Charlie Green",
//       totalSpent: 2250,
//       products: [
//         { name: "Tablet", quantity: 4, totalSpent: 2000 },
//         { name: "Smartwatch", quantity: 3, totalSpent: 900 },
//         { name: "Headphones", quantity: 10, totalSpent: 1500 }
//       ]
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       totalSpent: 2100,
//       products: [
//         { name: "Phone", quantity: 1, totalSpent: 800 },
//         { name: "Tablet", quantity: 4, totalSpent: 2000 },
//         { name: "Smartwatch", quantity: 2, totalSpent: 600 }
//       ]
//     },
//     {
//       id: 4,
//       name: "Bob Brown",
//       totalSpent: 2300,
//       products: [
//         { name: "Laptop", quantity: 2, totalSpent: 2400 },
//         { name: "Tablet", quantity: 2, totalSpent: 1000 },
//         { name: "Phone", quantity: 1, totalSpent: 800 }
//       ]
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       totalSpent: 2050,
//       products: [
//         { name: "Smartwatch", quantity: 5, totalSpent: 1500 },
//         { name: "Phone", quantity: 2, totalSpent: 800 },
//         { name: "Headphones", quantity: 2, totalSpent: 300 }
//       ]
//     }
//   ]


let myObject ={}
for(order of orders){
    if( myObject[order.customerId]){
        let arrs= myObject[order.customerId].concat(order.items)
        let productObject={}
        for(arr of arrs){
            if(productObject[arr.productId]){
                productObject[arr.productId]+=arr.quantity
                // console.log(productObject) 
            }  
            else{
                productObject[arr.productId]=arr.quantity
                // console.log(productObject) 
            }
        }
         
        myObject[order.customerId]=productObject
    }
    else{
        myObject[order.customerId] =order.items

    }
}
  console.log(myObject)

  for(customer of customers){
    customer.product=myObject[customer.id]
    
  }
  console.log(customers)