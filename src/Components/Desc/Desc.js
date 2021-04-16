import React from 'react'
import {instanciasItemSave as products} from "../ItemList/ItemListObjs.js"

function Desc() {
    return (
        <div>
            {products.map((i) => {
                return(
                    <div>
                        <div>
                            <span>Stock: </span>
                            <span> {i.stock} </span>
                        </div>
                        <div>
                            <span>Detalles: </span>
                            <span> {i.material} </span>
                        </div>
                        <div>
                            <span>Medidas: </span>
                            <span> {i.measure} </span>
                        </div>
                        <div>
                            <span>Marca: </span>
                            <span> {i.marca} </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Desc
