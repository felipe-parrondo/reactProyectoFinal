import "./ItemList.css"
import {instanciasItemSave as products} from "./ItemListObjs.js"
import Item from "../Item/Item.js"


export default function ItemList() {

    

    return(
        <div id="catalogo" className="container-fluid ">
            <div className="flex--catalogoItems">
                <div className="catalogoItems">
                    <Item info={products} />
                </div>
            </div>  
        </div>
    )
}