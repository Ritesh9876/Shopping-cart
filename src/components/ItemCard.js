import React from 'react'

function ItemCard(props){
    return(
        <div className="item">
                 <div className="image">
                     <img src={props.scr} alt="productPhoto"/>
                 </div>
                 <div className="info">
                     <p>{props.name}</p>
                     <p>{props.price} USD</p>
                 </div>
             </div>
    )
}
export default ItemCard