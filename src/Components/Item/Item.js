import "./Item.css"

export default function Item ({info}) {

    {console.log({info})}

    return(
        <div className="catalogoItems--item__wrapper" >
            {info.map((i) =>{
            return(
                <div key= {i.id} className='catalogoItems--item'> 
                    <img alt={i.name}  /> 
                    <p className='catalogoItems--price'> {i.price} </p> 
                    <p className='catalogoItems--desc'> {i.name} </p> 
                </div>
                )
            })}
        </div>
    )
}