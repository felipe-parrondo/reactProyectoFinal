import "./Item.css"
import React from 'react'
import {Link} from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'

function Item({ info }) {
    const i = info
    console.log(info)

    return (
        <div className="Item--Wrapper">
            <Link to={`/catalogo/${i.id}`}>
            <Card key={i.id}>
                <Image src={i.pic} alt={i.name} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{i.name}</Card.Header>
                    
                    <Card.Meta>
                        <span>{i.price}</span>
                    </Card.Meta>

                </Card.Content>
            </Card>
            </Link>
        </div>
        
    )
}

export default Item