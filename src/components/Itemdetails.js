import React from 'react'
import Allitem from './Allitems'
import Cartitems from './Itemincart'
function Itemdetails({match}){

console.log(match)

    const itemdetails= Allitem.filter(item =>
        item.id === parseInt( match.params.id)
    )

    function handleclick(){
       console.log(itemdetails[0])
       if(Cartitems.indexOf(itemdetails[0]) !== -1){
           const index= Cartitems.indexOf(itemdetails[0])
           Cartitems[index].quantity =  Cartitems[index].quantity +1
       }
       else{
        Cartitems.push(itemdetails[0])

       }
    }
    return(
        <div className="addtocart">
            <div className="product-img">
                <img src={itemdetails[0].scr} alt=""/>
            </div>
            <div className="cartButton">
                <p>{itemdetails[0].name}</p>
                <p>{itemdetails[0].price} USD</p>
                <button 
                onClick={
                    handleclick
               }
                >Add to cart</button>
            </div>
        </div>
    )
}


export default Itemdetails
