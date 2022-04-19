function  calcularPesoIdeal ( ) {
    // Obtenemos la edad ingresada por el usuario
    var  edad  =  document.getElementById ( 'txt_edad' ) . value ;

    // Calculamos el peso ideal
    var  peso_ideal  =  edad  *  2  +  8  ;

    // Desplegamos el resultado del peso ideal
    var  contenedor_peso_ideal  =  document.getElementById ( 'cnt_resultado_texto_peso_ideal' ) ;
    contenedor_peso_ideal.innerHTML  =  "<b>Peso ideal : </b>" + peso_ideal ;
    
    // Invocamos la función calcularEstadoPeso
    calcularEstadoPeso ( peso_ideal ) ;
}
function  calcularEstadoPeso ( peso_ideal ) {
    // Obtenemos el peso real de ingreso por el usuario
    var  peso_actual  =  documento.getElementById ( 'txt_peso_actual' ) . valor ;

    //Comparamos el peso real y el peso ideal para determinar
    //el estado de peso
    var  estado_peso  =  "" ;
    var  imagen  = "" ;
    if ( peso_actual  ==  peso_ideal ) {
        estado_peso  =  "Peso ideal" ;
        imagen  =  "pesoideal_256x256.png" ;
    } else {
        if ( peso_actual  >  peso_ideal ) {
            estado_peso  =  "Sobrepeso" ;
            imagen  =  "sobrepeso_256x256.png" ;

        } else {
            estado_peso  =  "Bajopeso" ;
            imagen  =  "bajopeso_256x256.png" ;
        }
    }
    // Desplegamos el resultado con estado peso
    var  contenedor_estado_peso  =  documento . getElementById ( 'cnt_resultado_texto_estado_peso' ) ;
    contenedor_estado_peso . innerHTML  =  "<b>Estado peso :</b>" + estado_peso ;

    //Invocamos la función para desplegar imágen alusiva
    mostrarImagenEstadoPeso ( imagen ) ;

}
function  mostrarImagenEstadoPeso ( imagen ) {
    //Desplegamos la imagen que corresponde
    var  contenedor_imagen  =  documento . getElementById ( 'cnt_resultado_imagen_estado_peso' ) ;
    contenedor_imagen . innerHTML  =  "<img src=img/" + imagen + ">" ;

}