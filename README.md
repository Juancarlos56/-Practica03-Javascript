# Practica03-Javascript

A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos.

## 1.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 

#### Interfaz del Formulario 

![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/formulario.png)


#### a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. 

Funcion para validar que la entrada sean solo numeros. 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/validarNumeros.png)

Función para validar si la cedula es correcta. 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/funcionCel.png)


#### Comprobación
##### Funcion para validar la longuitud de la cedula:  validacion en base al último dígito verificador.
1.	Se debe validar que tenga 10 numeros
2.	Se extrae los dos primero digitos de la cedula y compruebo que existan las regiones
3.	Extraigo el ultimo digito de la cedula y el tercer digito debe ser menor a 6
4.	Extraigo Todos los pares y los sumo
5.	Extraigo Los impares los multiplico x 2 si el numero resultante es mayor a 9 le restamos 9 al resultante
6.	Extraigo el primer Digito de la suma (sumaPares + sumaImpares
7.	Conseguimos la decena inmediata del digito extraido del paso 6 (digito + 1) * 10 
8.	Restamos la decena inmediata - suma / si la suma nos resulta 10, el decimo digito es cero
9.	Comparamos el digito resultante con el ultimo digito de la cedula si son iguales 

#### Ingreso de cedula incorrecta: 

![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/cedulaInCorrecta.png)

#### Ingreso de cedula correcta: 

![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/cedulaCorrecta.png)

### b.	Se debe validar qué, en el campo de los nombres, ingrese exclusivamente dos nombres y que permita ingresar sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido. 
#### Comprobación
 ##### Ingreso un solo nombre: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/nombresIncorrecto.png)
 ##### Ingreso mas de un nombre: 
 ![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/nombrescorrecto.png)
 
#### c.	Se debe validar qué, en el campo de los apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido. 

#### Comprobación
##### Ingreso un solo apellido: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/apellidosIncorrectos.png)
##### Ingreso mis dos apellidos: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/apellidoscorrectos.png)

#### d.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos. 
#### Comprobación
#####  Ingreso un teléfono con más de 7 o 10 caracteres numéricos: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/telefonoIncorrecto.png)
##### Ingreso un teléfono con 7 o 10 caracteres numéricos: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/telefonocorrecto.png)

#### e.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 
#### Comprobación
#####  Ingreso de formato erróneo 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/fechaNacIncorrecto.png)

#####  Ingreso de formato correcto 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/fechaNacCorrecto.png)

#### f.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

#### Comprobación
#####  Ingresos erróneos: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/correoIncorrecto1.png)
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/correoIncorrecto2.png)
#####  Ingreso correcto: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/correoCorrecto.png)

#### g.	Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)
#### Comprobación
#####  Ingreso incorrecto:
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/contrasenaIncorrecta1.png)
![](masterhttps://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/correoIncorrecto2.png)
#####  Ingreso correcto: 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/contrasenaCorrecta.png)

### Indicaciones:
#### Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintará el campo con un borde rojo que representará que el campo tiene un error.
#### Comprobación
#####  Datos incorrectos:
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/formularioDatosErroneos.png)
#####  Datos correctos:
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/formularioDatosCorrectos.png)

#### Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. Excepto el campo de tipo password. 
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/inputTipoTexto.png)

#### Todos los campos deben ser ingresados de manera obligatoria y esto se verificará al momento de “enviar” (submit) la información del formulario hacia una página php. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, ¡pasaste las validaciones!”.
![](https://github.com/Juancarlos56/Practica03-Javascript/blob/master/informe/php.png)


### Estructura de dos columnas 



#### Se tomo como base la estructura presentada y se le aplico algunos estilos: 

##### Encabezado:
•	Logo
•	Buscador
•	Tres botones (Acceder, Mensajes, Crear cuenta)
•	Barra de Menu

![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/cabeceraMusica.png)


#### Columnas 1 y 2: 
##### Cada una tiene un contenido diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/textomusica.png)
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/textomusica2.png)

#### Separador de Contenido: 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/bandas.png)

#### Columnas 1 y 2: 
##### Cada una tiene un contenido diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/textomusica3.png)

#### Separador de Contenido: 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/bandasMasCono.png)

### Columnas 1 y 2: 
#### Cada una tiene un contenido diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/mejoresBandas.png)

#### Separador de Contenido: 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/bandasMasCono.png)


#### Unificación de Columnas 1 y 2:
##### Inserción de tabla
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/tablaBandas.png)

#### Sección 5:
##### Pie de Página: En este caso se hizo algo diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/piePagina.png)

### Modelo de Estructura en tres Columnas 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/estructuraTresColumnas.png)

### Encabezado:
- Logo
- Buscador
- Tres botones (Acceder, Mensajes, Crear cuenta)
- Barra de Menu 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/loqueNecesitas.png)

### Columnas 1,2 y 3:
#### Cada una tiene un contenido diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/fila1.png)

### Separador de Contenido:
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/historia.png)

### Columnas 1, 2 y 3:
#### Cada una tiene un contenido diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/fila2.png)


### Sección 5:
#### Pie de Página: En este caso se hizo algo diferente
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/piePagina.png)

### Se aplico el estilo de dos columnas en:
• Bandas Indie
• Videos Musicales
• Publicaciones
• Historia
• Presentaciones
• Audios Musicales
### Se aplico el estilo de 3 columnas en:
• Contactos
• About Us

### 3.De igual manera, se pide que se organice en al menos cuatro archivos CSS los estilos para las
### diferentes páginas html, estos archivos estarán almacenados en una carpeta llamada css. Un
### archivo será para el diseño a dos columnas, otro archivo para el diseño a tres columnas, otro
### archivo para el diseño de la página home. Por último, un archivo para las reglas CSS relacionas a
### textos, colores, tablas, secciones, artículos, imágenes, etc.

#### Estructura de Css
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/estilosCss.png)

#### CSS para el diseño de dos columnas 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/disenodoscol.png)
#### Para ver todo el código entrar en GitHub disenoTresColumnasCSS.css

### CSS para el diseño de tres columnas 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/disenotrescol.png)
#### Para ver todo el código entrar en GitHub disenoTresColumnasCSS.css

### CSS para el diseño de página Home
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/pageHome.2png.png)

También, se pide que se utilice selectores por etiquetas, selectores descendentes, selectores por clase y
selectores por id

### Selectores por Clases
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/selectorClase.png)

### selectores descendentes
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/selectorDecendente.png)

### Selectores por id
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/selectorId.png)

### Selectores por etiquetas
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/selectoretiquetas.png)

### Asimismo, se pide que se personalice todos los hipervínculos usando pseudoclases.
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/pseudoclases.png)

### También, se pide que se cree un menú horizontal (navegación) para todas las páginas. Como se puede
### observar en la Figura 1.
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/menu.png)

### De igual manera, se pide crear una nueva página HTML, en donde, se muestre un formulario de contacto
### o crear cuenta que tenga campos como: nombre, mensaje y botón para enviar.
#### Se creo dos paginas html para el inicio de sección y para el registro de un nuevo cliente

![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/formulario.png)

### 4. Al finalizar la práctica se debe validar todas las páginas HTML y hojas de estilos CSS
### creadas usando el W3C Validator


### Audio.html
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/audio.png)
### About Us
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/aboutUs.png)
### Bandas Indie
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/bandasIndie.png)
### Contactos
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/contactos.png)
### Formulario Inicio Sesion
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/inicioSesion.png)
### Formulario Registro Cuenta
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/registroCuenta.png)
### Historia
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/historiaValidor.png)
### Index
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/index.png)
### Presentaciones 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/presentaciones.png)
### Publicaciones 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/publicaciones.png)
### Videos Musicales
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/videoMusicales.png)
### Diseño de dos columnas 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/doscolVal.png)
### Diseño de tres columnas
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/tresColVal.png)
### Estilos de CSS
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/estilosCss.png)
### Page Home 
![](https://github.com/Juancarlos56/Practica02-MiSitioWebCSS/blob/master/informe/pageHome.png)

#### Usuario: Juancarlos56
#### URL: https://github.com/Juancarlos56/Practica02-MiSitioWebCSS

## CONCLUSIONES:

### A través de esta práctica se logró comprender los conceptos básicos de html5 y CSS y sus respectivas funcionalidades que posee cada etiqueta, y para que funcionan cada una de ellas, además de eso se logró comprender una estructura correcta de cómo desarrollar una página web pero sabiendo también que eso va a depender del gusto de cada uno. Se logro corregir errores a través de la plataforma web https://validator.w3.org/ la cual fue de gran utilidad para ver en que estaba fallando con la sintaxis de html5 y CSS.



