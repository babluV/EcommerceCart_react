import React from 'react'
import './Cart.css'
const Products = ({state,dispatch}) => {
  const {products, cart} = state;
  console.log(products, cart)
  return (
    <div className="productContainer" >
      {products.map((prod)=>(
        <div className='eachProduct'key={prod.id} >
        <img src={prod.image} alt={prod.title} style={{height:200,objectFit:'cover'}}/>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{padding:5,border:0,borderRadius:5,backgroundColor:'#e53935',color:'white'}}
              onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
             style={{padding:5,border:0,borderRadius:5,backgroundColor:'green',color:'white'}}
             onClick={() => dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    image: prod.image,
                    qty: prod.qty,
                    price: prod.price,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Products