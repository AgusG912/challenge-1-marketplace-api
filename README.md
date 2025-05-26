# 🚀 Proyecto Challenge 1 - API de Consulta con Prisma y SQLite (Marketplace)

Este proyecto consiste en una API sencilla que simula los procesos de una aplicación externa cuya única funcionalidad es un CRUD de datos. Sin embargo, incluye todas las validaciones necesarias para autenticación, configuración de CORS, middlewares para la validación de campos y estructuras esperadas, así como la documentación de errores.

<details>

<summary> 📍 Este repositorio forma parte de un grupo.</summary>

<br/>

 > [Frontend](https://github.com/AgusG912/challenge-1-front-end)

 > [Backend](https://github.com/AgusG912/challenge-1-back-end)

 > **📌 Marketplace**

</details>

## 📦 Características

- **Autenticación**: Implementación de validaciones para garantizar la seguridad de las solicitudes.
- **CORS**: Configuración para permitir el acceso desde diferentes orígenes.
- **Middlewares**: Validación de datos y estructuras esperadas en las solicitudes.
- **Documentación de errores**: Registro y gestión de respuestas de error con descripciones adecuadas.
- **ORM con Prisma**: Se utiliza Prisma para gestionar la base de datos.
- **Base de datos SQLite**: La API almacena datos en un archivo `dev.db`.
- **Configuración con `.env`**: Todas las configuraciones necesarias son manejadas mediante variables de entorno.

## 🔧 Instalación

Para facilitar el despliegue y uso del proyecto, se han creado scripts personalizados que permiten una instalación sencilla con el menor número de pasos posible.

### Pasos para instalar:

1. Renombra `.env.template` a `.env`. Y configura las variables:

   ```cli
    # Es el puerto donde correra la aplicacion.

        PORT=3000

    # Es el token que servira de autenticador para todas las peticiones que se reciban en la api. (Es importante que este token y el backend challenge 1 sean exactamente iguales).

        AUTHORIZATION_TOKEN=My_private_token
   ```

2. Instalar las dependencias:

   ```cli
        npm install
   ```

3. Ejecutar el comando personalizado que configura el ORM Prisma y ejecuta el seed:

   ```cli
       npm run setup
   ```

4. Correr el entorno de desarrollo:
   ```cli
       npm run dev
   ```

## 📁 Estructura de archivos

```
    - Tree files

    │
    ├───prisma
    │       schema.prisma
    │       seed.js
    │
    └───src
        │   index.js
        │
        ├───controllers
        │   ├───products
        │   │       createProducts.controller.js
        │   │       getAllProducts.controller.js
        │   │       getProductByCode.controller.js
        │   │       patchProducts.controller.js
        │   │
        │   └───sales
        │           getAllSales.controller.js
        │           getSalesByCode.controller.js
        │
        ├───database
        │       dbConnection.js
        │
        ├───middleware
        │   ├───general
        │   │       authorization-token.auth.js
        │   │       checkBody.js
        │   │       checkBodyAllowKeys.js
        │   │       handleErrorMessage.js
        │   │
        │   └───products
        │           checkAllProductFields.js
        │           checkProductByCode.js
        │           checkProductFields.js
        │
        ├───routes
        │       products.routes.js
        │       sales.routes.js
        │
        └───schema
                allowed-bodyKeys.config.js

```
