import "./ItemList.css"
import {instanciasItemSave} from "./ItemListObjs.js"

export default function ItemList() {

    const HTMLinstanciasItemSave = instanciasItemSave.map((i) =>{
        return <div key= {i.id} className='catalogoItems--item'> <img alt={i.name} src= {i.pic} /> <p className='catalogoItems--price'> {i.price} </p> <p className='catalogoItems--desc'> {i.name} </p> </div>
    })

    return(
        <div id="catalogo" className="container-fluid ">
            <div className="catalogoItems">
                {HTMLinstanciasItemSave}
            </div>
        </div>
    )
}