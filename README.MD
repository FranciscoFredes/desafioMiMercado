Desafío - Mercado web

En este desafío validaremos nuestros conocimientos de las sesiones anteriores. Para lograrlo, necesitarás aplicar todo lo aprendido en las clases de Handlebars y los motores deplantillas, parciales, helpers y de la integración de jQuery y Bootstrap,, utilizando de apoyo el archivo Apoyo Desafío - Mercado web.
Lee todo el documento antes de comenzar el desarrollo grupal, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos

Requerimientos 

Requerimientos
1. Crear una ruta raíz que al ser consultada renderice una vista con un parcial
“Dashboard” enviándole en el render un arreglo con los nombres de los productos. Se
recomienda que estos coincidan con las imágenes de cada producto. (3 Puntos)
2. Incluir en la vista un parcial que contenga el menú del sitio web y sea renderizado
antes del Dashboard. (2 Puntos)
3. Crear un parcial “producto” que contenga el template correspondiente a la
presentación de cada producto en el Dashboard y reciba como parámetro el nombre
del producto. (2 Puntos)
4. Crear un parcial para la sección principal en donde se renderice un helper con el
mensaje de bienvenida y se realice una iteración para renderizar un parcial “producto”
pasándole como argumento el nombre de cada producto. (2 Puntos)
5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares
creados en el servidor. Estas dependencias deben ser instaladas con NPM. (1
Punto)


Uso 

 1.Clona este repositorio.
 2.Instala las dependencias usando npm install.
 3.Ejecuta el servidor usando npm server.js
 4.Accede al sitio web estático en tu navegador.

Librerias necesarias
    1. Express
    2. Bootstrap
    3. Express-handlebars
    4. fs-extra
    5. jquery