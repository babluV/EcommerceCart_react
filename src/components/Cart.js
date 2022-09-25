import {useEffect,useState} from 'react'
import './Cart.css'
const Cart = ({state, dispatch}) => {
    const {cart} = state
    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(
        cart.reduce((prev, curr) => prev + Number(curr.price) * curr.qty, 0)
      );
    }, [cart]);
  
    const changeQty = (id,qty) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
        id: id,
        qty: qty,
        },
    })

  return (
    <div className='cartContainer' >
        <b className='cartTitle'>Cart</b>
        <b className ='cartTotal'>Subtotal: $ {total}</b>
        <div className='cartDetails'>
         {cart.length > 0 ?
             cart.map((prod)=>(
                 <div key={prod.title} style={{display:'flex', padding:10, border:"1px solid grey", margin:5, justifyContent:'space-between'}}>

                     <div style={{display:'flex',gap:10}}>

                      <img src={prod.image} alt={prod.title} style={{width:70, objectFit:'cover'}}/>
                      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                          <span>{prod.title}</span>
                          <b>$ {prod.price}</b>
                      </div>
                     </div>
                     <div className='cartQuantity'>
                         <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                         <span>{prod.qty}</span>
                         <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                     </div>
                 </div>
                 ))
         :
         <b>Cart is empty</b>}
        </div>
    </div>
  )
}

export default Cart