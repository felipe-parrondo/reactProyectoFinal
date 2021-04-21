import {instanciasItemSave as products} from "./ItemListObjs.js"
import "./ItemList.css"
import Desc from "../Desc/Desc.js"
import React from "react";
import {Switch, Route, Link} from "react-router-dom";

export default function ItemList () {
    return(
        <div className='catalogoItems--item'>
            {products.map((i) =>{
                return(
                    <div key={i.id} className="catalogoItems--innerItem" >
                        <img alt={i.name} src={i.pic}  /> 
                        <p className='catalogoItems--price'> {i.price} </p> 
                        <p className='catalogoItems--desc'> {i.name} </p> 
                        <Link to="/desc"> Mas Info </Link>
                        
                        <Switch>
                            <Route path="/desc" exact component={Desc} />
                        </Switch>
                    </div>
                )
            })}
        </div>
    )
}