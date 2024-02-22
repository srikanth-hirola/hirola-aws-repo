// import React, { useState } from 'react';

// const DropdownExample = () => {
//   const citiesAndCurrencies = [
//     { city: 'New York', currency: '1000' },
//     { city: 'London', currency: '1500' },
//     { city: 'Tokyo', currency: '1200' },
//   ];

//   const [selectedCity, setSelectedCity] = useState('');
//   const [editableCurrency, setEditableCurrency] = useState('');
//   const [isInputVisible, setIsInputVisible] = useState(false);

//   const handleCityChange = (event) => {
//     const selectedCityName = event.target.value;

//     // Find the corresponding currency for the selected city
//     const selectedCity = citiesAndCurrencies.find(
//       (city) => city.city === selectedCityName
//     );

//     // Update state based on the selected city
//     setSelectedCity(selectedCityName);

//     // Set the currency as the editable value
//     setEditableCurrency(selectedCity.currency);

//     // Display the input field when a city is selected
//     setIsInputVisible(true);
//   };

//   const handleEditableCurrencyChange = (event) => {
//     // Update the editable currency value as the user types
//     setEditableCurrency(event.target.value);
//   };

//   return (
//     <div>
//       <label>Select a city:</label>
//       <select value={selectedCity} onChange={handleCityChange}>
//         <option value="" disabled>Select a city</option>
//         {citiesAndCurrencies.map((city) => (
//           <option key={city.city} value={city.city}>
//             {city.city}
//           </option>
//         ))}
//       </select>

//       {isInputVisible && (
//         <div>
//           <label>Currency:</label>
//           <input
//             type="text"
//             value={editableCurrency}
//             onChange={handleEditableCurrencyChange}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;



// import React, { useState, useEffect } from 'react';

// const DropdownExample = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product A', price: 1000 },
//     { id: 2, name: 'Product B', price: 2000},
//     { id: 3, name: 'Product C', price: 3000 },
//   ]);

//   const [quantity, setQuantity] = useState(1);
//   const [tax, setTax] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (selectedProduct) {
//       const product = products.find((p) => p.id === selectedProduct);
//       const subTotal = product.price * quantity;
//       const taxAmount = (subTotal * tax) / 100;
//       const discountAmount = (subTotal * discount) / 100;
//       const finalTotal = subTotal + taxAmount - discountAmount;

//       setTotalAmount(finalTotal);
//     }
//   }, [selectedProduct, quantity, tax, discount, products]);

//   const handleProductChange = (event) => {
//     const productId = parseInt(event.target.value, 10);
//     setSelectedProduct(productId);
//   };

//   return (
//     <div>
//       <label>Select Product: </label>
//       <select onChange={handleProductChange}>
//         <option value="">Select a product</option>
//         {products.map((product) => (
//           <option key={product.id} value={product.id}>
//             {product.name}
//           </option>
//         ))}
//       </select>

//       {selectedProduct && (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Tax (%)</th>
//               <th>Discount (%)</th>
//               <th>Total Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{products.find((p) => p.id === selectedProduct)?.name}</td>
//               <td>{products.find((p) => p.id === selectedProduct)?.price}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={tax}
//                   onChange={(e) => setTax(parseFloat(e.target.value))}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                 />
//               </td>
//               <td>{totalAmount.toFixed(2)}</td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;



// import React, { useState, useEffect } from 'react';

// const DropdownExample = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product A', price: 1000 },
//     { id: 2, name: 'Product B', price: 2000 },
//     { id: 3, name: 'Product C', price: 3000 },
//   ]);

//   const [quantity, setQuantity] = useState(1);
//   const [tax, setTax] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (selectedProduct) {
//       const product = products.find((p) => p.id === selectedProduct);
//       const subTotal = product.price * quantity;
//       const taxAmount = (subTotal * tax) / 100;
//       const discountAmount = (subTotal * discount) / 100;
//       const finalTotal = subTotal + taxAmount - discountAmount;

//       setTotalAmount(finalTotal);
//     }
//   }, [selectedProduct, quantity, tax, discount, products]);

//   const handleProductChange = (event) => {
//     const productId = parseInt(event.target.value, 10);
//     setSelectedProduct(productId);
//   };

//   const handleTotalAmountChange = (event) => {
//     const newTotalAmount = parseFloat(event.target.value);
//     const product = products.find((p) => p.id === selectedProduct);
  
//     if (product) {
//       // Reverse calculation
//       const subTotal = newTotalAmount / (1 + tax / 100 - discount / 100);
//       const newQuantity = subTotal / product.price;
  
//       // Round to 2 decimal places
//       const roundedSubTotal = Math.round(subTotal * 100) / 100;
//       const roundedNewQuantity = Math.round(newQuantity * 100) / 100;
  
//       setTotalAmount(roundedSubTotal);
//       setQuantity(roundedNewQuantity);
//     }
//   };

//   return (
//     <div>
//       <label>Select Product: </label>
//       <select onChange={handleProductChange}>
//         <option value="">Select a product</option>
//         {products.map((product) => (
//           <option key={product.id} value={product.id}>
//             {product.name}
//           </option>
//         ))}
//       </select>

//       {selectedProduct && (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Tax (%)</th>
//               <th>Discount (%)</th>
//               <th>Total Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{products.find((p) => p.id === selectedProduct)?.name}</td>
//               <td>{products.find((p) => p.id === selectedProduct)?.price}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={(e) => setQuantity(parseFloat(e.target.value))}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={tax}
//                   onChange={(e) => setTax(parseFloat(e.target.value))}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={discount}
//                   onChange={(e) => setDiscount(parseFloat(e.target.value))}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={totalAmount}
//                   onChange={handleTotalAmountChange}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;



// import React, { useState, useEffect } from 'react';

// const DropdownExample = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product A', price: 1000 },
//     { id: 2, name: 'Product B', price: 2000 },
//     { id: 3, name: 'Product C', price: 3000 },
//   ]);

//   const [quantity, setQuantity] = useState(1);
//   const [tax, setTax] = useState(0);
//   const [discountPercentage, setDiscountPercentage] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (selectedProduct) {
//       const product = products.find((p) => p.id === selectedProduct);
//       const subTotal = product.price * quantity;
//       const discountAmount = (subTotal * discountPercentage) / 100;
//       const taxAmount = (subTotal * tax) / 100;
//       const finalTotal = subTotal + taxAmount - discountAmount;

//       setTotalAmount(finalTotal);
//     }
//   }, [selectedProduct, quantity, tax, discountPercentage, products]);

//   const handleProductChange = (event) => {
//     const productId = parseInt(event.target.value, 10);
//     setSelectedProduct(productId);
//   };

//   const handleDiscountPercentageChange = (event) => {
//     const newDiscountPercentage = parseFloat(event.target.value);
//     setDiscountPercentage(newDiscountPercentage);
//   };

//   return (
//     <div>
//       <label>Select Product: </label>
//       <select onChange={handleProductChange}>
//         <option value="">Select a product</option>
//         {products.map((product) => (
//           <option key={product.id} value={product.id}>
//             {product.name}
//           </option>
//         ))}
//       </select>

//       {selectedProduct && (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Tax (%)</th>
//                 <th>Discount (%)</th>
//                 <th>Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{products.find((p) => p.id === selectedProduct)?.name}</td>
//                 <td>{products.find((p) => p.id === selectedProduct)?.price}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={tax}
//                     onChange={(e) => setTax(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={discountPercentage}
//                     onChange={handleDiscountPercentageChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={totalAmount}
//                     readOnly
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div>
//             <h4>Summary</h4>
//             <p>Price: {products.find((p) => p.id === selectedProduct)?.price * quantity}</p>
//             <p>Tax: {totalAmount - (products.find((p) => p.id === selectedProduct)?.price * quantity)}</p>
//             <p>Discount: {(products.find((p) => p.id === selectedProduct)?.price * quantity) * (discountPercentage / 100)}</p>
//             <p>Total Amount: {totalAmount}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;





// import React, { useState, useEffect } from 'react';

// const DropdownExample = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product A', price: 1000 },
//     { id: 2, name: 'Product B', price: 2000 },
//     { id: 3, name: 'Product C', price: 3000 },
//   ]);

//   const [quantity, setQuantity] = useState(1);
//   const [tax, setTax] = useState(0);
//   const [discountPercentage, setDiscountPercentage] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (selectedProduct) {
//       const product = products.find((p) => p.id === selectedProduct);
//       const subTotal = product.price * quantity;
//       const discountAmount = (subTotal * discountPercentage) / 100;
//       const taxAmount = (subTotal * tax) / 100;
//       const finalTotal = subTotal + taxAmount - discountAmount;

//       setTotalAmount(finalTotal);
//     }
//   }, [selectedProduct, quantity, tax, discountPercentage, products]);

//   const handleProductChange = (event) => {
//     const productId = parseInt(event.target.value, 10);
//     setSelectedProduct(productId);
//   };

//   const handleDiscountPercentageChange = (event) => {
//     const newDiscountPercentage = parseFloat(event.target.value);
//     setDiscountPercentage(newDiscountPercentage);
//   };

//   return (
//     <div>
//       <label>Select Product: </label>
//       <select onChange={handleProductChange}>
//         <option value="">Select a product</option>
//         {products.map((product) => (
//           <option key={product.id} value={product.id}>
//             {product.name}
//           </option>
//         ))}
//       </select>

//       {selectedProduct && (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Tax (%)</th>
//                 <th>Discount (%)</th>
//                 <th>Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{products.find((p) => p.id === selectedProduct)?.name}</td>
//                 <td>{products.find((p) => p.id === selectedProduct)?.price}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={tax}
//                     onChange={(e) => setTax(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={discountPercentage}
//                     onChange={handleDiscountPercentageChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={totalAmount}
//                     readOnly
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div>
//             <h4>Summary</h4>
//             <p>Price: {products.find((p) => p.id === selectedProduct)?.price * quantity}</p>
//             <p>Tax: {totalAmount - (products.find((p) => p.id === selectedProduct)?.price * quantity)}</p>
//             <p>Discount: {(products.find((p) => p.id === selectedProduct)?.price * quantity) * (discountPercentage / 100)}</p>
//             <p>Total Amount: {totalAmount}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;











// import React, { useState, useEffect } from 'react';

// const DropdownExample = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product A', price: 1000 },
//     { id: 2, name: 'Product B', price: 2000 },
//     { id: 3, name: 'Product C', price: 3000 },
//   ]);

//   const [quantity, setQuantity] = useState(1);
//   const [tax, setTax] = useState(0);
//   const [discountPercentage, setDiscountPercentage] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     if (selectedProduct) {
//       const product = products.find((p) => p.id === selectedProduct);
//       let calculatedPrice;

//       if (totalAmount > 0) {
//         // If total amount is provided, calculate price based on tax and discount
//         const subTotal = (totalAmount * 100) / (100 + tax - discountPercentage);
//         const discountAmount = (subTotal * discountPercentage) / 100;
//         calculatedPrice = subTotal - discountAmount;
//       } else {
//         // If total amount is not provided, default to product price
//         calculatedPrice = product.price;
//       }

//       setPrice(calculatedPrice);
//     }
//   }, [selectedProduct, totalAmount, tax, discountPercentage, products]);

//   const handleProductChange = (event) => {
//     const productId = parseInt(event.target.value, 10);
//     setSelectedProduct(productId);
//   };

//   const handleDiscountPercentageChange = (event) => {
//     const newDiscountPercentage = parseFloat(event.target.value);
//     setDiscountPercentage(newDiscountPercentage);
//   };

//   const handleTotalAmountChange = (event) => {
//     const newTotalAmount = parseFloat(event.target.value);
//     setTotalAmount(newTotalAmount);
//   };

//   const handlePriceChange = (event) => {
//     const newPrice = parseFloat(event.target.value);
//     setPrice(newPrice);
//   };

//   return (
//     <div>
//       <label>Select Product: </label>
//       <select onChange={handleProductChange}>
//         <option value="">Select a product</option>
//         {products.map((product) => (
//           <option key={product.id} value={product.id}>
//             {product.name}
//           </option>
//         ))}
//       </select>

//       {selectedProduct && (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Tax (%)</th>
//                 <th>Discount (%)</th>
//                 <th>Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{products.find((p) => p.id === selectedProduct)?.name}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={price}
//                     onChange={handlePriceChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={tax}
//                     onChange={(e) => setTax(parseFloat(e.target.value))}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={discountPercentage}
//                     onChange={handleDiscountPercentageChange}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={totalAmount}
//                     onChange={handleTotalAmountChange}
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div>
//             <h4>Summary</h4>
//             <p>Price: {price}</p>
//             <p>Tax: {totalAmount - price}</p>
//             <p>Discount: {discountPercentage}%</p>
//             <p>Total Amount: {totalAmount}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownExample;

// import React, { useState } from 'react';

// const DropdownExample = () => {
//   const [products, setProducts] = useState([]);
//   const [invoiceDate, setInvoiceDate] = useState(new Date());
//   const [paymentTermsDays, setPaymentTermsDays] = useState(30);
//   const [advancePayment, setAdvancePayment] = useState(0);

//   const handleProductSelection = (productId, quantity, unitPrice) => {
//     setProducts((prevProducts) => {
//       const existingProductIndex = prevProducts.findIndex((p) => p.productId === productId);

//       if (existingProductIndex !== -1) {
//         // Update quantity if product already exists
//         prevProducts[existingProductIndex].quantity = quantity;
//         return [...prevProducts];
//       } else {
//         // Add new product to the list
//         return [...prevProducts, { productId, quantity, unitPrice }];
//       }
//     });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'invoiceDate':
//         setInvoiceDate(value);
//         break;
//       case 'paymentTermsDays':
//         setPaymentTermsDays(value);
//         break;
//       case 'advancePayment':
//         setAdvancePayment(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const calculateInvoice = () => {
//     // Implement the calculations (similar to the previous response)

//     let subtotal = 0;
//     let totalTax = 0;
//     let totalDiscount = 0;

//     products.forEach((product) => {
//       const lineItemTotal = product.quantity * product.unitPrice;
//       const itemTax = lineItemTotal * (product.taxRate / 100);
//       const itemDiscount = lineItemTotal * (product.discountRate / 100);

//       subtotal += lineItemTotal;
//       totalTax += itemTax;
//       totalDiscount += itemDiscount;
//     });

//     const grandTotal = subtotal + totalTax - totalDiscount;
//     const balanceDue = grandTotal - advancePayment;

//     return {
//       subtotal,
//       totalTax,
//       totalDiscount,
//       grandTotal,
//       balanceDue,
//     };
//   };

//   const {
//     subtotal,
//     totalTax,
//     totalDiscount,
//     grandTotal,
//     balanceDue,
//   } = calculateInvoice();

//   return (
//     <div>
//       {/* Product Selection */}
//       <label>
//         Product:
//         <select onChange={(e) => handleProductSelection(e.target.value, 1, 10)}>
//           <option value="1">Product 1</option>
//           <option value="2">Product 2</option>
//           {/* Add more products as needed */}
//         </select>
//       </label>

//       {/* Editable Fields */}
//       <label>
//         Invoice Date:
//         <input
//           type="date"
//           name="invoiceDate"
//           value={invoiceDate}
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         Payment Terms (Days):
//         <input
//           type="number"
//           name="paymentTermsDays"
//           value={paymentTermsDays}
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         Advance Payment:
//         <input
//           type="number"
//           name="advancePayment"
//           value={advancePayment}
//           onChange={handleInputChange}
//         />
//       </label>

//       {/* Display Fields */}
//       <div>
//         <h2>Invoice Details</h2>
//         <p>Subtotal: ${subtotal}</p>
//         <p>Total Tax: ${totalTax}</p>
//         <p>Total Discount: ${totalDiscount}</p>
//         <p>Grand Total: ${grandTotal}</p>
//         <p>Balance Due: ${balanceDue}</p>
//       </div>
//     </div>
//   );
// };

// export default DropdownExample;

// import React, { useState } from 'react';

// const DropdownExample = () => {
//   const [formData, setFormData] = useState({
//     customerName: '',
//     invoiceDate: '',
//     dueDate: '',
//   });
//   const [invoiceId, setInvoiceId] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const generateInvoiceId = () => {
//     const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
//     const randomNumbers = Math.floor(Math.random() * 1000000).toString().padStart(8, '0');
//     const id = `#${currentDate}-${randomNumbers}`;
//     setInvoiceId(id);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     generateInvoiceId();
//     // Store the form data and invoiceId wherever you need (e.g., send to backend, store in state, etc.)
//     const response = {
//       ...formData,
//       invoiceId,
//     };
//     console.log(response);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Customer Name:
//         <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Invoice Date:
//         <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Due Date:
//         <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default DropdownExample;


// import React, { useState, createContext, useContext } from 'react';

// const JsonDataContext = createContext();

// const JsonDataProvider = ({ children }) => {
//   const [jsonData, setJsonData] = useState([
//     {
//       customerName: 'srikanth',
//       customerAddress: 'Address',
//       data: 'data',
//       email: 'email',
//     },
//     // Add more data as needed
//   ]);
// console.log("data",jsonData)
//   const updateJsonData = (index, newData) => {
//     setJsonData((prevData) => {
//       const newDataArray = [...prevData];
//       newDataArray[index] = { ...newDataArray[index], ...newData };
//       return newDataArray;
//     });
//   };

//   return (
//     <JsonDataContext.Provider value={{ jsonData, updateJsonData }}>
//       {children}
//     </JsonDataContext.Provider>
//   );
// };

// const useJsonData = () => {
//   const context = useContext(JsonDataContext);
//   if (!context) {
//     throw new Error('useJsonData must be used within a JsonDataProvider');
//   }
//   return context;
// };

// const DropdownExample = () => {
//   return (
//     <JsonDataProvider>
//       <DataDisplay />
//     </JsonDataProvider>
//   );
// };

// const DataDisplay = () => {
//   const { jsonData, updateJsonData } = useJsonData();

//   const DataForm = ({ index }) => {
//     const [formData, setFormData] = useState({
//       customerName: '',
//       customerAddress: '',
//       data: '',
//       email: '',
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       updateJsonData(index, formData);
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Customer Name:
//           <input
//             type="text"
//             name="customerName"
//             value={formData.customerName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Customer Address:
//           <input
//             type="text"
//             name="customerAddress"
//             value={formData.customerAddress}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Data:
//           <input
//             type="text"
//             name="data"
//             value={formData.data}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };

//   return (
//     <div>
//       {jsonData.map((data, index) => (
//         <div key={index}>
//           <p>Customer Name: {data.customerName}</p>
//           <p>Customer Address: {data.customerAddress}</p>
//           <p>Data: {data.data}</p>
//           <p>Email: {data.email}</p>
//           <DataForm index={index} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DropdownExample;


import React, { useState, createContext, useContext } from 'react';

const JsonDataContext = createContext();

const JsonDataProvider = ({ children }) => {
  const [dataHistory, setDataHistory] = useState([]);
console.log("dataHistory",dataHistory)
  const updateJsonData = (newData) => {
    setDataHistory((prevHistory) => [...prevHistory, newData]);
  };

  return (
    <JsonDataContext.Provider value={{ dataHistory, updateJsonData }}>
      {children}
    </JsonDataContext.Provider>
  );
};

const useJsonData = () => {
  const context = useContext(JsonDataContext);
  if (!context) {
    throw new Error('useJsonData must be used within a JsonDataProvider');
  }
  return context;
};

const DropdownExample = () => {
  return (
    <JsonDataProvider>
      <div>
        <DataForm />
        <DataPreviewTable />
        <hr />
        <DataHistoryTable />
      </div>
    </JsonDataProvider>
  );
};

const DataForm = () => {
  const { updateJsonData } = useJsonData();
  const [formData, setFormData] = useState({
    customerName: '',
    customerAddress: '',
    data: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateJsonData(formData);
    setFormData({
      customerName: '',
      customerAddress: '',
      data: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
      </label>
      <label>
        Customer Address:
        <input
          type="text"
          name="customerAddress"
          value={formData.customerAddress}
          onChange={handleChange}
        />
      </label>
      <label>
        Data:
        <input
          type="text"
          name="data"
          value={formData.data}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const DataPreviewTable = () => {
  const { dataHistory } = useJsonData();

  return (
    <div>
      <h2>Data Preview Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Data</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataHistory.map((data, index) => (
            <tr key={index}>
              <td>{data.customerName}</td>
              <td>{data.customerAddress}</td>
              <td>{data.data}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DataHistoryTable = () => {
  const { dataHistory } = useJsonData();

  return (
    <div>
      <h2>Data History Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Data</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataHistory.map((data, index) => (
            <tr key={index}>
              <td>{data.customerName}</td>
              <td>{data.customerAddress}</td>
              <td>{data.data}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DropdownExample;
