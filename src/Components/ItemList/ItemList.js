import {instanciasItemSave as products} from "./ItemListObjs.js"
import "./ItemList.css"
import {Products} from "./products/Products.js"

export default function ItemList () {
    return(
        <div className='catalogoItems--item'>
            {products.map((i) =>{
                let setPic = Products.indexOf(i.pic + ".jpg")
                return(
                    <div key={i.id} className="catalogoItems--innerItem" >
                        <img src={Products[setPic]} alt={i.name}  /> 
                        <p className='catalogoItems--price'> {i.price} </p> 
                        <p className='catalogoItems--desc'> {i.name} </p> 
                    </div>
                )
            })}
        </div>
    )
}