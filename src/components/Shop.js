import React from 'react'
import {Link} from 'react-router-dom'
import ItemCard from './ItemCard'
import Allitem from './Allitems'
function Shop(){
  const items=Allitem;
  
 
    return(
       
        <div className="item-list">
            {
                 items.map((card) =>(
                    <Link to={`/Shop/${card.id}`}>
                    <ItemCard  key={card.id} scr={card.scr} name={card.name} price={card.price}/>
                   </Link>
                 ))
            }
        </div>
    )
}

export default Shop