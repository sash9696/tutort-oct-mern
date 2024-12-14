import React, { useEffect, useState } from 'react'
import './App.css'
import { getProductsData } from './api/products'
import { FilterableProductTable } from './components';

//breal the app into pieces called as component
//we decide visual states for each components
//we connect the components together

//step1 => break the components in subcomponents
//single responsibility principle => a component should ideally do one thing
//if the component size grows then we divide into sub components

//step2 => build a static page
//static is only writing and not logic
//build components, reuse components, we can pass data as props to subcomppnents
//top - down approach or bottom to up approach(big apps)

//step3 => define minimal state requirement

//DRY
//cart in ecommerce store => array in a state
//number of items in the cart => compute on demand

//in our case the pieces for this app

//list of products
//search text entered by the user
//value of checkbox
//filtered products

//Note (it should now be a state for these type of cases)
//is iy unchanged over time
//is it coming via props from parent
//can u compute on demand based on some other state or props


//list of products => state
//search text => state
//value of checkbox => state
//filtered products => not a state as it can be computed based on original list


//step 4 => where the state should live

//product table => need to filter based on search text and checkbox value
//search bar => needs to display that state search text and checkbox value

//step 5 => user interactions


function App() {
  const [productsData, setProductsData] = useState([]);

  async function fetchProductsData(){

    const data  = await getProductsData();

   

    setProductsData(data);
  }

  // console.log('productsData', productsData);

  //side effects => connect to an external system
  //or u need to listen for something change 

  //useEffect(callback, dependecyArray(optional))

  useEffect(() => {
    fetchProductsData();
    // console.log(`App use effect renders`)
  }, [])
  //for this case []  will ensure the useeffect runs only once the component is mounted
  // console.log(`App component renders`)

  return (
    <div className='app'>
      <h1>Search Products Table</h1>

      <FilterableProductTable products={productsData}  />
    </div>
  )
}

export default App