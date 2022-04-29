# Alkemy Fullstack JS Challenge

Este challenge consiste en el desarrollo de una aplicación para administración de presupuesto personal en la cual el usuario podrá crear y editar ingresos y egresos de dinero, y podrá ver un balance resultante de las operaciones registradas.

## Pre-Requisitos

* MySQL 

  * Para que la aplicación funcione es necesario contar con una base de datos MySQL. Se recomienda MySQL 8.0 ya que es la que se utilizó durante el desarrollo. [Guía instalación](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

* Git
* NPM



## Estructura del proyecto

```
  alkemy-challenge
  |   README.md
  |
  |---client
  |   |   App.js
  |   |   index.js
  |   |   index.css
  |   |---public
  |   |        index.html
  |   |---src
  |       |---components
  |       |---context
  |       |---hooks
  |       |---services
  |
  |---server
      |   .env
      |   connection.js
      |   index.js
      |---controllers
      |---database
      |---middlewares
      |---requests
      |---utils
```


## Construido con

* Node ![Node](https://nodejs.org/static/images/logo.svg)
* Express
* React
* JavaScript
* CSS
* HTML5


## Despliegue


1. Clonar repositorio:  `git clone https://github.com/MarcosDev98/alkemy-challenge.git`.
2. Crear un archivo `.env` en el directorio /server/ el cual contenga las siguientes variables: 

    PORT=5005

    HOST='localhost'
    
    USER_DB='', Dentro de las comillas ingrese el usuario de su Base de datos.
    
    PASSWORD='', Dentro de las comillas ingrese la contraseña de su Base de datos.
    
    DATABASE='alkemy_fullstack'  
    
    SECRET='alkemy'

    
3. Ejecutar el script SQL que se encuentra en alkemy-challenge/server/database/db.sql el cual contiene la estructura de la Base de Datos y algunos datos necesarios para que la aplicación funcione.
4. Ejecutar el comando `npm install` dentro del directorio /server/ para instalar las dependencias del backend.
5. Ejecutar el comando `npm run start` dentro del directorio /server/ para iniciar el servidor.
6. Ejecutar el comando `npm install` dentro del directorio /client/ para instalar las dependencias del frontend.
7. Ejecutar el comando `npm run start` dentro del directorio /client/ para iniciar la aplicacion

