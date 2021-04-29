import "./ItemList.css"
//import axios from "axios"
import React from "react"
import DatosObjs from "../../Data/Items/ItemListObjs.json"
import Item from "../Item/Item.js"

export default function ItemList () {

    /*const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get(rutaprueba)
        .then((res) =>{ 
            console.log(res)
            setProducts(res.data) 
        })
    }, [])*/                //Chrome no me permite acceder a localfiles de esta forma, asumo que hay que esperar a firebase

    return(
        <div className='catalogoItems--item'>
            {DatosObjs.map((i) =>{
                return(
                    <Item info = {i} />
                )
            })}
        </div>
    )
}