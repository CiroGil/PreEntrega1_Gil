import React from 'react'
import ItemCount from '../ItemDetail/ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  return (
   <div className="container">
   <div className="row">

     <div className="col-md-6">
       <div className="item-info">
         <img src={item.imagen} className="img-fluid" alt={item.nombre} />
         
       </div>
      </div>
 
     <div className="col-md-6 d-flex flex-column align-items-center">
         <h2>{item.nombre}</h2>
         <p>{item.descripcion}</p>
         
         <div className='d-flex'>
            <p>Cantidad: {item.stock}</p>
            <p>$ {item.precio}</p>
         </div>
         
         <ItemCount stockItems={10} />
         
     </div>
   </div>
 </div>
 
  )
}

export default ItemDetail