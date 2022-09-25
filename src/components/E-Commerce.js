import {useEffect, useReducer} from 'react'
import axios from 'axios'
import '../App.css';

import Cart from './Cart';
import { cartReducer } from '../reducers/cartReducer';
import Products from './Products';
import Header from '../headerComponent/Header';

function Ecommerce() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],  
  });


  const fetchProducts = async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products")
    console.log(data);
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
<>
   <Header/>
   <div>
    <input id="searchbox" 
      type="text" 
        placeholder='Search by Products name...' 
        />
        <div class="productPage"style={{display:'flex'}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/> 
    </div>
    </div>
    </>
  );
}

export default Ecommerce;
