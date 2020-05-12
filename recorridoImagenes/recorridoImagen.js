//Definimos e iniciamos las variables necesarias

var desplazarIzquierda=0;
var desplazarDerecha=0;
var imgArray = new Array();
//Vector de imagenes cargadas
var imagenes = [];
var contadorImagenes =0;


function cargaImagenes(){
    var imagenesSelec = [];

    imgArray[0] = new Image();
    imgArray[0].src = './imagenes/ciudad.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = './imagenes/ciudad2.jpg';

    imgArray[2] = new Image();
    imgArray[2].src = './imagenes/ciudad3.png';

    imgArray[3] = new Image();
    imgArray[3].src = './imagenes/tanques.jpg';

    imgArray[4] = new Image();
    imgArray[4].src = './imagenes/fondo.jpg';

    imgArray[5] = new Image();
    imgArray[5].src =  './imagenes/pasto.jpg';
  
    imgArray[6] = new Image();
    imgArray[6].src = './imagenes/tanques.jpg';
    
    imgArray[7] = new Image();
    imgArray[7].src =  './imagenes/pasto.jpg';
  
    imgArray[8] = new Image();
    imgArray[8].src = './imagenes/fondo.jpg';
  
    imgArray[9] = new Image();
    imgArray[9].src = './imagenes/ciudad2.jpg';
    
    var numeros = numerosAleatorios(5,9);
    
    for (var i = 0; i < numeros.length; i++) {
        imagenesSelec.push(imgArray[numeros[i]]);
    }

    imagenes = imagenesSelec;
    
    /*
    var intervalo=setInterval("moverIzquierda()",5);
    pararmover=setInterval(moverIzquierda,50); //iniciar primer temporizador: movimiento
    */
}

//Obtencion de 5 numeros aleatorios para las imagenes
function numerosAleatorios(max, rango) {
    var vectorNumeros = [];
    var numaleatorio =0;
    var cont= 0;
    
    for(var i=0 ; i<= max ; i++){
        numaleatorio = Math.floor(Math.random() * (rango+1));
        for(var j=0; j<=i; j++){
            if(-1 === vectorNumeros.indexOf(numaleatorio)){
                console.log(numaleatorio);
                vectorNumeros.push(numaleatorio);
                cont++;
            }else{
                i--;
            }
        }
        if (cont === 5) {
            i = max;
        }
    }

    return vectorNumeros;
}







function inciarRecorrido(elemento){
    contadorImagenes =0;
    console.log("aqui");
    cargaImagenes();
    //Habilitamos los botones izquierda y derecha
    document.getElementById('btnIzquierda').disabled = true; 
    document.getElementById('btnDerecha').disabled = false;
    document.getElementById('imagenPresentada').src =  imagenes[0].src;
}

 //la función mover, que hace el idem con el objeto
 function desplazarDerIzq(){
    desplazarIzquierda-=10; //desplazar fondo1 -10px
    desplazarDerecha=desplazarIzquierda+450; //desplazar fondo2 a la vez
    posicion1=desplazarIzquierda+"%"; //preparar para código CSS fondo1
    posicion2=desplazarDerecha+"px"; //preparar para código CSS fondo1
    
   
    //movemos la imagen en el eje x e y asignando un valor en px
    document.getElementById("imagenPresentada").style.marginLeft= posicion1;
 
}


function moverDerecha(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnIzquierda').disabled = false; 
    if (contadorImagenes == -2) { contadorImagenes=0;}

    if (contadorImagenes >= 0 && contadorImagenes < 5){
        
        if (contadorImagenes == 0) {
            document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
            
        }
        
        contadorImagenes++;
        console.log("cont "+contadorImagenes);
        if (contadorImagenes != 5) {
            
            document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
        }else{
            document.getElementById('btnDerecha').disabled = true;
            console.log("no hay mas fotos");
        }
        

    }else{
        document.getElementById('btnDerecha').disabled = true;
        console.log("no hay mas fotos");
    }
}

function moverIzquierda(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnDerecha').disabled = false; 
    if (contadorImagenes == 5) { contadorImagenes--;}
    
    if ((contadorImagenes >= 0) &&(contadorImagenes < 5)){
        
        contadorImagenes--;

        if (contadorImagenes != -1) {
            console.log("cont "+contadorImagenes);
            document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
        }else{
            contadorImagenes = -2;
            document.getElementById('btnIzquierda').disabled = true;
            console.log("no hay mas fotos");
        }
    }

}


function moverDerechaD(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnIzquierda').disabled = false; 
    if (contadorImagenes == -2) { contadorImagenes=1;}

    if (contadorImagenes < 5){
        console.log("cont "+contadorImagenes);
        
        document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
        contadorImagenes++;
    }else{
        document.getElementById('btnDerecha').disabled = true;
        console.log("no hay mas fotos");
    }
}

function moverIzquierdaD(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnDerecha').disabled = false; 
    if (contadorImagenes == 5) { contadorImagenes--;}
    
    if ((contadorImagenes >= 0) &&(contadorImagenes < 5)){
        
        contadorImagenes--;
        
        if (contadorImagenes != -1) {
            console.log("cont "+contadorImagenes);
            document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
        }else{
            contadorImagenes = -2;
            document.getElementById('btnIzquierda').disabled = true;
            console.log("no hay mas fotos");
        }
    }

}
