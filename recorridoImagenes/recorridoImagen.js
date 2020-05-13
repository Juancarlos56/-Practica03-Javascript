//Definimos e iniciamos las variables necesarias

var desplazarIzquierda=0;
var desplazarDerecha=0;
var imgArray = new Array();
//Vector de imagenes cargadas
var imagenes = [];
var contadorImagenes =0;
var resolucionPantalla = screen.width;
var resolucionPantallaSiempre = screen.width;
var resolucionPantalla2 = eval(resolucionPantalla*(-1));
var temp1 = setInterval(desplazarDerIzq,100);    
var temp2 = setInterval(desplazarIzqDer,100); 
var t = setInterval('',100); 
clearInterval(t); 
var tD = setInterval('',100); 
clearInterval(tD);

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
    imgArray[6].src = './imagenes/arte.jpg';
    
    imgArray[7] = new Image();
    imgArray[7].src =  './imagenes/newyork.jpg';
  
    imgArray[8] = new Image();
    imgArray[8].src = './imagenes/arte2.jpg';
  
    imgArray[9] = new Image();
    imgArray[9].src = './imagenes/oceano.jpg';
    
    var numeros = numerosAleatorios(5,9);
    
    for (var i = 0; i < numeros.length; i++) {
        imagenesSelec.push(imgArray[numeros[i]]);
    }

    imagenes = imagenesSelec;
    
    
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


function startTimer () {
    timer.start();
    setTimeout(stopTimer,2000);
}

function stopTimer () {
    timer.stop();
}




function inciarRecorrido(elemento){
    contadorImagenes =0;
    console.log("aqui");
    cargaImagenes();
    //Habilitamos los botones izquierda y derecha
    document.getElementById('btnIzquierda').disabled = true; 
    document.getElementById('btnDerecha').disabled = false;
    clearInterval(setInterval(desplazarDerIzq,100)); 

    document.getElementById('imagenPresentada').src =  imagenes[contadorImagenes].src;
}

 //la función mover, que hace el idem con el objeto
 function desplazarDerIzq(){
    
    if (resolucionPantalla > 10) {
        resolucionPantalla-=20; //desplazar fondo1 -10px
        posicion1=resolucionPantalla+"px"; //preparar para código CSS fondo1
        //movemos la imagen en el eje x e y asignando un valor en px
        document.getElementById("imagenPresentada").style.left= posicion1;
    }else{
        clearInterval(t);
    }
 
}


function moverDerecha(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnIzquierda').disabled = false; 
    screen.width = resolucionPantallaSiempre;
    resolucionPantalla = screen.width;

    if (contadorImagenes == -2) { contadorImagenes=0;}
    

    if (contadorImagenes >= 0 && contadorImagenes < 5){
        
        if (contadorImagenes == 0) {
            //setInterval(desplazarDerIzq,75);
            
            t = setInterval(desplazarDerIzq,100);
            
            //setTimeout('',2000);
            document.getElementsByClassName('formatoImagen').src = imagenes[contadorImagenes].src;
           
        }
        
        contadorImagenes++;
        console.log("clearInterval(cont "+contadorImagenes);
        if (contadorImagenes != 5) {
            
            //setInterval(desplazarDerIzq,75);
            t = setInterval(desplazarDerIzq,100); 
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


//la función mover, que hace el idem con el objeto
function desplazarIzqDer(){
    
    if (resolucionPantalla > resolucionPantalla2) {
        resolucionPantalla2 +=20; //desplazar fondo1 -10px
        posicion1=resolucionPantalla2+"px"; //preparar para código CSS fondo1
        //movemos la imagen en el eje x e y asignando un valor en px
        document.getElementById("imagenPresentada").style.right= posicion1;
    }else{
        clearInterval(tD);
    }
 
}



function moverIzquierda(elemento){
    //Habilitamos botones derecha
    document.getElementById('btnDerecha').disabled = false; 
    screen.width = resolucionPantallaSiempre;
    resolucionPantalla = screen.width;
    resolucionPantalla2 = 0;


    if (contadorImagenes == 5) { contadorImagenes--;}
    
    if ((contadorImagenes >= 0) &&(contadorImagenes < 5)){
        
        contadorImagenes--;

        if (contadorImagenes != -1) {
            
            tD = setInterval(desplazarIzqDer,100); 
            console.log("cont "+contadorImagenes);
            document.getElementById('imagenPresentada').src = imagenes[contadorImagenes].src;
            clearInterval(tD);
        }else{
            contadorImagenes = -2;
            document.getElementById('btnIzquierda').disabled = true;
            console.log("no hay mas fotos");
        }
    }

}

