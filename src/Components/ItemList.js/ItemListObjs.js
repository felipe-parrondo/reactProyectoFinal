const instanciasItemSave = [
    {
        pic: "http://127.0.0.1:5500/multimedia/products/tijera_mundial_negra.jpg", 
        name: "Tijera de Sastre", 
        price: "$99.99", 
        material: "Filo de Acero con Mango de Plástico", 
        measure: '9"', 
        id: "01001", 
        marca: "Mundial", 
        stock: "Disponible"
    }

]

const HTMLinstanciasItemSave = instanciasItemSave.map((i) =>{
    let HTML = "<div className='catalogoItems--item'> <img src='" + i.pic + "'/> <p className='catalogoItems--price'>" + i.price + " + </p> <p className='catalogoItems--desc'> "  + i.name +" </p> </div>"

})

export default HTMLinstanciasItemSave


//pasarlas al formato correcto despues
("http://127.0.0.1:5500/multimedia/products/tijera_mundial_roja.jpg", "Tijera de Sastre", "$105.50", "Acero con Mango Pintado", '12"', "01002", "Mundial", "Disponible")  //TMS 2

("http://127.0.0.1:5500/multimedia/products/tijera_mundial_plateada.jpg", "Tijera de Modista", "$149.99", "Acero", '10"', "01003", "Mundial", "Disponible")  //TMM

("http://127.0.0.1:5500/multimedia/products/tijera_germania_plateada.jpg", "Tijera de Sastre", "$170.25", "Acero", '11"', "01004", "Mundial", "Disponible") //TMS 4

("http://127.0.0.1:5500/multimedia/products/tijera_sastre.jpg", "Tijera de Sastre", "$114.99", "Filo de Acero con Mango de Plástico", '8"', "01005", "Mundial", "Disponible")  //TMS 5

("http://127.0.0.1:5500/multimedia/products/tijera_pajarito_tornasolada.jpg", "Tijera Pajarito", "$120.20", "Acero Tornasolado", '5"', "01006", "Germania", "Disponible")  //TPajarito

("http://127.0.0.1:5500/multimedia/products/tijera_entresacar.jpg", "Tijera Peluquería - Entresacar", "$120.20", "Acero", '8"', "01007", "Germania", "Disponible")  //TPEntre

("http://127.0.0.1:5500/multimedia/products/tijera_pulir.jpg", "Tijera Peluquería - Pulir", "$120.20", "Acero", '8"', "01008", "Germania", "Disponible")  //TPPulir

("http://127.0.0.1:5500/multimedia/products/hilo_blanco.jpg", "Caja de Hilos Blancos", "$39.99", "Poliéster", "4000 metros", "02001", "Genérica", "Disponible")  //HBlanco

("http://127.0.0.1:5500/multimedia/products/hilo_negro.jpg", "Caja de Hilos Negro", "$39.99", "Poliéster", "4000 metros", "02002", "Genérica", "Disponible")  //HNegro

("http://127.0.0.1:5500/multimedia/products/agujas.jpg", "Pack de Agujas", "$49.99", "Acero", '1"', "03001", "Genérica", "Disponible")  //Agujas

("http://127.0.0.1:5500/multimedia/products/cortahilacha_negra.jpg", "Cortahilachas", "$24.99", "Acero con Mango de Plástico", '3"', "04001", "Germania", "Disponible")  //Cortahilacha

("http://127.0.0.1:5500/multimedia/products/parches.jpg", "Parches", "$69.99", "Tela Reforzada", "5x5 / 10x10", "05001", "Genérica", "Disponible")  //Parches

("http://127.0.0.1:5500/multimedia/products/enhebrador.jpg", "Enhebradores", "$64.99", "Madera y Plástico", '5"', "05002", "Genérica", "Disponible")  //Enhebrador

("http://127.0.0.1:5500/multimedia/products/cierre.jpg", "Pack de Cierres", "$37.50", "Tela y Acero", "5 metros", "05003", "Genérica", "Disponible")  //Cierre

("http://127.0.0.1:5500/multimedia/products/botones.jpg", "Caja de Botones", "$34.99", "Madera y Plástico", '1" - 6"', "06001", "Genérica", "Disponible")  //Boton

("http://127.0.0.1:5500/multimedia/products/cinta_metrica.jpg", "Cinta Métrica", "$80.50", "Plástico", "10 metros", "07001", "Genérica", "Disponible")  //CMetrica

("http://127.0.0.1:5500/multimedia/products/cinta_reflectiva.jpg", "Cinta Reflectiva", "$87.50", "Plástico Reflectivo", "10 metros", "07002", "Bulfer", "Disponible")  //CReflectiva