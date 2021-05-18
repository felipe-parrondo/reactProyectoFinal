import React, {useContext} from 'react'
import "./ItemDetailForm.css"
import {listaCarrito} from "../../Data/listaCarrito/listaCarrito"
import ItemListObjs from "../../Data/Items/ItemListObjs.json"
import { Button, Input } from 'semantic-ui-react'

function ItemDetailForm( {info} ) {

    const {compras, setCompras} = useContext(listaCarrito)

    console.log(ItemListObjs)

    const addAndCheckItem = () => {

        var found = compras.some(element => element.id === ItemListObjs.id)

        if (found) {
            alert("ya lo agregaste")
        } else if (!found) {
            setCompras()
        }
    }

    return (

        <div className="Detail--ItemDetail">

            <p className="Detail--Name">
                <span className="Detail--Title" >Nombre: </span>
                <span className="Detail--Info">{info.name}</span>
            </p>

            <p className="Detail--Marca">
                <span className="Detail--Title">Marca: </span>
                <span className="Detail--Info">{info.marca}</span>
            </p>

            <p className="Detail--Material">
                <span className="Detail--Title">Material: </span>
                <span className="Detail--Info">{info.material}</span>
            </p>

            <p className="Detail--Price">
                <span className="Detail--Title">Precio: </span>
                <span className="Detail--Info">{info.price}</span>
            </p>

            <p className="Detail--Stock">
                <span className="Detail--Title">Stock: </span>
                <span className="Detail--Info">{info.stock}</span>
            </p>

            <span>
                <Input
                    icon= 'shopping basket'
                    placeholder=''
                    defaultValue='1'
                    size="massive"
                />

                <Button color='green' size='massive' onClick={addAndCheckItem} > Comprar </Button>
            </span>

        </div>
    )
}

export default ItemDetailForm
