import "./ItemList.css"
import {Link} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js"
//import axios from "axios"
import React from "react"
import DatosObjs from "../../Data/Items/ItemListObjs.json"

export default function ItemList () {

    /*const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get(rutaprueba)
        .then((res) =>{ 
            console.log(res)
            setProducts(res.data) 
        })
    }, [])*/                //Chrome no me permite acceder a localfiles de esta forma, asumo que hay que esperar a firebase

    console.log(DatosObjs)

    return(
        <div className='catalogoItems--item'>
            {DatosObjs.map((i) =>{
                return(
                    <div key={i.id} className="catalogoItems--innerItem" >
                        <img alt={i.name} src={i.pic}  /> 
                        <p className='catalogoItems--price'> {i.price} </p> 
                        <p className='catalogoItems--desc'> {i.name} </p> 
                        <Link to="/desc"> Mas Info </Link>
                        <ItemDetail/>
                    </div>
                )
            })}
        </div>
    )
}