import React from 'react'
import "./Catalogo.css"
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import { Dropdown } from 'semantic-ui-react'

function Catalogo() {

    const categorias = [
        { key: 'Tijeras', text: 'Tijeras', value: '01' },
        { key: 'Hilos', text: 'Hilos', value: '02' },
        { key: 'Agujas', text: 'Agujas', value: '03' },
        { key: 'Cortahilachas', text: 'Cortahilachas', value: '04' },
        { key: 'Parches', text: 'Parches', value: '05' },
        { key: 'Botones', text: 'Botones', value: '06' },
        { key: 'Cintas', text: 'Cintas', value: '07' },
    ]

    return (
        <>
            <div className="Catalogo--Drop--Container">
                <Dropdown className="Catalogo--Drop" placeholder='Filtrar' multiple selection options={categorias} />
            </div>
            
            <ItemListContainer/>
        </>
    )
}

export default Catalogo
