import React from 'react'
import "./ItemDetailForm.css"

function ItemDetailForm( {info} ) {

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

            <form>

            </form>

        </div>
    )
}

export default ItemDetailForm
