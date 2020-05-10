//Variables Globales
var operacion='', resultado=0, pantallaResul='';

function Calculadora(){
    //Instancias de variables, n= numero
    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n0; 
    var igual, punto, suma; 
    var resta, multi, division;

    //Obtener el elemento con Dom

    n1 = obtenerElemento('btn1'); n2 = obtenerElemento('btn2'); n3 = obtenerElemento('btn3'); 
    n4 = obtenerElemento('btn4'); n5 = obtenerElemento('btn5'); n6 = obtenerElemento('btn6');  
    n7 = obtenerElemento('btn7'); n8 = obtenerElemento('btn8'); n9 = obtenerElemento('btn9');
    n0 = obtenerElemento('btn0'); bthBorrarTodo = obtenerElemento('borrarTodo');
    suma = obtenerElemento('btnSuma'); multi = obtenerElemento('btnMultiplicacion'); 
    resta = obtenerElemento('btnResta'); division = obtenerElemento('btnDiv'); 
    igual = obtenerElemento('btnIgual'); punto = obtenerElemento('btnPunto');
    pantallaResul = obtenerElemento('pantallaResultado');


    //Eventos de los distintos botones
    
    btnClick(n1); 
    btnClick(n2);
    btnClick(n3); 
    btnClick(n4); 
    btnClick(n5); 
    btnClick(n6);  
    btnClick(n7); 
    btnClick(n8);
    btnClick(n9);
    btnClick(n0);
    btnClick(suma);
    btnClick(resta);
    btnClick(multi);
    btnClick(division);
    btnClick(punto);
    
    //Se coloca el resultado en 0, la pantalla de impresion tambien esta vacia y operacion vuelve a estar en blanco
    bthBorrarTodo.onclick = function(){ resultado = 0; pantallaResul.value = '';  operacion = '';}
    //Llamada del metodo para que se evalue la funcion que se encunetre en operacion
    igual.onclick = function(){ evaluar();}

}

//Funcion que sirve para tomar el valor del elemento con su identificador 
function obtenerElemento(btnID){
    return document.getElementById(btnID);
}

//funcion para concatenar la operacion
function operacionConc(valor){
    operacion += valor.innerHTML;
    pantallaResul.value = operacion;
}

//funcion para saber si se dio click en el boton
function btnClick(btn){
    btn.onclick = function() { operacionConc(btn); } 
}

//funcion para evaluar la operacion
function evaluar(){
    resultado=eval(operacion);
    pantallaResul.value = resultado;
    operacion = '('+operacion+')';
}

 
