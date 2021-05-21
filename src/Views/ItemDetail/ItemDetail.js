import React from 'react'
import "./ItemDetail.css"
import arrayBase from "../../Data/Items/ItemListObjs.json"
import Item from "../../Components/Item/Item.js"
import ItemDetailForm from "../../Components/ItemDetailForm/ItemDetailForm.js"

function ItemDetail({match}) {

    const found = arrayBase.find(element => element.id === match.params.id)

    return (

        <div className="Detail--Wrapper">

            <Item info={found} />

            <ItemDetailForm info={found} /> 

        </div>
    )
}

export default ItemDetail
