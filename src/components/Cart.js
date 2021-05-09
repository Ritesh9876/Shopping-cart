import React from 'react'
import {useEffect,useState} from 'react'
import Cartitems from './Itemincart'

function Cart(){
  const [update,setupdate]=useState(false)
    

    function addone(index){
        Cartitems[index].quantity=Cartitems[index].quantity +1
        setupdate(!update)
    }

    function subone(index){
        Cartitems[index].quantity=Cartitems[index].quantity - 1
        if(Cartitems[index].quantity===0){
            Cartitems.splice(index,1)
        }
        setupdate(!update)
    }
    
    useEffect(() =>{
console.log("Narayan Narayan")
    },[update])

console.log(Cartitems)
    return(

         <div className="cart">

            {
                 Cartitems.map((item,index) =>(
                    <div className="cart-item">
                    <div className="cartPro-img">
                         <img src={item.scr} alt=""/>
                    </div>
                 <div className="carPro-info">
                     <h2>{item.name}</h2>
                     <h2>{item.price} USD</h2>
                 </div>
                  <div className="no-products">
                     <button className="add" onClick ={() =>{
                             addone(index)
                     }}>+</button>

                     <p>{Cartitems[index].quantity}</p>

                     <button className="sub" onClick ={ () =>{
                         subone(index)
                     }}>-</button>
                 </div> 
                    </div>

                  
                ))
            }
            
         </div>
    )
}
export default Cart