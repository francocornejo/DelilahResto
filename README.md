# DelilahResto

Tercer trabajo del curso de Desarrollo Web Full Stack de Acámica.

Tecnologías utilizadas:
<li>Node js</li>
<li>Express</li>
<li>MySQL</li>
<li>Postman</li>
<li>Sequelize</li>
<li>Swagger</li>
<li>JWT</li>

<h2>Instalación e inicialización del proyecto:</h2>
1) Clonar el proyecto:
Clonar el repositorio desde el <a href= "https://github.com/francocornejo/DelilahResto">siguiente link</a>

Desde consola ejecutar el comando:

git clone https://github.com/francocornejo/DelilahResto

2) Instalar las dependencias:
<li>npm install</li>
<li>npm i -g nodemon</li>
<li>npm i --save express</li>
<li>npm i --save body-parser</li>
<li>npm i --save jsonwebtoken</li>
<li>npm -i --save dotenv</li>
<li>npm -i --save sequelize</li>
<li>npm -i — save mysql2</li>
<li>npm -i --save bcrypt</li>
<li>npm - i --save jsonwebtoken</li>

3) Acceder a la base de datos:
Abrir XAMPP e iniciar los servicios de Apache y MYSQL
Para abrir MYSQL: Database y luego acceder a phpMyAdmin
Ver información de acceso a la DB en el archivo .env

4) Iniciar proyecto:
Es necesario poner 'force: true' al menos una vez en el archivo 'app.js'.
Utilizar 'force: true' sólo la primera vez que se corre la aplicación, y luego pasarlo a 'false', ya que, en caso contrario, las tablas se van a borrar y volver a crear.
Iniicar la aplicación con el comando:
nodemon app

5) Documentación de la API:
Abrir el archivo openapi.js e importarlo en Swagger
IMPORTANTE: Para crear un usuario ADMIN, es necesario agregar la propiedad 'isAdmin: true', ya que por defecto si no agregamos esta propiedad el usuario no tiene permisos de edición.
6) Preparado para utilizar!
Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas
