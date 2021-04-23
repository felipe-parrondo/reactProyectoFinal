import "./ItemList.css"
import {Link} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import axios from "axios"
import React, {useEffect, useState} from "react"

export default function ItemList () {

    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get("https://docs.google.com/spreadsheets/d/1eo0FH500NO2WDdiTdXl_UhOEp3SxdnrhVQj-HJwtXws/edit#gid=0")
        .then((res) =>{ 
            console.log(res)
            setProducts(res.data) 
        })
    }, [])

    return(
        <div className='catalogoItems--item'>
            {products.map((i) =>{
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